"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Users,
  Clock,
  Sparkles,
  Target,
  Eye
} from "lucide-react";
import Container from "@/components/shared/Container";

const stats = [
  { label: "Verified Technicians", value: "1,200+" },
  { label: "Satisfied Customers", value: "45k+" },
  { label: "Services Completed", value: "80k+" },
  { label: "Active Cities", value: "10+" },
];

const values = [
  {
    title: "Uncompromising Trust",
    description: "Every technician undergoes rigorous background checks and technical skill assessment before knocking on your door.",
    icon: ShieldCheck,
    color: "text-blue-500 bg-blue-500/10",
  },
  {
    title: "Customer-Centric Care",
    description: "Your comfort and satisfaction are our North Star. We offer fully transparent metrics, flat rates, and reliable support.",
    icon: Users,
    color: "text-indigo-500 bg-indigo-500/10",
  },
  {
    title: "On-Time Response",
    description: "No more endless waiting for local handymen. Book precise hourly slots and track professionals in real-time instantly.",
    icon: Clock,
    color: "text-purple-500 bg-purple-500/10",
  },
  {
    title: "Service Excellence",
    description: "We back every single job with our automated 30-day rework warranty. If it's not fixed right, we make it right for free.",
    icon: Sparkles,
    color: "text-emerald-500 bg-emerald-500/10",
  },
];

export default function AboutClient() {
  return (
    <div className="bg-background min-h-screen overflow-hidden">

      {/* ================= ১. HERO BANNER SECTION ================= */}
      <section className="relative py-20 lg:py-28 border-b border-border/40">
        {/* SaaS Style Ambient Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

        <Container className="relative z-10 text-center space-y-6 max-w-3xl">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-primary shadow-sm">
            <span>Our Journey</span>
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-foreground leading-[1.1]">
            We Are Redefining <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Home Services Marketplace
            </span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto font-medium">
            FixItNow is a trusted ecosystem linking skilled, verified home service professionals with smart households across the country.
          </p>
        </Container>
      </section>

      {/* ================= ২. STATS / COUNTER STRIP ================= */}
      <section className="py-12 bg-muted/30 border-b border-border/40">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <p className="text-3xl sm:text-4xl font-black tracking-tight text-foreground">
                  {stat.value}
                </p>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ================= ৩. COMPANY STORY & MISSION ================= */}
      <section className="py-20 lg:py-28">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Column: Image Wrapper */}
            <div className="lg:col-span-5 relative group">
              <div className="absolute inset-0 bg-primary/5 rounded-[2.5rem] blur-2xl opacity-60 pointer-events-none" />
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] border-[6px] border-background shadow-xl ring-1 ring-border/50">
                <Image
                  src="https://fixitheroes.ae/wp-content/uploads/2026/02/2.png"
                  alt="Team collaboration"
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Right Column: Mission Text Description */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                Bridging The Gap Between Reliability & Vetted Craftsmanship
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground font-medium">
                Finding a trustworthy technician for emergency leaks, electrical breakdowns, or deep cleaning is historically stressful. Traditional methods offer zero accountability, fluctuating rates, and uncertain safety protocols.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground font-medium">
                FixItNow was engineered to disrupt this system. We provide an end-to-end dashboard that empowers homeowners to transparently audit certifications, lock instant flat rates, process secure payments, and schedule maintenance stress-free.
              </p>

              {/* Mini Grid for Vision & Mission */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-border/40">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-foreground font-bold text-sm">
                    <Target className="h-4 w-4 text-blue-500" />
                    <span>Our Mission</span>
                  </div>
                  <p className="text-xs text-muted-foreground/90 leading-relaxed font-medium">
                    To regularize and elevate micro-entrepreneurship for local technicians while maintaining premium security grids for customers.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-foreground font-bold text-sm">
                    <Eye className="h-4 w-4 text-purple-500" />
                    <span>Our Vision</span>
                  </div>
                  <p className="text-xs text-muted-foreground/90 leading-relaxed font-medium">
                    To build the ultimate automated on-demand service web platform operating universally with flawless support grids.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ================= ৪. CORE VALUES SECTION ================= */}
      <section className="py-20 lg:py-28 bg-muted/20 border-t border-border/40">
        <Container>
          <div className="mx-auto max-w-2xl text-center space-y-3 mb-16">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
              The Principles That Guide Us
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-md mx-auto">
              Our culture is rooted deeply in service authenticity, transparent algorithms, and user data governance layers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/60 p-5 shadow-[0_2px_8px_rgba(0,0,0,0.01)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:bg-card hover:shadow-md"
                >
                  <div className="space-y-4">
                    <div className={`flex h-9 w-9 items-center justify-center rounded-xl border border-border/40 ${val.color}`}>
                      <Icon className="h-4 w-4" strokeWidth={2} />
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="text-sm font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                        {val.title}
                      </h3>
                      <p className="text-xs leading-relaxed text-muted-foreground/90 font-medium">
                        {val.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </div>
  )
}