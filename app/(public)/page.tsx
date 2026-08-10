import Hero from "@/components/home/Hero";
import FeaturedServices from "@/components/home/FeaturedServices";
import TopTechnicians from "@/components/home/TopTechnicians";
import HowItWorks from "@/components/home/HowItWorks";
import FAQ from "@/components/home/FAQ";


export default function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturedServices />
      <HowItWorks />
      <TopTechnicians />
      <FAQ />
    </main>
  );
}