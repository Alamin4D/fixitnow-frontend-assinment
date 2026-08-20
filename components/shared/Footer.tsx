import Link from "next/link";
import {
  ArrowUpRight,
  // Facebook,
  // Github,
  // Instagram,
  // Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t bg-slate-950 text-slate-300">
      {/* Background Glow */}
      <div className="absolute -left-40 top-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* ================= TOP CTA ================= */}
        <div className="border-b border-white/10 py-14">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <div className="mb-3 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                Trusted Home Services
              </div>

              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Need a reliable technician?
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
                Find trusted professionals, book your service, and get your
                home projects done without the hassle.
              </p>
            </div>

            <Link
              href="/services"
              className="group inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              Explore Services
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* ================= MAIN FOOTER ================= */}
        <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="inline-flex rounded-xl bg-black px-3 py-2">
              <Logo />
            </div>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              FixItNow connects homeowners with trusted, skilled technicians
              for reliable home maintenance and repair services.
            </p>

            {/* Contact */}
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                support@fixitnow.com
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-400">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                +880 1234-567890
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-400">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                Dhaka, Bangladesh
              </div>
            </div>

            {/* Social */}
            {/* <div className="mt-7 flex items-center gap-3">
              {[
                {
                  icon: Facebook,
                  href: "#",
                  label: "Facebook",
                },
                {
                  icon: Instagram,
                  href: "#",
                  label: "Instagram",
                },
                {
                  icon: Linkedin,
                  href: "#",
                  label: "LinkedIn",
                },
                {
                  icon: Github,
                  href: "#",
                  label: "GitHub",
                },
              ].map((social) => {
                const Icon = social.icon;

                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-400 transition-all hover:-translate-y-1 hover:border-primary/30 hover:bg-primary hover:text-primary-foreground"
                  >
                    <Icon className="h-4 w-4" />
                  </Link>
                );
              })}
            </div> */}
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white">Company</h3>

            <div className="mt-5 flex flex-col gap-3 text-sm">
              {[
                ["About Us", "/about"],
                ["Our Services", "/services"],
                ["Contract Us", "/contract"],
                ["Become a Technician", "/register"],
              ].map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  className="w-fit text-slate-400 transition-colors hover:text-primary"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white">Services</h3>

            <div className="mt-5 flex flex-col gap-3 text-sm">
              {[
                "AC Repair",
                "Electrical",
                "Plumbing",
                "Cleaning",
                "Painting",
                "Pest Control",
              ].map((service) => (
                <Link
                  key={service}
                  href="/services"
                  className="w-fit text-slate-400 transition-colors hover:text-primary"
                >
                  {service}
                </Link>
              ))}
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-white">Support</h3>

            <div className="mt-5 flex flex-col gap-3 text-sm">
              <Link
                href="/help"
                className="text-slate-400 transition-colors hover:text-primary"
              >
                Help Center
              </Link>

              <Link
                href="/privacy"
                className="text-slate-400 transition-colors hover:text-primary"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="text-slate-400 transition-colors hover:text-primary"
              >
                Terms & Conditions
              </Link>

              <Link
                href="/faq"
                className="text-slate-400 transition-colors hover:text-primary"
              >
                FAQs
              </Link>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM ================= */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} FixItNow. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <Link
              href="/privacy"
              className="transition-colors hover:text-white"
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-white"
            >
              Terms
            </Link>

            <span className="hidden h-4 w-px bg-white/10 sm:block" />

            <span className="flex items-center gap-1.5">
              Made with
              <span className="text-primary">♥</span>
              for better homes
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}