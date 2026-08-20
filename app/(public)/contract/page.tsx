"use client";

import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactPage = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+880 1XXX-XXXXXX",
      description: "Talk to our support team",
    },
    {
      icon: Mail,
      title: "Email",
      value: "support@fixitnow.com",
      description: "We usually reply within 24 hours",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Khulna, Bangladesh",
      description: "Serving customers across Bangladesh",
    },
    {
      icon: Clock3,
      title: "Working Hours",
      value: "9:00 AM – 8:00 PM",
      description: "Saturday – Thursday",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-background">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden border-b">
        {/* Background Glow */}
        <div className="absolute -left-40 top-10 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -right-40 -top-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 text-center lg:px-8 lg:py-32">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border bg-background/70 px-4 py-2 text-sm font-medium shadow-sm backdrop-blur">
            <Sparkles className="h-4 w-4 text-primary" />
            Get In Touch
          </div>

          {/* Heading */}
          <h1 className="mx-auto mt-7 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            We’re here to{" "}
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/50 bg-clip-text text-transparent">
              help.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            Have a question about our services or need help with a booking?
            Reach out to our team and we’ll help you get things sorted.
          </p>

          {/* Quick Trust */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              Fast Response
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              Friendly Support
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              Reliable Assistance
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT CONTENT ================= */}
      <section className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* ================= LEFT INFO ================= */}
          <div className="lg:col-span-2">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              <MessageCircle className="h-3.5 w-3.5" />
              Contact Information
            </div>

            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
              Let’s talk about your service needs.
            </h2>

            <p className="mt-5 leading-7 text-muted-foreground">
              Whether you need a technician, have a question about a service,
              or need assistance with an existing booking, our team is ready
              to help.
            </p>

            {/* Contact Cards */}
            <div className="mt-9 space-y-3">
              {contactInfo.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group flex gap-4 rounded-2xl border bg-card/70 p-4 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-sm font-semibold">
                        {item.title}
                      </p>

                      <p className="mt-1 truncate text-sm font-medium">
                        {item.value}
                      </p>

                      <p className="mt-1 text-xs text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Support Card */}
            <div className="mt-6 overflow-hidden rounded-2xl border bg-primary/[0.04] p-5">
              <div className="flex gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <MessageCircle className="h-5 w-5 text-primary" />
                </div>

                <div>
                  <h3 className="text-sm font-semibold">
                    Need urgent assistance?
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-muted-foreground">
                    For booking-related issues, include your booking details
                    so our team can assist you faster.
                  </p>

                  <button className="group mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                    View Help Center
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ================= FORM ================= */}
          <div className="relative lg:col-span-3">
            {/* Glow */}
            <div className="absolute inset-0 rounded-[2rem] bg-primary/5 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border bg-card shadow-xl shadow-black/5">
              {/* Top Accent */}
              <div className="h-1 bg-gradient-to-r from-primary/30 via-primary to-primary/30" />

              <div className="p-6 sm:p-8 lg:p-10">
                {/* Form Header */}
                <div className="mb-8">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                    <Send className="h-5 w-5 text-primary" />
                  </div>

                  <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                    Send us a message
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Tell us what you need and our support team will get back
                    to you as soon as possible.
                  </p>
                </div>

                <form className="space-y-6">
                  {/* Name + Email */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-semibold"
                      >
                        Your Name
                      </label>

                      <Input
                        id="name"
                        placeholder="John Doe"
                        className="h-11 rounded-xl bg-muted/20 transition-all focus-visible:border-primary focus-visible:ring-primary/20"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-semibold"
                      >
                        Email Address
                      </label>

                      <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        className="h-11 rounded-xl bg-muted/20 transition-all focus-visible:border-primary focus-visible:ring-primary/20"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-semibold"
                    >
                      Subject
                    </label>

                    <Input
                      id="subject"
                      placeholder="How can we help?"
                      className="h-11 rounded-xl bg-muted/20 transition-all focus-visible:border-primary focus-visible:ring-primary/20"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-semibold"
                    >
                      Message
                    </label>

                    <Textarea
                      id="message"
                      placeholder="Tell us more about your question or service request..."
                      className="min-h-[170px] resize-none rounded-xl bg-muted/20 transition-all focus-visible:border-primary focus-visible:ring-primary/20"
                    />

                    <p className="text-xs text-muted-foreground">
                      Please avoid sharing sensitive personal information.
                    </p>
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    className="h-12 w-full rounded-xl text-sm font-semibold shadow-lg shadow-primary/15 transition-all hover:-translate-y-0.5 hover:shadow-xl sm:w-auto sm:px-8"
                  >
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>

                {/* Privacy */}
                <div className="mt-7 border-t pt-5">
                  <p className="text-xs leading-5 text-muted-foreground">
                    By submitting this form, you agree to our terms and
                    privacy policy. We’ll only use your information to respond
                    to your request.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BOTTOM CTA ================= */}
      <section className="border-t bg-muted/20">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center lg:px-8 lg:py-24">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
            <Phone className="h-5 w-5 text-primary" />
          </div>

          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
            We’re always happy to help.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
            From finding the right technician to managing your booking,
            FixItNow is here to make your home service experience easier.
          </p>

          <Button
            asChild
            className="mt-7 rounded-full px-7 shadow-lg shadow-primary/15"
          >
            <a href="mailto:support@fixitnow.com">
              Email Support
              <Mail className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;