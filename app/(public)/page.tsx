import Hero from "@/components/home/Hero";
import FeaturedServices from "@/components/home/FeaturedServices";
import HowItWorks from "@/components/home/HowItWorks";
import FAQ from "@/components/home/FAQ";
import TopTechnicians from "@/components/home/TopTechnicians";
import Testimonials from "@/components/home/Testimonials";


export default function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturedServices />
      <TopTechnicians/>
      <HowItWorks />
      <Testimonials/>
      <FAQ />
    </main>
  );
}