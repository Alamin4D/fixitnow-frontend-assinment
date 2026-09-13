"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Clock3,
  Users,
  Star,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Container from "@/components/shared/Container";

const stats = [
  {
    value: "10K+",
    label: "Happy Customers",
    icon: Users,
  },
  {
    value: "1,200+",
    label: "Verified Professionals",
    icon: ShieldCheck,
  },
  {
    value: "4.9/5",
    label: "Customer Rating",
    icon: Star,
  },
  {
    value: "25 min",
    label: "Average Response",
    icon: Clock3,
  },
];

const features = [
  {
    title: "Verified Professionals",
    description:
      "We connect you with skilled professionals who are carefully verified for quality and reliability.",
    icon: ShieldCheck,
  },
  {
    title: "Simple & Reliable",
    description:
      "Find the right service, choose a convenient time, and manage your booking without unnecessary hassle.",
    icon: CheckCircle2,
  },
  {
    title: "Built Around You",
    description:
      "From urgent repairs to regular maintenance, Fixit makes getting help for your home easier.",
    icon: Sparkles,
  },
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-background">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative border-b bg-muted/20">
        {/* Background glow */}
        <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

        <Container>
          <div className="grid min-h-[650px] items-center gap-14 py-16 lg:grid-cols-2 lg:py-24">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              {/* Badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm font-medium shadow-sm">
                <Sparkles className="h-4 w-4 text-primary" />
                About Fixit
              </div>

              {/* Heading */}
              <h1 className="max-w-2xl text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                Making Home Services
                <span className="block text-primary">
                  Simple & Reliable.
                </span>
              </h1>

              {/* Description */}
              <p className="mt-7 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
                Fixit is a modern home service platform that helps homeowners
                quickly connect with trusted and verified professionals for
                everyday repairs, maintenance, and essential home services.
              </p>

              <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">
                Our goal is simple: make finding the right professional easier,
                faster, and more dependable.
              </p>

              {/* CTA */}
              <div className="mt-8 flex flex-wrap gap-3">
                <Button size="lg" asChild className="rounded-xl">
                  <Link href="/services">
                    Explore Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="rounded-xl"
                >
                  <Link href="/technicians">
                    Become a Technician
                  </Link>
                </Button>
              </div>

              {/* Trust */}
              <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/10">
                  <ShieldCheck className="h-4 w-4 text-emerald-500" />
                </div>

                <span>
                  Trusted by homeowners looking for reliable professionals.
                </span>
              </div>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 35, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Decorative shape */}
              <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full border border-primary/20" />

              <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-primary/10 blur-2xl" />

              {/* Image */}
              <div className="relative overflow-hidden rounded-[2rem] border bg-background p-2 shadow-2xl">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                  <Image
                    src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1200&auto=format&fit=crop"
                    alt="Professional Fixit technician"
                    fill
                    unoptimized
                    className="object-cover"
                    priority
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Bottom info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-xs font-medium backdrop-blur-md">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      Trusted Professionals
                    </div>

                    <h3 className="text-2xl font-bold">
                      Help when you need it.
                    </h3>

                    <p className="mt-1 text-sm text-white/75">
                      Quality service, right at your doorstep.
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating card */}
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-6 -left-6 flex items-center gap-3 rounded-2xl border bg-background/95 p-4 shadow-xl backdrop-blur-xl"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-500/10">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                </div>

                <div>
                  <p className="font-bold">4.9/5 Rating</p>
                  <p className="text-xs text-muted-foreground">
                    Loved by our customers
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          STATS
      ========================================================= */}
      <section className="border-b bg-background">
        <Container>
          <div className="grid grid-cols-2 divide-x divide-border md:grid-cols-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.5,
                  }}
                  className="px-5 py-8 text-center md:px-6"
                >
                  <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>

                  <p className="text-2xl font-black tracking-tight sm:text-3xl">
                    {stat.value}
                  </p>

                  <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* =========================================================
          MISSION
      ========================================================= */}
      <section className="py-20 lg:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              <Sparkles className="h-4 w-4" />
              Our Mission
            </div>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Better services.
              <span className="text-primary"> Better experiences.</span>
            </h2>

            <p className="mt-6 text-base leading-7 text-muted-foreground sm:text-lg">
              We believe getting professional help for your home should not be
              complicated. Fixit brings customers and professionals together
              through one simple, transparent, and convenient platform.
            </p>
          </div>

          {/* Feature cards */}
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.5,
                  }}
                  whileHover={{ y: -6 }}
                  className="group rounded-2xl border bg-background p-7 shadow-sm transition-shadow duration-300 hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="pb-20 lg:pb-28">
        <Container>
          <div className="relative overflow-hidden rounded-[2rem] bg-primary px-6 py-14 text-primary-foreground shadow-2xl sm:px-10 lg:px-16 lg:py-16">
            {/* Glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

            <div className="relative flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
              <div className="max-w-2xl">
                <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground/70">
                  Get started today
                </p>

                <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                  Need a professional for your home?
                </h2>

                <p className="mt-3 text-primary-foreground/75">
                  Find the right service and book a trusted professional in
                  just a few clicks.
                </p>
              </div>

              <Button
                size="lg"
                variant="secondary"
                asChild
                className="shrink-0 rounded-xl px-7"
              >
                <Link href="/services">
                  Find a Service
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}