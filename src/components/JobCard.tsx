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
  // Briefcase
  <svg key="briefcase" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" /></svg>,
  // Code
  <svg key="code" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>,
  // Chip
  <svg key="chip" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z" /></svg>,
  // Cloud
  <svg key="cloud" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" /></svg>,
  // Globe
  <svg key="globe" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>,
  // Server
  <svg key="server" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" /></svg>,
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
}

function hashCode(s: string): number {
  let hash = 0;
  for (let i = 0; i < s.length; i++) {
    hash = (hash << 5) - hash + s.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function formatSalary(min?: number, max?: number): string {
  if (!min && !max) return "Competitive";
  const fmt = (n: number) =>
    "$" + Math.round(n / 1000) + "k";
  if (min && max) return `${fmt(min)} – ${fmt(max)}/yr`;
  if (max) return `Up to ${fmt(max)}/yr`;
  return `From ${fmt(min!)}/yr`;
}

export default function JobCard({ job, onClick }: { job: Job; onClick?: () => void }) {
  const colorIdx = hashCode(job.id) % palette.length;
  const iconIdx = hashCode(job.title) % icons.length;
  const color = palette[colorIdx];

  return (
    <div onClick={onClick} className="group rounded-2xl bg-white border border-gray-100 shadow-sm p-6 flex flex-col items-center text-center transition-all duration-200 hover:shadow-md hover:-translate-y-1 cursor-pointer">
      {/* Colorful icon circle */}
      <div
        className={`w-16 h-16 rounded-full ${color.bg} flex items-center justify-center mb-4 ${color.icon} transition-transform duration-200 group-hover:scale-110`}
      >
        {icons[iconIdx]}
      </div>

      {/* Job title */}
      <h3 className="font-semibold text-foreground text-base leading-tight mb-1">
        {job.title}
      </h3>

      {/* Location */}
      <p className="text-sm text-gray-400 mb-3">{job.location || "Remote / U.S."}</p>

      {/* Salary */}
      <p className={`text-sm font-semibold ${color.text}`}>
        {formatSalary(job.salary_min, job.salary_max)}
      </p>

      {/* Tags */}
      {job.type && (
        <span className="mt-3 inline-block rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-500">
          {job.type}
        </span>
      )}
    </div>
  );
}
