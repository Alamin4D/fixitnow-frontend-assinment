import {
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
    <section className="py-20 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Simple & Convenient
          </span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            How FixItNow Works
          </h2>

          <p className="mt-4 text-muted-foreground">
            Get reliable home services in just four simple steps.
            From finding the right service to getting the job done,
            FixItNow makes everything easy.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Connecting Line */}
          <div className="absolute left-[12%] right-[12%] top-12 hidden border-t border-dashed border-border lg:block" />

          {steps.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.step}
                className="relative z-10 flex flex-col items-center text-center"
              >
                {/* Icon */}
                <div className="relative flex h-24 w-24 items-center justify-center rounded-full border-8 border-background bg-primary/10 text-primary shadow-sm">
                  <Icon size={34} strokeWidth={1.8} />

                  {/* Step Number */}
                  <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {item.step}
                  </span>
                </div>

                {/* Content */}
                <h3 className="mt-6 text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-xs text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}