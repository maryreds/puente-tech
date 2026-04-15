"use client";

import { useEffect, useState, useMemo } from "react";
import JobCard, { type Job } from "@/components/JobCard";
import JobDetail from "@/components/JobDetail";

function getState(location: string): string {
  if (!location || location === "U.S.") return "Other";
  const parts = location.split(",");
  if (parts.length >= 2) {
    const st = parts[parts.length - 1].trim();
    return st.length === 2 ? st : "Other";
  }
  return "Other";
}

export default function JobsGrid() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selected, setSelected] = useState<Job | null>(null);

  // Filters
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [stateFilter, setStateFilter] = useState<string>("all");
  const [salaryFilter, setSalaryFilter] = useState<string>("all");
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    fetch("/jobs.json")
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

  // Derive filter options from data
  const { jobTypes, states } = useMemo(() => {
    const types = new Set<string>();
    const stateSet = new Set<string>();
    for (const j of jobs) {
      if (j.type) types.add(j.type);
      const st = getState(j.location);
      if (st !== "Other") stateSet.add(st);
    }
    return {
      jobTypes: Array.from(types).sort(),
      states: Array.from(stateSet).sort(),
    };
  }, [jobs]);

  const activeFilterCount =
    (typeFilter !== "all" ? 1 : 0) +
    (stateFilter !== "all" ? 1 : 0) +
    (salaryFilter !== "all" ? 1 : 0);

  const filtered = jobs
    .filter((j) => {
      // Text search
      const q = search.toLowerCase();
      const matchesSearch =
        !q ||
        j.title.toLowerCase().includes(q) ||
        j.location.toLowerCase().includes(q) ||
        (j.type || "").toLowerCase().includes(q);

      // Type filter
      const matchesType =
        typeFilter === "all" || j.type === typeFilter;

      // State filter
      const matchesState =
        stateFilter === "all" || getState(j.location) === stateFilter;

      // Salary filter
      const hasSalary = (j.salary_min || 0) + (j.salary_max || 0) > 0;
      const matchesSalary =
        salaryFilter === "all" ||
        (salaryFilter === "with-salary" && hasSalary) ||
        (salaryFilter === "competitive" && !hasSalary);

      return matchesSearch && matchesType && matchesState && matchesSalary;
    })
    .sort((a, b) => {
      const aHasSalary = (a.salary_min || 0) + (a.salary_max || 0) > 0 ? 1 : 0;
      const bHasSalary = (b.salary_min || 0) + (b.salary_max || 0) > 0 ? 1 : 0;
      return bHasSalary - aHasSalary;
    });

  const clearFilters = () => {
    setTypeFilter("all");
    setStateFilter("all");
    setSalaryFilter("all");
    setSearch("");
  };

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
      {/* Search + filter toggle */}
      <div className="mb-6 flex flex-col items-center gap-3">
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
              className="w-full rounded-full border border-gray-200 bg-gray-50 py-3 pl-12 pr-24 text-sm outline-none transition-colors focus:border-[#22c55e] focus:bg-white focus:ring-1 focus:ring-[#22c55e]/20"
            />
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${
                showFilters || activeFilterCount > 0
                  ? "bg-[#22c55e] text-white"
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
              </svg>
              Filters
              {activeFilterCount > 0 && (
                <span className="bg-white text-[#22c55e] rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-bold">
                  {activeFilterCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Filter panel */}
        {showFilters && (
          <div className="w-full max-w-2xl bg-gray-50 rounded-2xl border border-gray-200 p-5 space-y-4">
            {/* Job Type */}
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wide mb-2 font-medium">Job Type</p>
              <div className="flex flex-wrap gap-2">
                <FilterChip
                  label="All"
                  active={typeFilter === "all"}
                  onClick={() => setTypeFilter("all")}
                />
                {jobTypes.map((t) => (
                  <FilterChip
                    key={t}
                    label={t}
                    active={typeFilter === t}
                    onClick={() => setTypeFilter(t)}
                  />
                ))}
              </div>
            </div>

            {/* State */}
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wide mb-2 font-medium">State</p>
              <div className="flex flex-wrap gap-2">
                <FilterChip
                  label="All States"
                  active={stateFilter === "all"}
                  onClick={() => setStateFilter("all")}
                />
                {states.map((s) => (
                  <FilterChip
                    key={s}
                    label={s}
                    active={stateFilter === s}
                    onClick={() => setStateFilter(s)}
                  />
                ))}
              </div>
            </div>

            {/* Salary */}
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wide mb-2 font-medium">Salary</p>
              <div className="flex flex-wrap gap-2">
                <FilterChip
                  label="All"
                  active={salaryFilter === "all"}
                  onClick={() => setSalaryFilter("all")}
                />
                <FilterChip
                  label="With Salary"
                  active={salaryFilter === "with-salary"}
                  onClick={() => setSalaryFilter("with-salary")}
                />
                <FilterChip
                  label="Competitive"
                  active={salaryFilter === "competitive"}
                  onClick={() => setSalaryFilter("competitive")}
                />
              </div>
            </div>

            {/* Clear all */}
            {activeFilterCount > 0 && (
              <button
                onClick={clearFilters}
                className="text-xs text-gray-400 hover:text-gray-600 underline transition-colors"
              >
                Clear all filters
              </button>
            )}
          </div>
        )}
      </div>

      {/* Results count */}
      <p className="mb-6 text-sm text-gray-400 text-center">
        {filtered.length} {filtered.length === 1 ? "position" : "positions"}
        {(search || activeFilterCount > 0) && " found"}
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filtered.map((job) => (
            <JobCard key={job.id} job={job} onClick={() => setSelected(job)} />
          ))}
        </div>
      ) : (
        <div className="py-16 text-center text-gray-400">
          <p>No positions found with current filters.</p>
          <button
            onClick={clearFilters}
            className="mt-3 text-sm text-[#22c55e] hover:underline"
          >
            Clear all filters
          </button>
        </div>
      )}

      {/* Detail modal */}
      {selected && (
        <JobDetail job={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-150 ${
        active
          ? "bg-[#22c55e] text-white shadow-sm"
          : "bg-white text-gray-500 border border-gray-200 hover:border-gray-300 hover:text-gray-700"
      }`}
    >
      {label}
    </button>
  );
}
