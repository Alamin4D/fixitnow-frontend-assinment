"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronLeft,
  MapPin,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Wrench,
  Zap,
} from "lucide-react";

import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type Technician = {
  id: string;
  experience?: number;
  location?: string;
  rating?: number;
  totalReviews?: number;
  isAvailable?: boolean;
  profilePicture?: string;

  user?: {
    id?: string;
    name?: string;
    email?: string;
    phone?: string;
  };

  services?: {
    id: string;
    title: string;
    description?: string;
    price?: number;
    duration?: number;
    isActive?: boolean;

    category?: {
      id: string;
      name: string;
      description?: string;
      image?: string;
      isActive?: boolean;
    };
  }[];

  _count?: {
    reviews?: number;
    bookings?: number;
  };
};

type Step = "service" | "location" | "urgency" | "result";

const serviceOptions = [
  {
    id: "plumbing",
    title: "Plumbing",
    description: "Pipes, leaks & water issues",
    icon: "🚰",
    keywords: ["plumbing", "pipe", "water"],
  },
  {
    id: "electrical",
    title: "Electrical",
    description: "Wiring, lights & power",
    icon: "💡",
    keywords: ["electrical", "electric", "wiring"],
  },
  {
    id: "ac",
    title: "AC Repair",
    description: "Cooling & AC problems",
    icon: "❄️",
    keywords: ["ac", "air conditioning", "cooling"],
  },
  {
    id: "cleaning",
    title: "Cleaning",
    description: "Home & deep cleaning",
    icon: "🧹",
    keywords: ["cleaning", "clean"],
  },
  {
    id: "furniture",
    title: "Furniture",
    description: "Assembly & furniture repair",
    icon: "🪑",
    keywords: ["furniture", "assembly"],
  },
  {
    id: "appliance",
    title: "Appliance",
    description: "Home appliance repair",
    icon: "🔧",
    keywords: ["appliance", "repair"],
  },
];

const urgencyOptions = [
  {
    id: "urgent",
    title: "Need it ASAP",
    description: "I need help as soon as possible",
    icon: "🚨",
  },
  {
    id: "today",
    title: "Today",
    description: "Anytime today works for me",
    icon: "⚡",
  },
  {
    id: "schedule",
    title: "Schedule Later",
    description: "I want to choose a convenient time",
    icon: "📅",
  },
];

export default function SmartTechnicianMatch({
  technicians = [],
}: {
  technicians: Technician[];
}) {
  const [step, setStep] = useState<Step>("service");
  const [selectedService, setSelectedService] = useState("");
  const [location, setLocation] = useState("");
  const [urgency, setUrgency] = useState("");

  const selectedServiceData = useMemo(
    () =>
      serviceOptions.find(
        (service) => service.id === selectedService
      ),
    [selectedService]
  );

  /*
   * Find technicians according to:
   *
   * 1. Service/category match
   * 2. Active service
   * 3. Availability
   * 4. Rating
   * 5. Experience
   * 6. Reviews
   */

  const matchedTechnicians = useMemo(() => {
    if (!selectedServiceData || !technicians.length) {
      return [];
    }

    const keywords = selectedServiceData.keywords.map((keyword) =>
      keyword.toLowerCase()
    );

    return technicians
      .map((technician) => {
        const services = technician.services ?? [];

        const matchingServices = services.filter((service) => {
          if (service.isActive === false) return false;

          const categoryName =
            service.category?.name?.toLowerCase() ?? "";

          const serviceTitle =
            service.title?.toLowerCase() ?? "";

          return keywords.some(
            (keyword) =>
              categoryName.includes(keyword) ||
              serviceTitle.includes(keyword)
          );
        });

        const categoryMatch = matchingServices.length > 0;

        const availabilityScore = technician.isAvailable
          ? 20
          : 0;

        const ratingScore =
          Math.min(Number(technician.rating ?? 0), 5) * 10;

        const experienceScore = Math.min(
          Number(technician.experience ?? 0),
          10
        );

        const reviewScore = Math.min(
          Number(
            technician.totalReviews ??
              technician._count?.reviews ??
              0
          ),
          20
        );

        const matchScore = categoryMatch
          ? Math.min(
              Math.round(
                55 +
                  availabilityScore +
                  ratingScore +
                  experienceScore +
                  reviewScore / 2
              ),
              99
            )
          : 0;

        return {
          technician,
          matchingServices,
          categoryMatch,
          matchScore,
        };
      })
      .filter((item) => item.categoryMatch)
      .sort((a, b) => {
        if (
          Boolean(b.technician.isAvailable) !==
          Boolean(a.technician.isAvailable)
        ) {
          return b.technician.isAvailable ? 1 : -1;
        }

        if (b.matchScore !== a.matchScore) {
          return b.matchScore - a.matchScore;
        }

        return (
          Number(b.technician.rating ?? 0) -
          Number(a.technician.rating ?? 0)
        );
      });
  }, [selectedServiceData, technicians]);

  const bestMatch = matchedTechnicians[0];

  const handleServiceSelect = (id: string) => {
    setSelectedService(id);

    setTimeout(() => {
      setStep("location");
    }, 250);
  };

  const handleLocationContinue = () => {
    if (!location.trim()) return;

    setStep("urgency");
  };

  const handleUrgencySelect = (id: string) => {
    setUrgency(id);
    setStep("result");
  };

  const reset = () => {
    setSelectedService("");
    setLocation("");
    setUrgency("");
    setStep("service");
  };

  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

        <div className="absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-primary/5 blur-[100px]" />

        <div className="absolute -right-40 top-0 h-80 w-80 rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border bg-background/80 px-4 py-2 text-xs font-semibold shadow-sm backdrop-blur"
          >
            <Sparkles className="h-4 w-4 text-primary" />
            Smart Technician Matching
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl"
          >
            Tell us what needs
            <span className="ml-2 text-primary">fixing.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-4 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base"
          >
            Answer a few simple questions and we&apos;ll find
            the most suitable technician for you.
          </motion.p>
        </div>

        {/* Main Card */}
        <Card className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border bg-background/80 shadow-2xl backdrop-blur-xl">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

          <div className="grid lg:grid-cols-[0.85fr_1.5fr]">
            {/* Left */}
            <div className="relative hidden overflow-hidden border-r bg-muted/30 p-8 lg:block">
              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />

              <div className="relative">
                <Badge
                  variant="secondary"
                  className="rounded-full px-3 py-1"
                >
                  <Zap className="mr-1.5 h-3.5 w-3.5 text-primary" />
                  Intelligent Matching
                </Badge>

                <h3 className="mt-6 text-2xl font-bold">
                  Find your perfect
                  <br />
                  technician.
                </h3>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  We compare technician expertise, availability,
                  ratings and experience to find your best match.
                </p>

                {/* Orb */}
                <div className="relative mx-auto mt-16 flex h-52 w-52 items-center justify-center">
                  <motion.div
                    animate={{
                      scale: [1, 1.15, 1],
                      opacity: [0.2, 0.35, 0.2],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                    className="absolute inset-0 rounded-full bg-primary/20"
                  />

                  <motion.div
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-6 rounded-full border border-dashed border-primary/30"
                  />

                  <div className="relative flex h-24 w-24 items-center justify-center rounded-full border bg-background shadow-2xl">
                    <Wrench className="h-9 w-9 text-primary" />
                  </div>
                </div>

                <div className="mt-10 space-y-3">
                  <TrustItem text="Verified professionals" />
                  <TrustItem text="Real customer ratings" />
                  <TrustItem text="Availability-aware matching" />
                  <TrustItem text="Service expertise matching" />
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="p-5 sm:p-8 lg:p-10">
              {/* Progress */}
              <div className="mb-8">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold">
                    {step === "service" &&
                      "What do you need help with?"}

                    {step === "location" &&
                      "Where do you need help?"}

                    {step === "urgency" &&
                      "How soon do you need help?"}

                    {step === "result" &&
                      "Your recommended technician"}
                  </p>

                  <span className="text-xs text-muted-foreground">
                    {step === "result"
                      ? "Complete"
                      : `Step ${
                          step === "service"
                            ? 1
                            : step === "location"
                              ? 2
                              : 3
                        }/3`}
                  </span>
                </div>

                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-muted">
                  <motion.div
                    animate={{
                      width:
                        step === "service"
                          ? "33%"
                          : step === "location"
                            ? "66%"
                            : "100%",
                    }}
                    className="h-full rounded-full bg-primary"
                  />
                </div>
              </div>

              <AnimatePresence mode="wait">
                {/* SERVICE */}
                {step === "service" && (
                  <motion.div
                    key="service"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <div className="grid gap-3 sm:grid-cols-2">
                      {serviceOptions.map((service) => (
                        <button
                          key={service.id}
                          type="button"
                          onClick={() =>
                            handleServiceSelect(service.id)
                          }
                          className="group rounded-2xl border bg-background p-4 text-left transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-primary/5 hover:shadow-lg"
                        >
                          <div className="flex items-center gap-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-muted text-2xl transition-transform duration-300 group-hover:scale-110">
                              {service.icon}
                            </div>

                            <div className="min-w-0">
                              <p className="font-semibold">
                                {service.title}
                              </p>

                              <p className="mt-1 text-xs text-muted-foreground">
                                {service.description}
                              </p>
                            </div>

                            <ArrowRight className="ml-auto h-4 w-4 text-muted-foreground opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                          </div>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* LOCATION */}
                {step === "location" && (
                  <motion.div
                    key="location"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <SelectedSummary
                      icon={selectedServiceData?.icon}
                      label="Selected service"
                      value={selectedServiceData?.title || ""}
                    />

                    <label className="mt-6 block text-sm font-semibold">
                      Your location
                    </label>

                    <div className="mt-3 flex items-center gap-3 rounded-2xl border bg-background px-4 py-3.5 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />

                      <input
                        value={location}
                        onChange={(event) =>
                          setLocation(event.target.value)
                        }
                        placeholder="e.g. Chittagong, Bangladesh"
                        className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                      />
                    </div>

                    <div className="mt-6 flex gap-3">
                      <Button
                        variant="outline"
                        onClick={() => setStep("service")}
                        className="rounded-xl"
                      >
                        <ChevronLeft className="mr-1 h-4 w-4" />
                        Back
                      </Button>

                      <Button
                        onClick={handleLocationContinue}
                        disabled={!location.trim()}
                        className="flex-1 rounded-xl"
                      >
                        Continue
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </motion.div>
                )}

                {/* URGENCY */}
                {step === "urgency" && (
                  <motion.div
                    key="urgency"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <div className="mb-6 grid grid-cols-2 gap-3">
                      <SummaryBox
                        icon={selectedServiceData?.icon}
                        label="Service"
                        value={selectedServiceData?.title || ""}
                      />

                      <SummaryBox
                        icon="📍"
                        label="Location"
                        value={location}
                      />
                    </div>

                    <div className="space-y-3">
                      {urgencyOptions.map((option) => (
                        <button
                          key={option.id}
                          type="button"
                          onClick={() =>
                            handleUrgencySelect(option.id)
                          }
                          className="group flex w-full items-center gap-4 rounded-2xl border bg-background p-4 text-left transition-all duration-300 hover:border-primary/40 hover:bg-primary/5 hover:shadow-md"
                        >
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted text-xl">
                            {option.icon}
                          </div>

                          <div>
                            <p className="font-semibold">
                              {option.title}
                            </p>

                            <p className="mt-1 text-xs text-muted-foreground">
                              {option.description}
                            </p>
                          </div>

                          <ArrowRight className="ml-auto h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
                        </button>
                      ))}
                    </div>

                    <Button
                      variant="ghost"
                      onClick={() => setStep("location")}
                      className="mt-5 rounded-xl"
                    >
                      <ChevronLeft className="mr-1 h-4 w-4" />
                      Back
                    </Button>
                  </motion.div>
                )}

                {/* RESULT */}
                {step === "result" && (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    {bestMatch ? (
                      <MatchResult
                        technician={bestMatch.technician}
                        matchingServices={bestMatch.matchingServices}
                        matchScore={bestMatch.matchScore}
                        selectedService={selectedServiceData}
                        location={location}
                        onReset={reset}
                      />
                    ) : (
                      <NoMatch
                        service={selectedServiceData?.title}
                        onReset={reset}
                      />
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

/* -------------------------------------------------------
   Match Result
------------------------------------------------------- */

function MatchResult({
  technician,
  matchingServices,
  matchScore,
  selectedService,
  location,
  onReset,
}: {
  technician: Technician;
  matchingServices: NonNullable<Technician["services"]>;
  matchScore: number;
  selectedService?: (typeof serviceOptions)[number];
  location: string;
  onReset: () => void;
}) {
  const name = technician.user?.name || "Unknown Technician";

  const rating = Number(technician.rating ?? 0);

  const reviews =
    technician.totalReviews ??
    technician._count?.reviews ??
    0;

  const bookings = technician._count?.bookings ?? 0;

  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const firstService = matchingServices[0];

  return (
    <>
      {/* Success */}
      <div className="rounded-2xl border bg-primary/5 p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Check className="h-5 w-5" />
          </div>

          <div>
            <p className="font-bold">
              Perfect match found!
            </p>

            <p className="text-xs text-muted-foreground">
              We found a technician based on your requirements.
            </p>
          </div>
        </div>
      </div>

      {/* Technician Card */}
      <div className="relative mt-5 overflow-hidden rounded-3xl border bg-background p-5 shadow-lg">
        {/* Match */}
        <div className="absolute right-0 top-0 rounded-bl-2xl bg-primary px-4 py-2 text-xs font-bold text-primary-foreground">
          {matchScore}% MATCH
        </div>

        <div className="flex flex-col gap-5 sm:flex-row">
          {/* Avatar */}
          <div className="flex shrink-0 justify-center sm:block">
            <div className="relative">
              {technician.profilePicture ? (
                <img
                  src={technician.profilePicture}
                  alt={name}
                  className="h-24 w-24 rounded-2xl object-cover shadow-lg"
                />
              ) : (
                <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-primary/10 text-2xl font-bold text-primary">
                  {initials}
                </div>
              )}

              {technician.isAvailable && (
                <span className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full border-4 border-background bg-emerald-500" />
              )}
            </div>
          </div>

          {/* Info */}
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2 pr-20">
              <h3 className="text-xl font-bold">
                {name}
              </h3>

              <ShieldCheck className="h-5 w-5 text-primary" />

              {technician.isAvailable && (
                <Badge className="rounded-full bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/10">
                  Available
                </Badge>
              )}
            </div>

            <p className="mt-1 text-sm text-muted-foreground">
              {firstService?.title ||
                selectedService?.title ||
                "Professional Technician"}
            </p>

            {/* Stats */}
            <div className="mt-4 flex flex-wrap gap-3 text-xs">
              <span className="flex items-center gap-1.5">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />

                <b>{rating.toFixed(1)}</b>

                <span className="text-muted-foreground">
                  ({reviews} reviews)
                </span>
              </span>

              <span className="flex items-center gap-1.5 text-muted-foreground">
                <Wrench className="h-4 w-4" />
                {technician.experience ?? 0} years
              </span>

              <span className="flex items-center gap-1.5 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                {technician.location || location}
              </span>
            </div>
          </div>
        </div>

        {/* Service */}
        {firstService && (
          <div className="mt-5 rounded-2xl bg-muted/40 p-4">
            <div className="flex items-center justify-between gap-4">
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground">
                  Matching Service
                </p>

                <p className="mt-1 truncate font-semibold">
                  {firstService.title}
                </p>

                {firstService.category?.name && (
                  <p className="mt-1 text-xs text-muted-foreground">
                    Category: {firstService.category.name}
                  </p>
                )}
              </div>

              <div className="shrink-0 text-right">
                {firstService.price !== undefined && (
                  <p className="text-lg font-bold">
                    ৳{firstService.price}
                  </p>
                )}

                {firstService.duration && (
                  <p className="text-xs text-muted-foreground">
                    {firstService.duration} min
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Trust Stats */}
        <div className="mt-4 grid grid-cols-3 overflow-hidden rounded-2xl border">
          <div className="p-3 text-center">
            <p className="font-bold">
              {reviews}
            </p>

            <p className="text-[10px] text-muted-foreground">
              Reviews
            </p>
          </div>

          <div className="border-x p-3 text-center">
            <p className="font-bold">
              {bookings}
            </p>

            <p className="text-[10px] text-muted-foreground">
              Bookings
            </p>
          </div>

          <div className="p-3 text-center">
            <p className="font-bold">
              {technician.experience ?? 0}+
            </p>

            <p className="text-[10px] text-muted-foreground">
              Years
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <Button
            asChild
            className="h-11 rounded-xl"
          >
            <Link href={`/technicians/${technician.id}`}>
              View Profile
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="h-11 rounded-xl"
          >
            <Link
              href={`/booking?technicianId=${technician.id}&serviceId=${firstService?.id ?? ""}`}
            >
              Book Now
            </Link>
          </Button>
        </div>
      </div>

      {/* Reset */}
      <Button
        variant="ghost"
        onClick={onReset}
        className="mt-5 w-full rounded-xl"
      >
        <Search className="mr-2 h-4 w-4" />
        Find Another Technician
      </Button>
    </>
  );
}

/* -------------------------------------------------------
   No Match
------------------------------------------------------- */

function NoMatch({
  service,
  onReset,
}: {
  service?: string;
  onReset: () => void;
}) {
  return (
    <div className="py-8 text-center">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-muted text-3xl">
        🔍
      </div>

      <h3 className="mt-5 text-xl font-bold">
        No perfect match found
      </h3>

      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-muted-foreground">
        We couldn&apos;t find an available technician for{" "}
        <strong>{service}</strong> right now.
      </p>

      <Button
        onClick={onReset}
        className="mt-6 rounded-xl"
      >
        <Search className="mr-2 h-4 w-4" />
        Try Another Service
      </Button>
    </div>
  );
}

/* -------------------------------------------------------
   Small Components
------------------------------------------------------- */

function TrustItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 text-sm">
      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
        <Check className="h-3.5 w-3.5 text-primary" />
      </div>

      <span>{text}</span>
    </div>
  );
}

function SelectedSummary({
  icon,
  label,
  value,
}: {
  icon?: string;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl bg-primary/5 p-4">
      <div className="flex items-center gap-3">
        <span className="text-2xl">{icon}</span>

        <div>
          <p className="text-xs text-muted-foreground">
            {label}
          </p>

          <p className="font-semibold">{value}</p>
        </div>
      </div>
    </div>
  );
}

function SummaryBox({
  icon,
  label,
  value,
}: {
  icon?: string;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border bg-muted/30 p-3">
      <div className="flex items-center gap-2">
        <span>{icon}</span>

        <div className="min-w-0">
          <p className="text-[10px] text-muted-foreground">
            {label}
          </p>

          <p className="truncate text-xs font-semibold">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
}