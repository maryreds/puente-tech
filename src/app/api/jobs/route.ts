import { NextResponse } from "next/server";

const BASE_URL = (process.env.JOBDIVA_BASE_URL || "https://api.jobdiva.com").replace(/\/$/, "");
const CLIENT_ID = process.env.JOBDIVA_CLIENT_ID || "";
const USERNAME = process.env.JOBDIVA_USERNAME || "";
const PASSWORD = process.env.JOBDIVA_PASSWORD || "";

const CHUNK_DAYS = 13;
const LOOKBACK_DAYS = 90;
const PAGE_SIZE = 500;

function fmt(d: Date): string {
  const p = (n: number) => String(n).padStart(2, "0");
  return `${p(d.getMonth() + 1)}/${p(d.getDate())}/${d.getFullYear()} ${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())}`;
}

async function authenticate(): Promise<string> {
  const url = `${BASE_URL}/api/authenticate?clientid=${CLIENT_ID}&username=${encodeURIComponent(USERNAME)}&password=${encodeURIComponent(PASSWORD)}`;
  let lastStatus = 0;
  let lastBody = "";
  for (let attempt = 0; attempt < 3; attempt++) {
    const res = await fetch(url);
    lastStatus = res.status;
    lastBody = await res.text();
    if (res.ok) {
      return lastBody.replace(/^"|"$/g, "");
    }
    console.error(`Auth attempt ${attempt + 1} failed: ${res.status} — ${lastBody.substring(0, 200)}`);
    if (attempt < 2) await new Promise((r) => setTimeout(r, 1000));
  }
  throw new Error(`Auth failed after 3 attempts (last: ${lastStatus}, hasClientId: ${!!CLIENT_ID}, hasUser: ${!!USERNAME}, hasPass: ${!!PASSWORD})`);
}

type Rec = Record<string, unknown>;

async function fetchChunk(token: string, from: Date, to: Date, page: number): Promise<Rec[]> {
  const params = new URLSearchParams({
    fromDate: fmt(from),
    toDate: fmt(to),
    pageSize: String(PAGE_SIZE),
    pageNumber: String(page),
  });

  const res = await fetch(`${BASE_URL}/api/bi/NewUpdatedJobRecords?${params}`, {
    headers: { Authorization: token },
  });
  if (!res.ok) throw new Error(`Jobs fetch failed: ${res.status}`);

  const json = await res.json();
  const data = json.data;
  if (!data || !Array.isArray(data) || data.length < 2) return [];

  const headers = data[0] as string[];
  return data.slice(1).map((row: unknown[]) => {
    const obj: Rec = {};
    headers.forEach((h, i) => { obj[h] = row[i]; });
    return obj;
  });
}

async function fetchAllJobs(token: string): Promise<Rec[]> {
  const now = new Date();
  const all: Rec[] = [];
  const seen = new Set<string>();

  for (let offset = 0; offset < LOOKBACK_DAYS; offset += CHUNK_DAYS) {
    const chunkEnd = new Date(now.getTime() - offset * 86400000);
    const chunkStart = new Date(chunkEnd.getTime() - CHUNK_DAYS * 86400000);

    let page = 0;
    while (true) {
      const rows = await fetchChunk(token, chunkStart, chunkEnd, page);
      for (const r of rows) {
        const id = String(r.JOBID || "");
        if (id && !seen.has(id)) {
          seen.add(id);
          all.push(r);
        }
      }
      if (rows.length < PAGE_SIZE) break;
      page++;
    }

    if (offset + CHUNK_DAYS < LOOKBACK_DAYS) {
      await new Promise((r) => setTimeout(r, 200));
    }
  }

  return all;
}

function parseAnnualSalary(raw: Rec): { min: number; max: number } {
  const payMin = Number(raw.PAYRATEMIN || 0);
  const payMax = Number(raw.PAYRATEMAX || 0);
  const billMin = Number(raw.BILLRATEMIN || 0);
  const billMax = Number(raw.BILLRATEMAX || 0);
  const payFreq = String(raw.PAYFREQUENCY || "").toLowerCase();
  const billFreq = String(raw.BILLFREQUENCY || "").toLowerCase();

  const rate = payMax || payMin || billMax || billMin;
  const freq = payMax || payMin ? payFreq : billFreq;

  if (rate <= 0) return { min: 0, max: 0 };

  let annual: number;
  if (["annual", "yearly", "salary"].includes(freq)) {
    annual = rate;
  } else {
    annual = rate > 500 ? rate : rate * 2080;
  }

  return {
    min: Math.round(annual * 0.75),
    max: Math.round(annual),
  };
}

export async function GET() {
  if (!CLIENT_ID || !USERNAME || !PASSWORD) {
    return NextResponse.json({ error: "JobDiva credentials not configured" }, { status: 500 });
  }

  try {
    const token = await authenticate();
    const rawJobs = await fetchAllJobs(token);

    const jobs = rawJobs
      .filter((j) => {
        const status = String(j.JOBSTATUS || "").toUpperCase();
        const country = String(j.COUNTRY || "").toUpperCase().trim();
        const isOpen = status === "OPEN" || status === "ACTIVE" || status === "RELEASED";
        const isNotIndia = country !== "IN" && country !== "INDIA";
        return isOpen && isNotIndia;
      })
      .map((j) => {
        const { min, max } = parseAnnualSalary(j);
        const city = String(j.CITY || "").trim();
        const state = String(j.STATE || "").trim();
        const location = [city, state].filter(Boolean).join(", ") || "U.S.";

        return {
          id: String(j.JOBID),
          title: String(j.TITLE || "Untitled Position"),
          location,
          salary_min: min,
          salary_max: max,
          type: String(j.POSITIONTYPE || "Full-time"),
          skills: String(j.SKILLS || "").trim(),
          start_date: String(j.STARTDATE || ""),
          end_date: String(j.ENDDATE || ""),
          openings: Number(j.OPENINGS || 1),
          remote_pct: Number(j.REMOTE_PERCENTAGE || 0),
          posted_at: String(j.ISSUEDATE || ""),
        };
      });

    return NextResponse.json({ jobs, count: jobs.length }, {
      headers: { "Cache-Control": "s-maxage=300, stale-while-revalidate=600" },
    });
  } catch (err) {
    console.error("JobDiva API error:", err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
