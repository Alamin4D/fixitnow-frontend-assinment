import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Search, ShieldCheck, Star, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import Container from "../shared/Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-muted/30">
      <Container>
        <div className="grid min-h-[620px] items-center gap-12 py-16 lg:grid-cols-2 lg:py-20">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm font-medium shadow-sm">
              <ShieldCheck className="h-4 w-4 text-primary" />
              Trusted & Verified Professionals
            </div>

            {/* Heading */}
            <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Trusted Home Services,
              <span className="block text-primary">
                Right at Your Doorstep
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
              Find skilled and verified professionals for your home.
              Book reliable services, choose a convenient time, and
              get your work done without the hassle.
            </p>

            {/* Search */}
            <div className="mt-8 flex max-w-xl flex-col gap-3 rounded-2xl border bg-background p-2 shadow-lg sm:flex-row">
              <div className="flex flex-1 items-center gap-3 px-3">
                <Search className="h-5 w-5 shrink-0 text-muted-foreground" />

                <input
                  type="text"
                  placeholder="What service do you need?"
                  className="h-12 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                />
              </div>

              <Button size="lg" asChild className="h-12 px-6">
                <Link href="/services">
                  Find a Service
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Secondary CTA */}
            <div className="mt-5">
              <Button variant="outline" size="lg" asChild>
                <Link href="/technicians">
                  Become a Technician
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm">
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
            </div>
          </div>

          {/* Right Image */}
          <div className="relative hidden lg:block">
            {/* Background decoration */}
            <div className="absolute -right-10 -top-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border bg-background p-3 shadow-2xl">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src="https://www.voltasairconditioning.com.au/image/hero.png"
                  alt="Professional home service technician"
                  fill
                  unoptimized
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 0px, 50vw"
                />
              </div>
            </div>

            {/* Floating Rating Card */}
            <div className="absolute -bottom-6 -left-8 flex items-center gap-3 rounded-2xl border bg-background p-4 shadow-xl">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              </div>

              <div>
                <p className="font-semibold">Top Rated Service</p>
                <p className="text-xs text-muted-foreground">
                  Trusted by thousands
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}