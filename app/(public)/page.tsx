import Hero from "@/components/home/Hero";
import FeaturedServices from "@/components/home/FeaturedServices";
import TopTechnicians from "@/components/home/TopTechnicians";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturedServices />
      <TopTechnicians />
    </main>
  );
}