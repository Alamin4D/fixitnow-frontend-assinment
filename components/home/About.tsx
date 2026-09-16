"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Zap, 
  Wrench, 
  Sparkles, 
  ArrowUpRight, 
  UserCheck2 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "../shared/Container";

// ইউনিক ফিচার ট্র্যাকার ডাটা
const highlights = [
  {
    title: "Vetted Bio-Metrics Check",
    description: "Every technician passes mandatory background, criminal record, and rigorous trade-skill testing layers.",
    icon: UserCheck2,
    badgeColor: "bg-blue-500/10 text-blue-600 dark:bg-blue-500/20",
  },
  {
    title: "SLA Metric Response",
    description: "Our algorithmic dispatching system ensures a verified professional reaches your doorstep in 60 mins.",
    icon: Zap,
    badgeColor: "bg-amber-500/10 text-amber-600 dark:bg-amber-500/20",
  },
  {
    title: "Algorithmic Flat Rates",
    description: "No post-repair hidden bills. Pre-lock transparent hourly or job-based invoicing transparently.",
    icon: ShieldCheck,
    color: "from-purple-600 to-indigo-600",
    badgeColor: "bg-purple-500/10 text-purple-600 dark:bg-purple-500/20",
  },
];

export default function About() {
  return (
    <section className="relative overflow-hidden bg-background py-24 lg:py-32 border-b border-border/40">
      
      {/* Background Decorative Matrix (Premium Startup Vibe) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)]" />
      <div className="pointer-events-none absolute left-10 top-1/3 h-[450px] w-[450px] rounded-full bg-blue-600/5 blur-[120px]" />
      <div className="pointer-events-none absolute right-10 bottom-1/3 h-[450px] w-[450px] rounded-full bg-indigo-600/5 blur-[120px]" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-24">
          
          {/* ================= LEFT SIDE: UNIQUE INTERACTIVE IMAGE STACK (5 Columns) ================= */}
          <div className="relative lg:col-span-5 flex justify-center">
            
            {/* Geometric Glowing Backdrop Frame */}
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-blue-600/10 via-indigo-600/5 to-purple-600/10 blur-xl pointer-events-none" />

            {/* Main Picture Container */}
            <div className="relative group w-full max-w-[380px] aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-muted border-[6px] border-background shadow-[0_24px_50px_-12px_rgba(0,0,0,0.12)] ring-1 ring-border/50">
              <Image
                src="https://unsplash.com"
                alt="Professional technician at work"
                fill
                unoptimized
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
                sizes="(max-width: 1024px) 100vw, 35vw"
              />
              {/* Glossy Dark Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />
            </div>

            {/* FLOATING FLOATING COMPONENT A: Trust Badge (Top-Left) */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute -left-6 top-10 z-20 flex items-center gap-3 rounded-2xl border border-border bg-background/80 p-3.5 shadow-xl backdrop-blur-md"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600">
                <Wrench className="h-4 w-4 animate-spin [animation-duration:10s]" />
              </div>
              <div className="text-left">
                <h4 className="text-xs font-black tracking-tight text-foreground">100% Guaranteed</h4>
                <p className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider mt-0.5">Premium Refix SLA</p>
              </div>
            </motion.div>

            {/* FLOATING COMPONENT B: Live Metrix Widget (Bottom-Right) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -right-6 bottom-8 z-20 rounded-2xl border border-border bg-background/90 p-4 shadow-2xl backdrop-blur-md text-left min-w-[160px]"
            >
              <p className="text-[10px] font-extrabold text-muted-foreground uppercase tracking-widest">Active Fleet</p>
              <div className="mt-1 flex items-baseline gap-1">
                <span className="text-2xl font-black text-foreground tracking-tight">4.9</span>
                <span className="text-xs text-amber-500 font-bold">★ Rating</span>
              </div>
              <div className="mt-2.5 flex items-center gap-1.5 text-[10px] text-muted-foreground font-medium border-t border-border/60 pt-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>850+ Vetted Techs Online</span>
              </div>
            </motion.div>

          </div>

          {/* ================= RIGHT SIDE: DESCRIPTION & CORE VALUES (7 Columns) ================= */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Who We Are</span>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl leading-[1.15]">
                Smart Marketplace for <br />
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Verified On-Demand Repairs
                </span>
              </h2>

              <p className="text-sm md:text-base leading-relaxed text-muted-foreground font-medium max-w-2xl">
                FixItNow is a premium micro-automation web ecosystem designed to clear the stress out of home maintenance. We sync skilled neighborhood technical professionals seamlessly into your schedules at institutional flat rates.
              </p>
            </div>

            {/* Custom Vertical Features Tracker Card List */}
            <div className="space-y-4 max-w-xl">
              {highlights.map((item, idx) => {
                const DynamicIcon = item.icon;
                return (
                  <div 
                    key={idx}
                    className="group relative flex gap-4 rounded-2xl border border-border/40 bg-card/40 p-4 transition-all duration-300 hover:border-primary/20 hover:bg-card hover:shadow-sm"
                  >
                    <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-border/20 ${item.badgeColor}`}>
                      <DynamicIcon className="h-4 w-4" strokeWidth={2} />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-sm font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
                        {item.title}
                      </h3>
                      <p className="text-xs leading-relaxed text-muted-foreground/90 font-medium">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action Call Button Panel */}
            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <Button asChild size="sm" className="h-10 rounded-xl font-semibold px-5 bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-transform duration-200 hover:-translate-y-0.5">
                <Link href="/about" className="flex items-center gap-1.5">
                  <span>Learn Our Backstory</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
              <Link href="/services" className="text-xs font-bold text-muted-foreground hover:text-foreground transition-colors py-2 px-1 flex items-center gap-1">
                Browse Live Directory
              </Link>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}
