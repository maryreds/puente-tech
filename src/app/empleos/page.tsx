import { Suspense } from "react";
import JobsGrid from "./JobsGrid";

export const metadata = {
  title: "Open Roles — TalentOS",
  description: "Browse tech jobs in the U.S. with visa sponsorship.",
};

export default function EmpleosPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center shrink-0">
            <img
              src="/jsm-logo.svg"
              alt="JSM Consulting"
              className="h-9 w-auto"
            />
          </a>
          <a
            href="/"
            className="text-sm text-gray-400 hover:text-foreground transition-colors"
          >
            &larr; Back to Home
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="py-12 md:py-16 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-[family-name:var(--font-instrument-serif)] text-4xl sm:text-5xl md:text-6xl tracking-tight text-foreground">
            Open Roles
          </h1>
          <p className="mt-4 text-lg text-gray-400 max-w-xl mx-auto">
            Tech roles in the U.S. with visa sponsorship. Your estimated
            take-home pay is shown upfront. Click any role for details.
          </p>
        </div>
      </section>

      {/* Jobs grid */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl">
          <Suspense
            fallback={
              <div className="text-center py-20 text-gray-400">
                Loading jobs...
              </div>
            }
          >
            <JobsGrid />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
