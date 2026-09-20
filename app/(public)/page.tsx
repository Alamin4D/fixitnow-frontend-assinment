import Hero from "@/components/home/Hero";
import FeaturedServices from "@/components/home/FeaturedServices";
import HowItWorks from "@/components/home/HowItWorks";
import FAQ from "@/components/home/FAQ";
import Testimonials from "@/components/home/Testimonials";
import GalleryShowcase from "@/components/home/GalleryShowcase";
import About from "@/components/home/About";


export default function HomePage() {
  return (
    <main>
      <Hero />
      <About/>
      <FeaturedServices />
      <HowItWorks />
      <GalleryShowcase/>
      <Testimonials/>
      <FAQ />
    </main>
  );
}