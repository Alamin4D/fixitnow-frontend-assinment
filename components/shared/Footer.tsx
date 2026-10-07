
import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import Logo from "./Logo";

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
  { label: "Become a Technician", href: "/register" },
];

const services = [
  "AC Repair",
  "Electrical",
  "Plumbing",
  "Cleaning",
  "Painting",
  "Pest Control",
];

const supportLinks = [
  { label: "Help Center", href: "/help" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "FAQs", href: "/faq" },
];

const socialLinks = [
  {
    icon: FaFacebookF,
    href: "https://facebook.com",
    label: "Facebook",
  },
  {
    icon: FaInstagram,
    href: "https://instagram.com",
    label: "Instagram",
  },
  {
    icon: FaLinkedinIn,
    href: "https://linkedin.com",
    label: "LinkedIn",
  },
  {
    icon: FaGithub,
    href: "https://github.com",
    label: "GitHub",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-slate-950 text-slate-300">
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* ================= TOP CTA ================= */}
        <div className="border-b border-white/10 py-12 sm:py-14">
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
              className="group inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30"
            >
              Explore Services

              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* ================= MAIN FOOTER ================= */}
        <div className="grid gap-12 py-12 sm:grid-cols-2 lg:grid-cols-5 lg:py-14">
          {/* ================= BRAND ================= */}
          <div className="lg:col-span-2">
            <div className="inline-flex rounded-xl bg-black px-3 py-2">
              <Logo />
            </div>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              FixItNow connects homeowners with trusted, skilled technicians
              for reliable home maintenance and repair services.
            </p>

            {/* ================= CONTACT ================= */}
            <div className="mt-6 space-y-3">
              {/* Email */}
              <a
                href="mailto:support@fixitnow.com"
                className="group flex w-fit items-center gap-3 text-sm text-slate-400 transition-colors duration-200 hover:text-white"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 transition-colors duration-200 group-hover:bg-primary/10">
                  <Mail className="h-4 w-4 text-primary" />
                </span>

                support@fixitnow.com
              </a>

              {/* Phone */}
              <a
                href="tel:+8801234567890"
                className="group flex w-fit items-center gap-3 text-sm text-slate-400 transition-colors duration-200 hover:text-white"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 transition-colors duration-200 group-hover:bg-primary/10">
                  <Phone className="h-4 w-4 text-primary" />
                </span>

                +880 1234-567890
              </a>

              {/* Location */}
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5">
                  <MapPin className="h-4 w-4 text-primary" />
                </span>

                Dhaka, Bangladesh
              </div>
            </div>

            {/* ================= SOCIAL ================= */}
            <div className="mt-7 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit our ${social.label}`}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-primary hover:text-primary-foreground"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* ================= COMPANY ================= */}
          <div>
            <h3 className="text-sm font-semibold text-white">
              Company
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-sm">
              {companyLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="w-fit text-slate-400 transition-colors duration-200 hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* ================= SERVICES ================= */}
          <div>
            <h3 className="text-sm font-semibold text-white">
              Services
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-sm">
              {services.map((service) => (
                <Link
                  key={service}
                  href="/services"
                  className="w-fit text-slate-400 transition-colors duration-200 hover:text-primary"
                >
                  {service}
                </Link>
              ))}
            </div>
          </div>

          {/* ================= SUPPORT ================= */}
          <div>
            <h3 className="text-sm font-semibold text-white">
              Support
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-sm">
              {supportLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="w-fit text-slate-400 transition-colors duration-200 hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ================= BOTTOM ================= */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          {/* Copyright */}
          <p>
            © {new Date().getFullYear()} FixItNow. All rights reserved.
          </p>

          {/* Bottom Links */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-5">
            <Link
              href="/privacy"
              className="transition-colors duration-200 hover:text-white"
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="transition-colors duration-200 hover:text-white"
            >
              Terms
            </Link>

            <span className="hidden h-4 w-px bg-white/10 sm:block" />

            <span className="flex items-center gap-1.5">
              Made with
              <span
                className="text-primary"
                aria-label="love"
              >
                ♥
              </span>
              for better homes
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}