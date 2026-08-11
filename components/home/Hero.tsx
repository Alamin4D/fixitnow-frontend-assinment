"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Search,
  ShieldCheck,
  Star,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import Container from "../shared/Container";

const heroSlides = [
  {
    image: "https://media.istockphoto.com/id/2122076165/photo/air-conditioner-service-outdoor-checking-fix-repair-air-conditioner-cleaning-technician-he.jpg?s=612x612&w=0&k=20&c=SM-tKNDbCJZoTzbG-Ik-7Zc4H0sf3phR66cw__86tuU=",
    alt: "Professional home service technician",
  },
  {
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop",
    alt: "Professional technician working at home",
  },
  {
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200&auto=format&fit=crop",
    alt: "Verified home service professional",
  },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleSearch = () => {
    const query = search.trim();

    if (!query) {
      window.location.href = "/services";
      return;
    }

    window.location.href = `/services?search=${encodeURIComponent(query)}`;
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const previousSlide = () => {
    setActiveSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length,
    );
  };

  return (
    <section className="relative overflow-hidden bg-muted/30">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

      <Container>
        <div className="grid min-h-[620px] items-center gap-12 py-16 lg:grid-cols-2 lg:py-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm font-medium shadow-sm"
            >
              <ShieldCheck className="h-4 w-4 text-primary" />
              Trusted & Verified Professionals
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
            >
              Trusted Home Services,
              <span className="block text-primary">
                Right at Your Doorstep
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg"
            >
              Find skilled and verified professionals for your home. Book
              reliable services, choose a convenient time, and get your work
              done without the hassle.
            </motion.p>

            {/* Interactive Search */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-8 flex max-w-xl flex-col gap-3 rounded-2xl border bg-background p-2 shadow-lg transition-shadow duration-300 focus-within:shadow-xl sm:flex-row"
            >
              <div className="flex flex-1 items-center gap-3 px-3">
                <Search className="h-5 w-5 shrink-0 text-muted-foreground" />

                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSearch();
                    }
                  }}
                  placeholder="What service do you need?"
                  className="h-12 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                />
              </div>

              <Button
                size="lg"
                onClick={handleSearch}
                className="h-12 px-6"
              >
                Find a Service
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>

            {/* Secondary CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-5"
            >
              <Button variant="outline" size="lg" asChild>
                <Link href="/technicians">Become a Technician</Link>
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-8 flex flex-wrap items-center gap-6 text-sm"
            >
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />

                <div>
                  <p className="font-semibold">1,200+</p>
                  <p className="text-xs text-muted-foreground">
                    Verified Technicians
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />

                <div>
                  <p className="font-semibold">4.8/5</p>
                  <p className="text-xs text-muted-foreground">
                    Customer Rating
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Interactive Slider */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            {/* Decorative Glow */}
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-10 -top-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
            />

            {/* Slider Card */}
            <motion.div
              whileHover={{
                y: -8,
                rotate: 0.5,
              }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-3xl border bg-background p-3 shadow-2xl"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSlide}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={heroSlides[activeSlide].image}
                      alt={heroSlides[activeSlide].alt}
                      fill
                      unoptimized
                      priority={activeSlide === 0}
                      className="object-cover"
                      sizes="(max-width: 1024px) 0px, 50vw"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Slider Controls */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="flex gap-1.5">
                    {heroSlides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        className={`h-2 rounded-full transition-all ${
                          activeSlide === index
                            ? "w-7 bg-white"
                            : "w-2 bg-white/50"
                        }`}
                      />
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={previousSlide}
                      aria-label="Previous slide"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-background/90 shadow-md backdrop-blur transition hover:bg-background"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>

                    <button
                      onClick={nextSlide}
                      aria-label="Next slide"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-background/90 shadow-md backdrop-blur transition hover:bg-background"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Rating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              whileHover={{ scale: 1.04, y: -3 }}
              className="absolute -bottom-6 -left-8 flex items-center gap-3 rounded-2xl border bg-background p-4 shadow-xl"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              </div>

              <div>
                <p className="font-semibold">Top Rated Service</p>
                <p className="text-xs text-muted-foreground">
                  Trusted by thousands
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}