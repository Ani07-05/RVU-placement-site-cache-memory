import { AboutCAR } from "@/components/site/AboutCAR";
import { CTASection } from "@/components/site/CTASection";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import { Navbar } from "@/components/site/Navbar";
import { PlacementProcess } from "@/components/site/PlacementProcess";
import { Recruiters } from "@/components/site/Recruiters";
import { SalaryDistribution } from "@/components/site/SalaryDistribution";
import { Schools } from "@/components/site/Schools";
import { StatsBento } from "@/components/site/StatsBento";
import { WhyRecruit } from "@/components/site/WhyRecruit";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Hero />
        <AboutCAR />
        <StatsBento />
        <WhyRecruit />
        <PlacementProcess />
        <SalaryDistribution />
        <Recruiters />
        <Schools />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
