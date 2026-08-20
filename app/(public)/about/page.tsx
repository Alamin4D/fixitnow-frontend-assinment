import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Wrench,
} from "lucide-react";

const AboutPage = () => {
  const features = [
    {
      icon: Wrench,
      title: "Skilled Technicians",
      description:
        "Connect with experienced professionals who are ready to handle your home service needs.",
    },
    {
      icon: ShieldCheck,
      title: "Trusted & Reliable",
      description:
        "We focus on quality, transparency, and dependable service for every customer.",
    },
    {
      icon: Clock3,
      title: "Flexible Scheduling",
      description:
        "Choose a convenient service time that fits your schedule and lifestyle.",
    },
    {
      icon: Users,
      title: "Customer First",
      description:
        "Every feature is designed to make your home service experience easier.",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-background">
      {/* ================= HERO ================= */}
      <section className="relative border-b overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-4xl text-center">
            {/* Badge */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border bg-background/80 px-4 py-2 text-sm font-medium shadow-sm backdrop-blur">
              <Sparkles className="h-4 w-4 text-primary" />
              <span>About FixItNow</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl">
              Reliable Home Services,
              <span className="block bg-gradient-to-r from-primary via-primary/80 to-primary/50 bg-clip-text text-transparent">
                Made Simple.
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              FixItNow connects homeowners with trusted, skilled technicians
              for reliable home maintenance and repair services — all from one
              simple platform.
            </p>

            {/* CTA */}
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:shadow-xl">
                Explore Services
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button className="rounded-full border bg-background px-6 py-3 text-sm font-semibold transition-colors hover:bg-muted">
                Learn More
              </button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              ["10K+", "Happy Customers"],
              ["500+", "Technicians"],
              ["25+", "Service Categories"],
              ["4.9/5", "Average Rating"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-2xl border bg-background/70 p-5 text-center shadow-sm backdrop-blur transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <p className="text-2xl font-bold tracking-tight">{value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STORY ================= */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Left */}
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                <Star className="h-3.5 w-3.5 fill-current" />
                Who We Are
              </div>

              <h2 className="max-w-xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Your trusted partner for everyday home services.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground">
                Finding a reliable technician shouldn't be difficult. FixItNow
                makes it easier to discover skilled professionals, compare
                services, choose a convenient time, and manage your bookings
                from one simple platform.
              </p>

              <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground">
                From plumbing and electrical repairs to AC maintenance,
                painting, cleaning, and pest control, FixItNow helps you find
                the right service exactly when you need it.
              </p>

              {/* Benefits */}
              <div className="mt-8 space-y-4">
                {[
                  "Verified and skilled professionals",
                  "Simple and transparent booking",
                  "Convenient scheduling",
                  "Customer-focused experience",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 rounded-[2rem] bg-primary/10 blur-3xl" />

              <div className="relative rounded-[2rem] border bg-card p-6 shadow-2xl shadow-primary/5 sm:p-8">
                {/* Header */}
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      Why FixItNow?
                    </p>
                    <h3 className="mt-1 text-xl font-bold">
                      Everything in one place
                    </h3>
                  </div>

                  <div className="rounded-xl bg-primary/10 p-3">
                    <Wrench className="h-6 w-6 text-primary" />
                  </div>
                </div>

                {/* Feature Cards */}
                <div className="grid gap-4 sm:grid-cols-2">
                  {features.map((feature) => {
                    const Icon = feature.icon;

                    return (
                      <div
                        key={feature.title}
                        className="group rounded-2xl border bg-muted/30 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-primary/[0.03] hover:shadow-lg"
                      >
                        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                          <Icon className="h-5 w-5 text-primary group-hover:text-primary-foreground" />
                        </div>

                        <h3 className="font-semibold">{feature.title}</h3>

                        <p className="mt-2 text-sm leading-6 text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MISSION ================= */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        {/* Decorative circles */}
        <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full border border-primary-foreground/10" />
        <div className="absolute -bottom-40 -right-20 h-96 w-96 rounded-full border border-primary-foreground/10" />

        <div className="relative mx-auto max-w-5xl px-6 py-24 text-center lg:px-8 lg:py-32">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 text-sm font-medium backdrop-blur">
            <Sparkles className="h-4 w-4" />
            Our Mission
          </div>

          <h2 className="mx-auto mt-7 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Making professional home services accessible to everyone.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-primary-foreground/80 sm:text-lg">
            We believe booking a home service should be fast, transparent,
            convenient, and stress-free. FixItNow brings customers and
            professionals together through a modern service marketplace.
          </p>

          {/* Mission Stats */}
          <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              ["01", "Discover"],
              ["02", "Book"],
              ["03", "Relax"],
            ].map(([number, title]) => (
              <div
                key={number}
                className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/10 p-6 backdrop-blur transition-transform hover:-translate-y-1"
              >
                <span className="text-sm font-medium text-primary-foreground/60">
                  {number}
                </span>

                <p className="mt-2 text-lg font-semibold">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BOTTOM CTA ================= */}
      <section className="border-t bg-muted/20">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center lg:py-24">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to simplify your home services?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Find trusted professionals, book your service, and get things done
            without the hassle.
          </p>

          <button className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:shadow-xl">
            Get Started
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;