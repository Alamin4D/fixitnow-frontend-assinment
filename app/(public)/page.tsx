import Hero from "@/components/home/Hero";
import FeaturedServices from "@/components/home/FeaturedServices";
import HowItWorks from "@/components/home/HowItWorks";
import FAQ from "@/components/home/FAQ";
import Testimonials from "@/components/home/Testimonials";
import GalleryShowcase from "@/components/home/GalleryShowcase";


export default function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturedServices />
      <GalleryShowcase/>
      <HowItWorks />
      <Testimonials/>
      <FAQ />
    </main>
  );
}