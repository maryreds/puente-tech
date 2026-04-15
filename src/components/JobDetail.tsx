"use client";

import type { Job } from "./JobCard";

const palette = [
  { bg: "bg-rose-100", text: "text-rose-600", border: "border-rose-200" },
  { bg: "bg-blue-100", text: "text-blue-600", border: "border-blue-200" },
  { bg: "bg-emerald-100", text: "text-emerald-600", border: "border-emerald-200" },
  { bg: "bg-violet-100", text: "text-violet-600", border: "border-violet-200" },
  { bg: "bg-amber-100", text: "text-amber-600", border: "border-amber-200" },
  { bg: "bg-cyan-100", text: "text-cyan-600", border: "border-cyan-200" },
  { bg: "bg-pink-100", text: "text-pink-600", border: "border-pink-200" },
  { bg: "bg-orange-100", text: "text-orange-600", border: "border-orange-200" },
  { bg: "bg-teal-100", text: "text-teal-600", border: "border-teal-200" },
  { bg: "bg-indigo-100", text: "text-indigo-600", border: "border-indigo-200" },
];

function hashCode(s: string): number {
  let hash = 0;
  for (let i = 0; i < s.length; i++) {
    hash = (hash << 5) - hash + s.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function formatSalary(min?: number, max?: number): string {
  if (!min && !max) return "Competitive salary";
  const fmt = (n: number) => "$" + Math.round(n / 1000) + ",000";
  if (min && max) return `${fmt(min)} – ${fmt(max)} / year`;
  if (max) return `Up to ${fmt(max)} / year`;
  return `From ${fmt(min!)} / year`;
}

function formatDate(d?: string): string {
  if (!d) return "";
  try {
    return new Date(d).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return d;
  }
}

export default function JobDetail({
  job,
  onClose,
}: {
  job: Job;
  onClose: () => void;
}) {
  const color = palette[hashCode(job.id) % palette.length];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Color header bar */}
        <div className={`${color.bg} rounded-t-3xl px-8 pt-8 pb-6`}>
          <div className="flex items-start justify-between">
            <div>
              <span
                className={`inline-block rounded-full ${color.bg} ${color.text} border ${color.border} px-3 py-1 text-xs font-medium mb-3`}
              >
                {job.type || "Full-time"}
              </span>
              <h2 className="text-2xl font-bold text-foreground leading-tight">
                {job.title}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-foreground transition-colors p-1"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="px-8 py-6 space-y-5">
          {/* Key details grid */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
                Location
              </p>
              <p className="text-sm font-medium text-foreground">
                {job.location}
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
                Estimated Salary
              </p>
              <p className={`text-sm font-semibold ${color.text}`}>
                {formatSalary(job.salary_min, job.salary_max)}
              </p>
            </div>
            {job.start_date && (
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
                  Start Date
                </p>
                <p className="text-sm text-foreground">
                  {formatDate(job.start_date)}
                </p>
              </div>
            )}
            {job.end_date && (
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
                  End Date
                </p>
                <p className="text-sm text-foreground">
                  {formatDate(job.end_date)}
                </p>
              </div>
            )}
            {(job.openings ?? 0) > 0 && (
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
                  Openings
                </p>
                <p className="text-sm text-foreground">{job.openings}</p>
              </div>
            )}
            {(job.remote_pct ?? 0) > 0 && (
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
                  Remote
                </p>
                <p className="text-sm text-foreground">{job.remote_pct}%</p>
              </div>
            )}
          </div>

          {/* Skills */}
          {job.skills &&
            job.skills !== "Null" &&
            !job.skills.includes("SKILLS TO BE ASSIGNED") && (
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-2">
                  Skills
                </p>
                <div className="flex flex-wrap gap-2">
                  {job.skills
                    .split(/[,;]/)
                    .map((s) => s.trim())
                    .filter(Boolean)
                    .map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600"
                      >
                        {skill}
                      </span>
                    ))}
                </div>
              </div>
            )}

          {/* Posted date */}
          {job.posted_at && (
            <p className="text-xs text-gray-400">
              Posted {formatDate(job.posted_at)}
            </p>
          )}

          {/* Visa info */}
          <div className="rounded-xl bg-green-50 border border-green-100 p-4">
            <p className="text-sm font-medium text-green-800 mb-1">
              Visa Sponsorship Available
            </p>
            <p className="text-xs text-green-600 leading-relaxed">
              This position includes TN or H-1B visa sponsorship for qualified
              candidates. We handle all documentation and immigration processes
              at no cost to you.
            </p>
          </div>

          {/* CTA */}
          <button className="w-full rounded-full bg-[#22c55e] text-white py-3.5 font-medium transition-transform duration-200 hover:scale-[1.02] hover:shadow-lg">
            Apply for This Role
          </button>
        </div>
      </div>
    </div>
  );
}
