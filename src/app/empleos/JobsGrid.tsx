"use client";

import { useEffect, useState } from "react";
import JobCard, { type Job } from "@/components/JobCard";

export default function JobsGrid() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/jobs")
      .then((r) => r.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          setJobs(data.jobs || []);
        }
      })
      .catch((e) => setError(String(e)))
      .finally(() => setLoading(false));
  }, []);

  const filtered = jobs.filter((j) => {
    const q = search.toLowerCase();
    return (
      j.title.toLowerCase().includes(q) ||
      j.location.toLowerCase().includes(q) ||
      (j.type || "").toLowerCase().includes(q)
    );
  });

  if (loading) {
    return (
      <div className="py-20 text-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-[#22c55e]" />
        <p className="mt-4 text-gray-400">Fetching open positions...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-20 text-center">
        <p className="text-red-500 font-medium">Could not load jobs</p>
        <p className="mt-2 text-sm text-gray-400">{error}</p>
      </div>
    );
  }

  return (
    <div>
      {/* Search bar */}
      <div className="mb-8 flex justify-center">
        <div className="w-full max-w-lg">
          <div className="relative">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search by title, location, or type..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-full border border-gray-200 bg-gray-50 py-3 pl-12 pr-5 text-sm outline-none transition-colors focus:border-[#22c55e] focus:bg-white focus:ring-1 focus:ring-[#22c55e]/20"
            />
          </div>
        </div>
      </div>

      {/* Results count */}
      <p className="mb-6 text-sm text-gray-400 text-center">
        {filtered.length} {filtered.length === 1 ? "position" : "positions"}{" "}
        {search && `matching "${search}"`}
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filtered.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      ) : (
        <div className="py-16 text-center text-gray-400">
          No positions found{search && ` for "${search}"`}. Try a different
          search.
        </div>
      )}
    </div>
  );
}
