import Image from "next/image";
import Link from "next/link";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import {
  ArrowRight,
  BadgeDollarSign,
  CheckCircle2,
  Clock3,
  MapPin,
  ShieldCheck,
  Star,
  User,
} from "lucide-react";

export default function ServiceDetails({
  service,
}: {
  service: any;
}) {
  const rating = Number(service.technician.rating || 0);
  const totalReviews = Number(service.technician.totalReviews || 0);

  return (
    <Card className="group overflow-hidden rounded-3xl border bg-card shadow-sm">
      {/* =====================================================
          HERO IMAGE
      ====================================================== */}
      <div className="relative h-[280px] w-full overflow-hidden sm:h-[360px] lg:h-[430px]">
        {service.category.image ? (
          <Image
            src={service.category.image}
            alt={service.category.name}
            fill
            unoptimized
            priority
            className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-muted text-sm text-muted-foreground">
            No category image available
          </div>
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

        {/* Category */}
        <div className="absolute left-5 top-5 sm:left-8 sm:top-8">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-black/35 px-4 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur-md">
            {service.category.name}
          </span>
        </div>

        {/* Rating */}
        <div className="absolute right-5 top-5 flex items-center gap-1.5 rounded-full border border-white/20 bg-black/35 px-3 py-2 text-sm font-semibold text-white shadow-lg backdrop-blur-md sm:right-8 sm:top-8">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          {rating.toFixed(1)}
        </div>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 lg:p-10">
          <div className="max-w-3xl">
            <p className="mb-2 text-sm font-medium text-white/75">
              Professional Home Service
            </p>

            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {service.title}
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-white/80">
              <span className="flex items-center gap-1.5">
                <Clock3 className="h-4 w-4" />
                {service.duration} minutes
              </span>

              <span className="h-1 w-1 rounded-full bg-white/50" />

              <span className="flex items-center gap-1.5">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                {rating.toFixed(1)} ({totalReviews} reviews)
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}
      <div className="p-5 sm:p-8 lg:p-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
          {/* ================= MAIN CONTENT ================= */}
          <div>
            {/* Description */}
            <section>
              <div className="mb-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  About This Service
                </p>

                <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                  Professional service you can trust
                </h2>
              </div>

              <p className="max-w-3xl leading-7 text-muted-foreground">
                {service.description}
              </p>
            </section>

            {/* Service Features */}
            <section className="mt-8">
              <h3 className="text-lg font-semibold">
                Service Highlights
              </h3>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="flex items-center gap-3 rounded-xl border bg-muted/30 p-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold">
                      Professional Service
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Skilled and experienced technician
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl border bg-muted/30 p-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <ShieldCheck className="h-4 w-4" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold">
                      Trusted Service
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Customer-focused service experience
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl border bg-muted/30 p-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Clock3 className="h-4 w-4" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold">
                      Convenient Scheduling
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Book a time that works for you
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl border bg-muted/30 p-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <MapPin className="h-4 w-4" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold">
                      Local Technician
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Service available in your area
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Technician */}
            <section className="mt-10">
              <div className="mb-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Your Technician
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  Meet your service professional
                </h3>
              </div>

              <Card className="rounded-2xl border bg-muted/20 p-5 shadow-none sm:p-6">
                <div className="flex flex-col gap-5 sm:flex-row">
                  {/* Avatar */}
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <User className="h-7 w-7" />
                  </div>

                  {/* Info */}
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h4 className="text-lg font-bold">
                          {service.technician.user.name}
                        </h4>

                        <div className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                          <MapPin className="h-3.5 w-3.5" />
                          {service.technician.location}
                        </div>
                      </div>

                      <div className="flex w-fit items-center gap-1.5 rounded-full bg-background px-3 py-1.5 text-sm font-semibold shadow-sm">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        {rating.toFixed(1)}
                        <span className="font-normal text-muted-foreground">
                          ({totalReviews})
                        </span>
                      </div>
                    </div>

                    {service.technician.bio && (
                      <p className="mt-4 text-sm leading-6 text-muted-foreground">
                        {service.technician.bio}
                      </p>
                    )}
                  </div>
                </div>
              </Card>
            </section>
          </div>

          {/* ================= BOOKING CARD ================= */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <Card className="overflow-hidden rounded-2xl border shadow-lg shadow-black/5">
              {/* Price Header */}
              <div className="border-b bg-muted/30 p-6">
                <p className="text-sm text-muted-foreground">
                  Service price
                </p>

                <div className="mt-1 flex items-baseline gap-1">
                  <span className="text-4xl font-bold tracking-tight">
                    ${service.price}
                  </span>

                  <span className="text-sm text-muted-foreground">
                    / service
                  </span>
                </div>
              </div>

              {/* Details */}
              <div className="space-y-4 p-6">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock3 className="h-4 w-4" />
                    Duration
                  </span>

                  <span className="text-sm font-semibold">
                    {service.duration} min
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-sm text-muted-foreground">
                    <BadgeDollarSign className="h-4 w-4" />
                    Category
                  </span>

                  <span className="max-w-[150px] truncate text-sm font-semibold">
                    {service.category.name}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Star className="h-4 w-4" />
                    Rating
                  </span>

                  <span className="text-sm font-semibold">
                    {rating.toFixed(1)} / 5
                  </span>
                </div>

                <div className="my-5 border-t" />

                {/* CTA */}
                <Button
                  asChild
                  size="lg"
                  className="h-12 w-full rounded-xl text-sm font-semibold shadow-md transition-all hover:shadow-lg"
                >
                  <Link href={`/services/${service.id}/booking`}>
                    Book This Service
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <p className="text-center text-xs leading-5 text-muted-foreground">
                  Select your preferred date and time on the next step.
                </p>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </Card>
  );
}