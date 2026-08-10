import Link from "next/link";
import { ChevronRight, CircleHelp } from "lucide-react";

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
    <section className="bg-muted/30 py-20 lg:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Left Content */}
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <CircleHelp size={26} />
            </div>

            <span className="mt-6 block text-sm font-semibold uppercase tracking-wider text-primary">
              Frequently Asked Questions
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Everything You Need to Know
            </h2>

            <p className="mt-5 max-w-md leading-7 text-muted-foreground">
              Have questions about booking, technicians, payments, or
              cancellations? Find quick answers to the most common
              questions about FixItNow.
            </p>

            <div className="mt-8">
              <p className="text-sm text-muted-foreground">
                Still have questions?
              </p>

              <Link
                href="/contact"
                className="mt-2 inline-flex items-center font-semibold text-primary hover:underline"
              >
                Contact our support team
                <ChevronRight size={17} className="ml-1" />
              </Link>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div>
            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue="item-0"
            >
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={faq.question}
                  value={`item-${index}`}
                  className="mb-3 rounded-xl border bg-background px-5 shadow-sm"
                >
                  <AccordionTrigger className="py-5 text-left text-base font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>

                  <AccordionContent className="pb-5 leading-7 text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Container>
    </section>
  );
}