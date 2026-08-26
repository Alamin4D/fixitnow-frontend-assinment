import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  MessageCircle,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Container from "../shared/Container";

const faqs = [
  {
    question: "How do I book a service?",
    answer:
      "Browse our available services, choose the service you need, select a technician, and pick a convenient date and time slot. Once you submit your booking request, the technician can review and accept it.",
  },
  {
    question: "Can I choose a technician?",
    answer:
      "Yes. You can view available technicians along with their specialty, location, ratings, and completed jobs before choosing the professional you prefer.",
  },
  {
    question: "How does payment work?",
    answer:
      "After your booking is accepted by the technician, you can proceed to the available secure online payment option. Your payment status will be updated after successful confirmation.",
  },
  {
    question: "Can I cancel my booking?",
    answer:
      "Yes, you can cancel your booking according to the cancellation policy. Open your booking details and use the cancellation option if your booking is still eligible for cancellation.",
  },
  {
    question: "How are technicians verified?",
    answer:
      "Technicians go through a verification and moderation process before being listed on FixItNow. Customers can also review ratings, completed jobs, and technician information before booking.",
  },
];

export default function FAQ() {
  return (
    <section className="relative overflow-hidden bg-muted/20 py-20 sm:py-24 lg:py-28">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

      <Container>
        {/* ================= HEADER ================= */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border bg-background px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary shadow-sm">
            <CircleHelp className="h-3.5 w-3.5" />
            FAQ
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Questions?
            <span className="text-primary"> We Have Answers.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
            Everything you need to know about booking services, choosing
            technicians, payments, cancellations, and using FixItNow.
          </p>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="relative mx-auto mt-14 grid max-w-6xl gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          {/* ================= LEFT ================= */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-3xl border bg-background p-7 shadow-sm sm:p-8">
              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <MessageCircle className="h-7 w-7" />
              </div>

              <p className="mt-7 text-xs font-bold uppercase tracking-[0.18em] text-primary">
                Need Assistance?
              </p>

              <h3 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                We’re here to help.
              </h3>

              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                Can't find the answer you're looking for? Our support team is
                ready to help you with your service, booking, or account.
              </p>

              {/* Benefits */}
              <div className="mt-7 space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                  <span>Quick support for booking issues</span>
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                  <span>Help with payments and cancellations</span>
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                  <span>Professional customer assistance</span>
                </div>
              </div>

              {/* CTA */}
              <Link
                href="/contract"
                className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                Contact Support

                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* ================= FAQ ================= */}
          <div>
            <Accordion
              type="single"
              collapsible
              defaultValue="item-0"
              className="space-y-3"
            >
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={faq.question}
                  value={`item-${index}`}
                  className="group overflow-hidden rounded-2xl border bg-background px-5 shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-md sm:px-6"
                >
                  <AccordionTrigger className="gap-4 py-5 text-left text-sm font-semibold hover:no-underline sm:text-base">
                    <div className="flex items-center gap-4">
                      {/* Number */}
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-muted text-xs font-bold text-muted-foreground transition-colors group-data-[state=open]:bg-primary group-data-[state=open]:text-primary-foreground">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span>{faq.question}</span>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="pb-6 pl-12 pr-3 text-sm leading-7 text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* Bottom Support */}
            <div className="mt-6 flex items-center justify-between rounded-2xl border border-dashed bg-background/70 px-5 py-4">
              <div>
                <p className="text-sm font-semibold">
                  Still have questions?
                </p>

                <p className="mt-1 text-xs text-muted-foreground">
                  Our support team is happy to help.
                </p>
              </div>

              <Link
                href="/contract"
                className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
              >
                Contact us
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}