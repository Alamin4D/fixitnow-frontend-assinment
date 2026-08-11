import Link from "next/link";
import { ArrowLeft, ArrowRight, Home, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import Container from "@/components/shared/Container";

export default function NotFoundPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute left-[10%] top-[20%] h-24 w-24 rounded-full border border-border/50" />

        <div className="absolute bottom-[15%] right-[10%] h-32 w-32 rounded-full border border-primary/10" />
      </div>

      <Container>
        <section className="relative mx-auto flex max-w-2xl flex-col items-center text-center">
          {/* 404 Badge */}
          <div className="mb-8 inline-flex items-center rounded-full border border-border bg-muted/50 px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm backdrop-blur">
            <span className="mr-2 h-2 w-2 rounded-full bg-primary" />
            Page not found
          </div>

          {/* 404 Number */}
          <div className="relative">
            <h1 className="bg-gradient-to-b from-foreground to-foreground/30 bg-clip-text text-[9rem] font-black leading-none tracking-tighter text-transparent sm:text-[12rem]">
              404
            </h1>

            <div className="absolute inset-0 -z-10 bg-primary/10 blur-3xl" />
          </div>

          {/* Content */}
          <div className="mt-6 max-w-lg">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Looks like you took a wrong turn.
            </h2>

            <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
              The page you&apos;re looking for doesn&apos;t exist, may have been
              moved, or is temporarily unavailable.
            </p>
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="group">
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Back to Home
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>

            <Button asChild size="lg" variant="outline">
              <Link href="/services">
                <Search className="mr-2 h-4 w-4" />
                Explore Services
              </Link>
            </Button>
          </div>

          {/* Back link */}
          <Link
            href="/"
            className="mt-8 inline-flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Return to the previous experience
          </Link>
        </section>
      </Container>
    </main>
  );
}