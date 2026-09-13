"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ArrowRight, Search, ShieldCheck, Star, Users, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import Container from "../shared/Container";

// Real trade photography — not staged stock. Each scene is tied to a
// service category the platform actually offers, and to one of the
// three cities FixItNow covers.
const scenes = [
  {
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1920&auto=format&fit=crop",
    alt: "Electrician installing home wiring",
    category: "Electrical & AC Repair",
    city: "Dhaka",
  },
  {
    image:
      "https://images.unsplash.com/photo-1676210134188-4c05dd172f89?q=80&w=1920&auto=format&fit=crop",
    alt: "Plumber repairing a pipe behind a wall",
    category: "Plumbing",
    city: "Chattogram",
  },
  {
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1920&auto=format&fit=crop",
    alt: "Professional cleaning a modern home",
    category: "Home Cleaning",
    city: "Khulna",
  },
];

const SLIDE_DURATION = 6000;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  const [active, setActive] = useState(0);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % scenes.length);
    }, SLIDE_DURATION);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = () => {
    const query = search.trim();
    window.location.href = query
      ? `/services?search=${encodeURIComponent(query)}`
      : "/services";
  };

  const scene = scenes[active];

  return (
    <section className="relative isolate min-h-[90vh] overflow-hidden bg-black">
      {/* ================= FULL-BLEED PHOTOGRAPHY ================= */}
      <AnimatePresence mode="sync">
        <motion.div
          key={scene.image}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 1.07 }}
            transition={{ duration: SLIDE_DURATION / 1000 + 1, ease: "linear" }}
            className="absolute inset-0"
          >
            <Image
              src={scene.image}
              alt={scene.alt}
              fill
              unoptimized
              priority={active === 0}
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Legibility gradients only — no decorative blur circles competing for attention */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/20 to-transparent" />

      {/* Live category label — ties the copy to whichever photo is showing */}
      <div className="absolute left-0 right-0 top-8">
        <Container>
          <AnimatePresence mode="wait">
            <motion.div
              key={scene.category}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white/85 backdrop-blur-md"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Now booking {scene.category} in {scene.city}
            </motion.div>
          </AnimatePresence>
        </Container>
      </div>

      {/* ================= CONTENT ================= */}
      <Container>
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.08 }}
          className="relative flex min-h-[90vh] flex-col justify-end pb-14 pt-32"
        >
          <motion.h1
            variants={fadeUp}
            className="max-w-2xl text-5xl font-bold leading-[1.03] tracking-tight text-white sm:text-6xl lg:text-[4.2rem]"
          >
            Someone reliable,
            <span className="block text-primary">right at your door.</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-5 max-w-lg text-lg text-white/75">
            Verified technicians for plumbing, electrical, AC, painting, and
            cleaning — booked in minutes, tracked until they arrive.
          </motion.p>

          {/* Search */}
          <motion.div
            variants={fadeUp}
            className="mt-8 flex max-w-xl flex-col gap-2 rounded-2xl border border-white/15 bg-white/10 p-2 shadow-2xl backdrop-blur-md transition-shadow duration-300 focus-within:ring-2 focus-within:ring-primary/40 sm:flex-row"
          >
            <div className="flex flex-1 items-center gap-3 px-3">
              <Search className="h-5 w-5 shrink-0 text-white/60" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                placeholder="What service do you need?"
                className="h-12 w-full bg-transparent text-sm text-white outline-none placeholder:text-white/50"
              />
            </div>
            <Button size="lg" onClick={handleSearch} className="group h-12 px-6">
              Find a service
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </motion.div>

          {/* Single, compact trust line — replaces scattered badges */}
          <motion.div
            variants={fadeUp}
            className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/70"
          >
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-primary" />
              Background-checked
            </span>
            <span className="h-3.5 w-px bg-white/20" />
            <span className="flex items-center gap-1.5">
              <Users className="h-4 w-4 text-primary" />
              <strong className="font-semibold text-white">1,200+</strong> technicians
            </span>
            <span className="h-3.5 w-px bg-white/20" />
            <span className="flex items-center gap-1.5">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              <strong className="font-semibold text-white">4.8/5</strong> rating
            </span>
            <span className="h-3.5 w-px bg-white/20" />
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-primary" />
              Dhaka · Khulna · Chattogram
            </span>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-4">
            <Button
              variant="link"
              asChild
              className="h-auto px-0 text-sm font-medium text-white/80 hover:text-primary"
            >
              <Link href="/technicians">
                Become a technician
                <ArrowRight className="ml-1 h-3.5 w-3.5" />
              </Link>
            </Button>
          </motion.div>

          {/* Scene indicators */}
          <div className="mt-10 flex gap-2">
            {scenes.map((s, i) => (
              <button
                key={s.category}
                onClick={() => setActive(i)}
                aria-label={`Show ${s.category}`}
                className={`h-1 rounded-full transition-all duration-300 ${
                  active === i ? "w-8 bg-white" : "w-4 bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}