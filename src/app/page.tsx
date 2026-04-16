import { LangProvider } from "@/components/LangContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import VisaDocs from "@/components/VisaDocs";
import FAQ from "@/components/FAQ";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <LangProvider>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <VisaDocs />
        <FAQ />
        <Testimonial />
      </main>
      <Footer />
    </LangProvider>
  );
}
