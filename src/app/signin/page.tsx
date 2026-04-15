import { LangProvider } from "@/components/LangContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SignInForm } from "./signin-form";

export const metadata = {
  title: "Sign In — TalentOS",
  description: "Sign in to your TalentOS account to manage your profile and applications.",
};

export default function SignInPage() {
  return (
    <LangProvider>
      <Navbar />
      <main className="flex-1 bg-gradient-to-b from-green-gradient-start to-green-gradient-end flex items-center justify-center">
        <div className="mx-auto max-w-md w-full px-4 sm:px-6 py-16">
          <div className="mb-8 text-center">
            <h1 className="text-4xl mb-3">Welcome back</h1>
            <p className="text-gray-medium">
              Sign in to manage your profile and applications.
            </p>
          </div>
          <SignInForm />
        </div>
      </main>
      <Footer />
    </LangProvider>
  );
}
