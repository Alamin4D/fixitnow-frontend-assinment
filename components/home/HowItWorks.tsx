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
    <section className="relative overflow-hidden bg-muted/20 py-20 sm:py-24 lg:py-28">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div className="container relative mx-auto px-4 sm:px-6">
        {/* ================= HEADER ================= */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border bg-background px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary shadow-sm">
            Simple & Convenient
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            How{" "}
            <span className="text-primary">FixItNow</span>{" "}
            Works
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
            Getting professional help for your home has never been easier.
            Find a service, choose a technician, book your time, and relax.
          </p>
        </div>

        {/* ================= STEPS ================= */}
        <div className="relative mx-auto mt-16 max-w-6xl">
          {/* Desktop Connecting Line */}
          <div className="absolute left-[12%] right-[12%] top-[52px] hidden lg:block">
            <div className="h-px w-full border-t border-dashed border-primary/25" />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.step}
                  className="group relative"
                >
                  {/* Card */}
                  <div className="relative h-full rounded-2xl border bg-background/90 p-6 text-center shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5">
                    {/* Step Number */}
                    <div className="absolute right-4 top-4 text-xs font-bold tracking-widest text-muted-foreground/30 transition-colors group-hover:text-primary/40">
                      {item.step}
                    </div>

                    {/* Icon Wrapper */}
                    <div className="relative mx-auto flex h-24 w-24 items-center justify-center">
                      {/* Glow */}
                      <div className="absolute inset-0 rounded-3xl bg-primary/10 blur-xl transition-all duration-300 group-hover:bg-primary/20" />

                      {/* Icon Box */}
                      <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border bg-background text-primary shadow-md transition-all duration-300 group-hover:scale-105 group-hover:border-primary/30 group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon
                          className="h-8 w-8"
                          strokeWidth={1.8}
                        />
                      </div>

                      {/* Number Badge */}
                      <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full border-4 border-background bg-primary text-[10px] font-bold text-primary-foreground shadow-sm">
                        {index + 1}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="mt-6">
                      <h3 className="text-lg font-bold tracking-tight">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-muted-foreground">
                        {item.description}
                      </p>
                    </div>

                    {/* Bottom Arrow */}
                    {index < steps.length - 1 && (
                      <div className="mt-5 flex justify-center lg:hidden">
                        <ArrowRight className="h-4 w-4 text-primary/50" />
                      </div>
                    )}
                  </div>

                  {/* Desktop Arrow */}
                  {index < steps.length - 1 && (
                    <div className="absolute -right-4 top-[45px] z-20 hidden h-8 w-8 items-center justify-center rounded-full border bg-background text-primary shadow-sm lg:flex">
                      <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= BOTTOM CTA ================= */}
        <div className="mx-auto mt-14 flex max-w-2xl flex-col items-center text-center">
          <div className="flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-xs font-medium text-muted-foreground shadow-sm">
            <CheckCircle2 className="h-4 w-4 text-primary" />
            Simple booking. Trusted professionals. Better service.
          </div>
        </div>
      </div>
    </section>
  );
}