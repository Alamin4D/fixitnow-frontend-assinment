import React from "react";
import { ShieldCheck, Users, Wrench, Clock3 } from "lucide-react";

const AboutPage = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="border-b bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:py-28">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            About FixItNow
          </span>

          <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Reliable Home Services,
            <span className="text-primary"> Made Simple.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            FixItNow connects homeowners with trusted, skilled technicians
            for reliable home maintenance and repair services.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              Who We Are
            </p>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Your trusted partner for everyday home services
            </h2>

            <p className="mt-6 leading-7 text-muted-foreground">
              Finding a reliable technician should not be difficult. FixItNow
              makes it easier to discover skilled professionals, explore
              services, choose a convenient time, and manage your bookings
              from one simple platform.
            </p>

            <p className="mt-4 leading-7 text-muted-foreground">
              From plumbing and electrical repairs to AC maintenance, painting,
              cleaning, and pest control, our platform helps customers get the
              right service when they need it.
            </p>
          </div>

          <div className="rounded-3xl border bg-card p-8 shadow-sm">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl bg-muted/50 p-6">
                <Wrench className="mb-4 h-8 w-8 text-primary" />
                <h3 className="font-semibold">Skilled Technicians</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Connect with experienced professionals for your home needs.
                </p>
              </div>

              <div className="rounded-2xl bg-muted/50 p-6">
                <ShieldCheck className="mb-4 h-8 w-8 text-primary" />
                <h3 className="font-semibold">Trusted Service</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Quality-focused services designed around customer trust.
                </p>
              </div>

              <div className="rounded-2xl bg-muted/50 p-6">
                <Clock3 className="mb-4 h-8 w-8 text-primary" />
                <h3 className="font-semibold">Flexible Booking</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Choose a service and schedule a time that works for you.
                </p>
              </div>

              <div className="rounded-2xl bg-muted/50 p-6">
                <Users className="mb-4 h-8 w-8 text-primary" />
                <h3 className="font-semibold">Customer First</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Built to make home service experiences easier and smoother.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider opacity-80">
            Our Mission
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Making professional home services accessible to everyone.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-7 opacity-90">
            We believe booking a home service should be fast, transparent, and
            stress-free. FixItNow brings customers and professionals together
            through a modern and convenient service marketplace.
          </p>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;