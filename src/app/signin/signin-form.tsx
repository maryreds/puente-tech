"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Mail, Loader2 } from "lucide-react";
import { getSupabase } from "@/lib/supabase";

export function SignInForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [checking, setChecking] = useState(true);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const supabase = getSupabase();
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        router.replace("/apply");
      } else {
        setChecking(false);
      }
    });
  }, [router]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const supabase = getSupabase();
      const { error } = await supabase.auth.signInWithOtp({
        email: email.trim(),
        options: {
          emailRedirectTo: `${window.location.origin}/apply`,
        },
      });
      if (error) throw error;
      setSent(true);
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Something went wrong.";
      setError(message);
    } finally {
      setLoading(false);
    }
  }

  if (checking) {
    return (
      <div className="bg-white border border-gray-border rounded-2xl p-10 text-center shadow-sm">
        <Loader2 className="w-8 h-8 text-[#22c55e] mx-auto animate-spin" />
      </div>
    );
  }

  if (sent) {
    return (
      <div className="bg-white border border-gray-border rounded-2xl p-10 text-center shadow-sm">
        <Mail className="w-12 h-12 text-[#22c55e] mx-auto mb-4" />
        <h2 className="text-xl font-semibold mb-2">Check your email</h2>
        <p className="text-gray-medium text-sm">
          We sent a magic link to <strong>{email}</strong>. Click the link in
          your email to sign in.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-border rounded-2xl p-8 shadow-sm">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium mb-1.5">
            <Mail className="w-4 h-4 inline mr-1" />
            Email address
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full px-4 py-2.5 rounded-lg border border-gray-border focus:outline-none focus:ring-2 focus:ring-[#22c55e]/30 focus:border-[#22c55e] transition-colors"
            required
          />
        </div>

        {error && (
          <div className="p-3 rounded-lg bg-red-50 text-red-600 text-sm">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={!email.trim() || loading}
          className="w-full bg-[#22c55e] hover:bg-[#16a34a] disabled:opacity-40 disabled:cursor-not-allowed text-white font-medium rounded-full py-2.5 text-sm transition-colors flex items-center justify-center gap-2"
        >
          {loading && <Loader2 className="w-4 h-4 animate-spin" />}
          {loading ? "Sending..." : "Send magic link"}
        </button>
      </form>

      <p className="text-center text-sm text-gray-medium mt-6">
        Don&apos;t have an account?{" "}
        <a href="/apply" className="text-[#22c55e] hover:text-[#16a34a] font-medium">
          Apply now
        </a>
      </p>
    </div>
  );
}
