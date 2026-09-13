"use client";

import { motion } from "framer-motion";
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
    title: "Find a service",
    description:
      "Browse trusted home services and find the right solution for your needs.",
    icon: Search,
  },
  {
    step: "02",
    title: "Choose a technician",
    description:
      "Compare experienced technicians based on rating, location, and expertise.",
    icon: UserRoundCheck,
  },
  {
    step: "03",
    title: "Book a time slot",
    description:
      "Select a convenient date and time that works best for your schedule.",
    icon: CalendarCheck,
  },
  {
    step: "04",
    title: "Get the service",
    description:
      "Sit back and relax while your trusted technician takes care of the job.",
    icon: CheckCircle2,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      {/* Single, quiet background glow — not per-card decoration */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div className="container relative mx-auto px-4 sm:px-6">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center rounded-full border bg-background px-4 py-1.5 text-xs font-medium text-muted-foreground shadow-sm">
            Four steps, start to finish
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            How <span className="text-primary">FixItNow</span> works
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
            Getting professional help for your home has never been easier.
            Find a service, choose a technician, book your time, and relax.
          </p>
        </motion.div>

        {/* ================= STEPS ================= */}
        <div className="relative mx-auto mt-16 max-w-6xl">
          {/* Desktop connecting line — a real sequence, so the line earns its place */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-[12%] right-[12%] top-[52px] hidden origin-left lg:block"
          >
            <div className="h-px w-full border-t border-dashed border-primary/25" />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {steps.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div key={item.step} variants={itemVariants} className="group relative">
                  {/* Card */}
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.25 }}
                    className="relative h-full rounded-2xl border bg-background/90 p-6 text-center shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5"
                  >
                    {/* Step Number */}
                    <div className="absolute right-4 top-4 text-xs font-bold tracking-widest text-muted-foreground/30 transition-colors duration-300 group-hover:text-primary/40">
                      {item.step}
                    </div>

                    {/* Icon */}
                    <div className="relative mx-auto flex h-20 w-20 items-center justify-center">
                      <div className="flex h-20 w-20 items-center justify-center rounded-2xl border bg-background text-primary shadow-md transition-colors duration-300 group-hover:border-primary/30 group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon className="h-8 w-8" strokeWidth={1.8} />
                      </div>

                      <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full border-4 border-background bg-primary text-[10px] font-bold text-primary-foreground shadow-sm">
                        {index + 1}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="mt-6">
                      <h3 className="text-lg font-bold tracking-tight">{item.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-muted-foreground">
                        {item.description}
                      </p>
                    </div>

                    {/* Mobile connector */}
                    {index < steps.length - 1 && (
                      <div className="mt-5 flex justify-center lg:hidden">
                        <ArrowRight className="h-4 w-4 text-primary/50" />
                      </div>
                    )}
                  </motion.div>

                  {/* Desktop connector */}
                  {index < steps.length - 1 && (
                    <div className="absolute -right-4 top-[45px] z-20 hidden h-8 w-8 items-center justify-center rounded-full border bg-background text-primary shadow-sm lg:flex">
                      <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* ================= BOTTOM NOTE ================= */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-14 flex max-w-2xl flex-col items-center text-center"
        >
          <div className="flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-xs font-medium text-muted-foreground shadow-sm">
            <CheckCircle2 className="h-4 w-4 text-primary" />
            Simple booking. Trusted professionals. Better service.
          </div>
        </motion.div>
      </div>
    </section>
  );
}