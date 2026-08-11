"use client";

import { AlertTriangle, ArrowLeft, Home, RefreshCw } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import Container from "@/components/shared/Container";

export default function Error({
  reset,
}: {
  reset: () => void;
}) {
  return (
    <main className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-background">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-destructive/10 blur-3xl" />

        <div className="absolute left-[12%] top-[20%] h-20 w-20 rounded-full border border-border/50" />

        <div className="absolute bottom-[15%] right-[12%] h-28 w-28 rounded-full border border-destructive/10" />
      </div>

      <Container>
        <section className="relative mx-auto flex max-w-xl flex-col items-center text-center">
          {/* Icon */}
          <div className="mb-7 flex h-20 w-20 items-center justify-center rounded-2xl border border-destructive/20 bg-destructive/10 shadow-sm">
            <AlertTriangle className="h-10 w-10 text-destructive" />
          </div>

          {/* Badge */}
          <div className="mb-5 inline-flex items-center rounded-full border border-border bg-muted/50 px-4 py-2 text-sm font-medium text-muted-foreground backdrop-blur">
            <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-destructive" />
            Unexpected error
          </div>

          {/* Heading */}
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Something went wrong
          </h1>

          <p className="mt-4 max-w-md text-base leading-7 text-muted-foreground sm:text-lg">
            We couldn&apos;t complete your request right now. Please try again,
            or return to the homepage if the problem continues.
          </p>

          {/* Actions */}
          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button
              size="lg"
              onClick={() => reset()}
              className="group min-w-36"
            >
              <RefreshCw className="mr-2 h-4 w-4 transition-transform group-hover:rotate-180" />
              Try Again
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="min-w-36"
            >
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Go Home
              </Link>
            </Button>
          </div>

          {/* Secondary navigation */}
          <Link
            href="/"
            className="mt-8 inline-flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Return to safety
          </Link>
        </section>
      </Container>
    </main>
  );
}