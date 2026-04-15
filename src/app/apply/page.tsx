import { LangProvider } from "@/components/LangContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ApplyForm } from "./apply-form";

export const metadata = {
  title: "Apply — TalentOS",
  description: "Create your TalentOS profile. Upload your resume, diploma, and photo to get matched with tech jobs in the U.S.",
};

export default function ApplyPage() {
  return (
    <LangProvider>
      <Navbar />
      <main className="flex-1 bg-gradient-to-b from-green-gradient-start to-green-gradient-end">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 py-12">
          <div className="mb-8 text-center">
            <h1 className="text-4xl mb-3">Create your profile</h1>
            <p className="text-gray-medium">
              Fill in your details and upload your documents to get matched with
              opportunities.
            </p>
          </div>
          <ApplyForm />
        </div>
      </main>
      <Footer />
    </LangProvider>
  );
}
