"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  MessageCircle,
  HelpCircle,
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
    <section className="relative overflow-hidden bg-background py-20 sm:py-24 lg:py-28">
      {/* Ambient Premium Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="pointer-events-none absolute left-10 top-1/4 h-[350px] w-[350px] rounded-full bg-blue-500/5 blur-[100px]" />
      <div className="pointer-events-none absolute right-10 bottom-1/4 h-[350px] w-[350px] rounded-full bg-indigo-500/5 blur-[100px]" />

      <Container className="relative z-10">
        
        {/* ================= HEADER ================= */}
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-primary shadow-sm">
            <CircleHelp className="h-3.5 w-3.5" />
            <span>Support Hub</span>
          </span>

          <p className="mx-auto max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
            Everything you need to know about booking services, choosing technicians, secure payments, and cancellations.
          </p>
        </div>

        {/* ================= CONTENT GRID ================= */}
        <div className="grid gap-12 lg:grid-cols-12 max-w-6xl mx-auto">
          
          {/* ================= LEFT SIDE: STICKY SUPPORT CARD ================= */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 lg:self-start">
            <div className="relative group overflow-hidden rounded-3xl border border-border/50 bg-card/40 p-6 shadow-sm backdrop-blur-sm sm:p-8 transition-all duration-300 hover:border-primary/20 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              
              <div className="relative space-y-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-500">
                  <MessageCircle className="h-5 w-5" strokeWidth={2} />
                </div>

                <div className="space-y-2">
                  <p className="text-[10px] font-extrabold uppercase tracking-widest text-primary">
                    Direct Assistance
                  </p>
                  <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                    Can't find what you need?
                  </h3>
                  <p className="text-xs leading-relaxed text-muted-foreground font-medium">
                    Our dedicated customer support channel is available to solve your disputes, queries, or booking adjustments instantly.
                  </p>
                </div>

                <div className="space-y-3 pt-2 border-t border-border/40">
                  {[
                    "Instant escalation for delay issues",
                    "Full refund handling assistance",
                    "Verified escrow payment safety guides",
                  ].map((text) => (
                    <div key={text} className="flex items-center gap-2.5 text-xs text-muted-foreground/90 font-medium">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" strokeWidth={2} />
                      <span>{text}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="group relative flex h-11 w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-foreground px-4 text-xs font-semibold text-background shadow-md transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Contact Support Team</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDE: PREMIUM ACCORDION ================= */}
          <div className="lg:col-span-7">
            <Accordion
              type="single"
              collapsible
              defaultValue="item-0"
              className="space-y-4"
            >
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={faq.question}
                  value={`item-${index}`}
                  className="group overflow-hidden rounded-2xl border border-border/50 bg-card/30 px-5 shadow-sm backdrop-blur-sm transition-all duration-300 data-[state=open]:border-primary/30 data-[state=open]:bg-card data-[state=open]:shadow-md sm:px-6 hover:bg-card/70"
                >
                  <AccordionTrigger className="gap-4 py-5 text-left text-sm font-bold text-foreground/90 hover:no-underline sm:text-base group-data-[state=open]:text-primary transition-colors duration-300 [&>svg]:w-4 [&>svg]:h-4 [&>svg]:shrink-0">
                    <div className="flex items-center gap-4 min-w-0 pr-2">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-border/60 bg-muted text-[10px] font-black tracking-wider text-muted-foreground transition-all duration-300 group-data-[state=open]:border-primary/20 group-data-[state=open]:bg-primary group-data-[state=open]:text-primary-foreground shadow-sm">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="truncate group-data-[state=open]:whitespace-normal">{faq.question}</span>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="pb-6 pl-11 pr-2 text-xs md:text-sm leading-relaxed text-muted-foreground/90 font-medium border-l border-primary/20 ml-3.5 mt-1 transition-all duration-300">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* Bottom Support Notice */}
            <div className="mt-6 flex flex-row items-center justify-between gap-4 rounded-2xl border border-dashed border-border/80 bg-muted/20 px-5 py-4 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <HelpCircle className="h-4 w-4" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-foreground">Still puzzled or have edge case issues?</p>
                  <p className="text-[10px] text-muted-foreground font-medium mt-0.5">Our interactive system is standing by.</p>
                </div>
              </div>

              <Link
                href="/contact"
                className="inline-flex shrink-0 items-center gap-0.5 text-xs font-bold text-primary transition-colors hover:text-primary/80 group"
              >
                <span>Ping Us</span>
                <ChevronRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
