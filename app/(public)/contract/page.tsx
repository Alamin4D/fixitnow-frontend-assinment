"use client";

import React from "react";
import {
  Clock3,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="border-b bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:py-24">
          <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            Get In Touch
          </span>

          <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            We’re Here to{" "}
            <span className="text-primary">Help</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
            Have a question about our services or need help with a booking?
            Send us a message and our team will get back to you.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-5">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Contact Information
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Let’s talk about your service needs.
            </h2>

            <p className="mt-4 leading-7 text-muted-foreground">
              Whether you need a technician, want to know more about a
              service, or need assistance with your booking, we're happy to
              help.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Phone className="h-5 w-5" />
                </div>

                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    +880 1XXX-XXXXXX
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>

                <div>
                  <p className="font-semibold">Email</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    support@fixitnow.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>

                <div>
                  <p className="font-semibold">Location</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Khulna, Bangladesh
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Clock3 className="h-5 w-5" />
                </div>

                <div>
                  <p className="font-semibold">Working Hours</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Saturday – Thursday, 9:00 AM – 8:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl border bg-card p-6 shadow-sm sm:p-8 lg:col-span-3">
            <div className="mb-7">
              <h3 className="text-2xl font-bold">Send us a message</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Fill out the form and we’ll get back to you soon.
              </p>
            </div>

            <form className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium"
                  >
                    Your Name
                  </label>

                  <Input
                    id="name"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium"
                  >
                    Email Address
                  </label>

                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium"
                >
                  Subject
                </label>

                <Input
                  id="subject"
                  placeholder="How can we help?"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium"
                >
                  Message
                </label>

                <Textarea
                  id="message"
                  placeholder="Write your message here..."
                  className="min-h-[160px] resize-none"
                />
              </div>

              <Button type="submit" className="w-full sm:w-auto">
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;