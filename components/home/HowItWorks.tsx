"use client";

import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  Search,
  UserRoundCheck,
} from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Find a Service",
    description:
      "Browse trusted home services and find the right solution for your needs.",
    icon: Search,
  },
  {
    step: "02",
    title: "Choose a Technician",
    description:
      "Compare experienced technicians based on rating, location, and expertise.",
    icon: UserRoundCheck,
  },
  {
    step: "03",
    title: "Book a Time Slot",
    description:
      "Select a convenient date and time that works best for your schedule.",
    icon: CalendarCheck,
  },
  {
    step: "04",
    title: "Get the Service",
    description:
      "Sit back and relax while your trusted technician takes care of the job.",
    icon: CheckCircle2,
  },
];

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-24 lg:py-28">
      {/* Soft Background Accent Blobs */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 top-1/3 h-72 w-72 rounded-full bg-blue-500/5 blur-[100px]" />

      <div className="container relative mx-auto px-4 sm:px-6 max-w-6xl">
        
        {/* ================= HEADER ================= */}
        <div className="mx-auto max-w-2xl text-center space-y-4">
          <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-primary shadow-sm">
            Simple Workflow
          </span>

          <p className="mx-auto max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
            Getting professional help for your home has never been easier. Follow these four simple steps to get the job done.
          </p>
        </div>

        {/* ================= STEPS GRID ================= */}
        <div className="relative mx-auto mt-20">
          
          {/* Desktop Connecting Background Line (Perfected Alignment) */}
          <div className="absolute left-[12%] right-[12%] top-[40px] hidden lg:block" aria-hidden="true">
            <div className="h-[2px] w-full border-t-2 border-dashed border-border transition-colors duration-300 group-hover:border-primary/30" />
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((item, index) => {
              const Icon = item.icon;

              return (
                <div key={item.step} className="group relative flex flex-col items-center text-center">
                  
                  {/* Step Visual Top Bubble */}
                  <div className="relative z-10 flex h-20 w-20 items-center justify-center">
                    {/* Glowing effect behind icon */}
                    <div className="absolute inset-0 rounded-2xl bg-primary/5 blur-lg transition-all duration-500 group-hover:bg-primary/10 group-hover:scale-110" />

                    {/* Main Icon Box with balanced styling */}
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-border/80 bg-card text-muted-foreground shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-105 group-hover:border-primary/40 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-md group-hover:shadow-primary/10">
                      <Icon className="h-6 w-6 transition-transform duration-300" strokeWidth={1.5} />
                    </div>

                    {/* Clean Number Badge instead of multiple overlapping indicators */}
                    <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-background bg-muted text-[10px] font-bold text-muted-foreground transition-colors duration-300 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-background">
                      {item.step}
                    </span>
                  </div>

                  {/* Card Content Block */}
                  <div className="mt-5 w-full rounded-2xl border border-border/40 bg-card/60 p-5 pt-6 shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all duration-300 group-hover:border-primary/20 group-hover:bg-card group-hover:shadow-[0_12px_24px_-4px_rgba(0,0,0,0.06)] flex-1 flex flex-col">
                    <h3 className="text-base font-bold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground/90 flex-1">
                      {item.description}
                    </p>

                    {/* Mobile/Tablet Arrow */}
                    {index < steps.length - 1 && (
                      <div className="mt-4 flex justify-center lg:hidden" aria-hidden="true">
                        <ArrowRight className="h-4 w-4 text-muted-foreground/30 animate-pulse" />
                      </div>
                    )}
                  </div>

                  {/* Desktop Middle Arrow (Perfect Center Placement) */}
                  {index < steps.length - 1 && (
                    <div className="absolute -right-4 top-[26px] z-20 hidden h-7 w-7 items-center justify-center rounded-full border border-border bg-background text-muted-foreground shadow-sm transition-all duration-300 group-hover:border-primary/30 group-hover:text-primary lg:flex" aria-hidden="true">
                      <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </div>
                  )}

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
