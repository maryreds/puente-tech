const palette = [
  { bg: "bg-rose-100", text: "text-rose-600", icon: "text-rose-500" },
  { bg: "bg-blue-100", text: "text-blue-600", icon: "text-blue-500" },
  { bg: "bg-emerald-100", text: "text-emerald-600", icon: "text-emerald-500" },
  { bg: "bg-violet-100", text: "text-violet-600", icon: "text-violet-500" },
  { bg: "bg-amber-100", text: "text-amber-600", icon: "text-amber-500" },
  { bg: "bg-cyan-100", text: "text-cyan-600", icon: "text-cyan-500" },
  { bg: "bg-pink-100", text: "text-pink-600", icon: "text-pink-500" },
  { bg: "bg-orange-100", text: "text-orange-600", icon: "text-orange-500" },
  { bg: "bg-teal-100", text: "text-teal-600", icon: "text-teal-500" },
  { bg: "bg-indigo-100", text: "text-indigo-600", icon: "text-indigo-500" },
];

const icons = [
  // Briefcase — 3D purple
  <svg key="briefcase" viewBox="0 0 48 48" fill="none" className="w-8 h-8">
    <defs>
      <linearGradient id="bc1" x1="24" y1="8" x2="24" y2="42" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A78BFA"/><stop offset="1" stopColor="#7C3AED"/>
      </linearGradient>
    </defs>
    <rect x="6" y="18" width="36" height="22" rx="5" fill="url(#bc1)"/>
    <rect x="6" y="18" width="36" height="10" rx="5" fill="#C4B5FD" opacity="0.5"/>
    <rect x="16" y="10" width="16" height="10" rx="3" fill="none" stroke="#7C3AED" strokeWidth="3"/>
    <rect x="20" y="26" width="8" height="6" rx="2" fill="#EDE9FE"/>
  </svg>,
  // Code — 3D blue
  <svg key="code" viewBox="0 0 48 48" fill="none" className="w-8 h-8">
    <defs>
      <linearGradient id="cd1" x1="24" y1="4" x2="24" y2="44" gradientUnits="userSpaceOnUse">
        <stop stopColor="#60A5FA"/><stop offset="1" stopColor="#2563EB"/>
      </linearGradient>
    </defs>
    <rect x="6" y="6" width="36" height="36" rx="10" fill="url(#cd1)"/>
    <rect x="6" y="6" width="36" height="16" rx="10" fill="#93C5FD" opacity="0.4"/>
    <path d="M18 17l-7 7 7 7" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M30 17l7 7-7 7" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M26 14l-4 20" stroke="#DBEAFE" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>,
  // Chip — 3D teal
  <svg key="chip" viewBox="0 0 48 48" fill="none" className="w-8 h-8">
    <defs>
      <linearGradient id="ch1" x1="24" y1="6" x2="24" y2="42" gradientUnits="userSpaceOnUse">
        <stop stopColor="#5EEAD4"/><stop offset="1" stopColor="#0D9488"/>
      </linearGradient>
    </defs>
    <rect x="10" y="10" width="28" height="28" rx="6" fill="url(#ch1)"/>
    <rect x="10" y="10" width="28" height="12" rx="6" fill="#99F6E4" opacity="0.45"/>
    <rect x="18" y="18" width="12" height="12" rx="3" fill="#F0FDFA" opacity="0.9"/>
    <rect x="14" y="4" width="4" height="6" rx="2" fill="#0D9488"/><rect x="22" y="4" width="4" height="6" rx="2" fill="#0D9488"/><rect x="30" y="4" width="4" height="6" rx="2" fill="#0D9488"/>
    <rect x="14" y="38" width="4" height="6" rx="2" fill="#0D9488"/><rect x="22" y="38" width="4" height="6" rx="2" fill="#0D9488"/><rect x="30" y="38" width="4" height="6" rx="2" fill="#0D9488"/>
    <rect x="4" y="14" width="6" height="4" rx="2" fill="#0D9488"/><rect x="4" y="22" width="6" height="4" rx="2" fill="#0D9488"/><rect x="4" y="30" width="6" height="4" rx="2" fill="#0D9488"/>
    <rect x="38" y="14" width="6" height="4" rx="2" fill="#0D9488"/><rect x="38" y="22" width="6" height="4" rx="2" fill="#0D9488"/><rect x="38" y="30" width="6" height="4" rx="2" fill="#0D9488"/>
  </svg>,
  // Cloud — 3D sky blue
  <svg key="cloud" viewBox="0 0 48 48" fill="none" className="w-8 h-8">
    <defs>
      <linearGradient id="cl1" x1="24" y1="10" x2="24" y2="38" gradientUnits="userSpaceOnUse">
        <stop stopColor="#7DD3FC"/><stop offset="1" stopColor="#0284C7"/>
      </linearGradient>
    </defs>
    <path d="M12 36h26a8 8 0 00.8-15.96 10 10 0 00-19.22-2.6A9 9 0 0012 36z" fill="url(#cl1)"/>
    <path d="M12 36h26a8 8 0 00.8-15.96 10 10 0 00-19.22-2.6A9 9 0 0012 36z" fill="#BAE6FD" opacity="0.4" style={{clipPath:"inset(0 0 50% 0)"}}/>
    <ellipse cx="24" cy="24" rx="5" ry="2" fill="white" opacity="0.3"/>
  </svg>,
  // Globe — 3D green
  <svg key="globe" viewBox="0 0 48 48" fill="none" className="w-8 h-8">
    <defs>
      <linearGradient id="gl1" x1="24" y1="4" x2="24" y2="44" gradientUnits="userSpaceOnUse">
        <stop stopColor="#4ADE80"/><stop offset="1" stopColor="#16A34A"/>
      </linearGradient>
    </defs>
    <circle cx="24" cy="24" r="18" fill="url(#gl1)"/>
    <circle cx="24" cy="24" r="18" fill="#86EFAC" opacity="0.35" style={{clipPath:"inset(0 0 50% 0)"}}/>
    <ellipse cx="24" cy="24" rx="8" ry="18" fill="none" stroke="white" strokeWidth="1.5" opacity="0.5"/>
    <line x1="6" y1="24" x2="42" y2="24" stroke="white" strokeWidth="1.5" opacity="0.5"/>
    <ellipse cx="24" cy="16" rx="14" ry="4" fill="none" stroke="white" strokeWidth="1" opacity="0.3"/>
    <ellipse cx="24" cy="32" rx="14" ry="4" fill="none" stroke="white" strokeWidth="1" opacity="0.3"/>
  </svg>,
  // Server — 3D orange
  <svg key="server" viewBox="0 0 48 48" fill="none" className="w-8 h-8">
    <defs>
      <linearGradient id="sv1" x1="24" y1="4" x2="24" y2="44" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FDBA74"/><stop offset="1" stopColor="#EA580C"/>
      </linearGradient>
    </defs>
    <rect x="8" y="4" width="32" height="18" rx="5" fill="url(#sv1)"/>
    <rect x="8" y="4" width="32" height="8" rx="5" fill="#FED7AA" opacity="0.45"/>
    <rect x="8" y="26" width="32" height="18" rx="5" fill="url(#sv1)"/>
    <rect x="8" y="26" width="32" height="8" rx="5" fill="#FED7AA" opacity="0.45"/>
    <circle cx="14" cy="13" r="2" fill="#FFF7ED"/><rect x="20" y="11" width="14" height="4" rx="2" fill="#FFF7ED" opacity="0.6"/>
    <circle cx="14" cy="35" r="2" fill="#FFF7ED"/><rect x="20" y="33" width="14" height="4" rx="2" fill="#FFF7ED" opacity="0.6"/>
  </svg>,
  // Rocket — 3D coral/red
  <svg key="rocket" viewBox="0 0 48 48" fill="none" className="w-8 h-8">
    <defs>
      <linearGradient id="rk1" x1="24" y1="2" x2="24" y2="42" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FDA4AF"/><stop offset="1" stopColor="#E11D48"/>
      </linearGradient>
    </defs>
    <path d="M24 4c-6 8-8 16-8 24h16c0-8-2-16-8-24z" fill="url(#rk1)"/>
    <path d="M24 4c-6 8-8 16-8 24h16c0-8-2-16-8-24z" fill="#FECDD3" opacity="0.35" style={{clipPath:"inset(0 0 50% 0)"}}/>
    <circle cx="24" cy="22" r="4" fill="#FFF1F2"/>
    <path d="M16 28c-4 2-6 6-6 10h6v-10z" fill="#FB7185"/><path d="M32 28c4 2 6 6 6 10h-6v-10z" fill="#FB7185"/>
    <path d="M18 38h12l-2 8h-8l-2-8z" fill="#FCA5A5"/>
  </svg>,
  // Shield — 3D emerald
  <svg key="shield" viewBox="0 0 48 48" fill="none" className="w-8 h-8">
    <defs>
      <linearGradient id="sh1" x1="24" y1="4" x2="24" y2="44" gradientUnits="userSpaceOnUse">
        <stop stopColor="#6EE7B7"/><stop offset="1" stopColor="#059669"/>
      </linearGradient>
    </defs>
    <path d="M24 4L8 12v12c0 10.5 6.8 18 16 22 9.2-4 16-11.5 16-22V12L24 4z" fill="url(#sh1)"/>
    <path d="M24 4L8 12v12c0 2 .3 4 .8 5.8L40 12.2V12L24 4z" fill="#A7F3D0" opacity="0.4"/>
    <path d="M20 24l3 3 6-6" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
  // Trophy — 3D gold
  <svg key="trophy" viewBox="0 0 48 48" fill="none" className="w-8 h-8">
    <defs>
      <linearGradient id="tr1" x1="24" y1="4" x2="24" y2="36" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FDE68A"/><stop offset="1" stopColor="#D97706"/>
      </linearGradient>
    </defs>
    <path d="M14 8h20v14c0 5.5-4.5 10-10 10s-10-4.5-10-10V8z" fill="url(#tr1)"/>
    <path d="M14 8h20v6H14V8z" fill="#FEF3C7" opacity="0.5" rx="2"/>
    <path d="M14 14c-4 0-6-2-6-6h6" stroke="#D97706" strokeWidth="3" fill="none"/>
    <path d="M34 14c4 0 6-2 6-6h-6" stroke="#D97706" strokeWidth="3" fill="none"/>
    <rect x="20" y="32" width="8" height="6" rx="1" fill="#B45309"/>
    <rect x="16" y="38" width="16" height="4" rx="2" fill="#D97706"/>
  </svg>,
  // Lightning — 3D yellow
  <svg key="lightning" viewBox="0 0 48 48" fill="none" className="w-8 h-8">
    <defs>
      <linearGradient id="lt1" x1="24" y1="2" x2="24" y2="46" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FDE047"/><stop offset="1" stopColor="#CA8A04"/>
      </linearGradient>
    </defs>
    <path d="M28 2L10 26h12l-4 20L38 22H26l2-20z" fill="url(#lt1)"/>
    <path d="M28 2L10 26h12L28 2z" fill="#FEF9C3" opacity="0.45"/>
  </svg>,
];

export interface Job {
  id: string;
  title: string;
  location: string;
  salary_min?: number;
  salary_max?: number;
  type?: string;
  skills?: string;
  start_date?: string;
  end_date?: string;
  openings?: number;
  remote_pct?: number;
  posted_at?: string;
  description?: string;
}

function hashCode(s: string): number {
  let hash = 0;
  for (let i = 0; i < s.length; i++) {
    hash = (hash << 5) - hash + s.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

const USD_TO_MXN = 20.5;

function formatSalaryUSD(min?: number, max?: number): string {
  if (!min && !max) return "Competitive";
  const fmt = (n: number) =>
    "$" + Math.round(n / 1000) + "k";
  if (min && max) return `${fmt(min)} – ${fmt(max)}/yr`;
  if (max) return `Up to ${fmt(max)}/yr`;
  return `From ${fmt(min!)}/yr`;
}

function formatSalaryMXN(min?: number, max?: number): string | null {
  const base = max || min;
  if (!base) return null;
  const mxn = base * USD_TO_MXN;
  if (mxn >= 1_000_000) {
    const millions = (mxn / 1_000_000).toFixed(1).replace(/\.0$/, "");
    return `~$${millions}M MXN pesos al año`;
  }
  const thousands = Math.round(mxn / 1000);
  return `~$${thousands}k MXN pesos al año`;
}

export default function JobCard({ job, onClick }: { job: Job; onClick?: () => void }) {
  const colorIdx = hashCode(job.id) % palette.length;
  const iconIdx = hashCode(job.title) % icons.length;
  const color = palette[colorIdx];

  return (
    <div onClick={onClick} className="group rounded-2xl bg-white border border-gray-100 shadow-sm p-6 flex flex-col items-center text-center transition-all duration-200 hover:shadow-md hover:-translate-y-1 cursor-pointer">
      {/* Colorful icon circle */}
      <div
        className="w-14 h-14 flex items-center justify-center mb-4 transition-transform duration-200 group-hover:scale-110 drop-shadow-md"
      >
        {icons[iconIdx]}
      </div>

      {/* Job title */}
      <h3
        className="font-semibold text-foreground text-base leading-tight mb-1"
      >
        {job.title}
      </h3>

      {/* Location */}
      <p className="text-sm text-gray-400 mb-3">{job.location || "Remote / U.S."}</p>

      {/* Salary */}
      <p className={`text-sm font-semibold ${color.text}`}>
        {formatSalaryUSD(job.salary_min, job.salary_max)}
      </p>
      {formatSalaryMXN(job.salary_min, job.salary_max) && (
        <p className="text-xs text-gray-400 mt-0.5">
          {formatSalaryMXN(job.salary_min, job.salary_max)}
        </p>
      )}

      {/* Tags */}
      {job.type && (
        <span className="mt-3 inline-block rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-500">
          {job.type}
        </span>
      )}
    </div>
  );
}
