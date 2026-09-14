"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import Container from "../shared/Container";

type ApproachSectionProps = {
  title?: string;
  intro?: string;
  points?: string[];
  closing?: string;
  imageSrc?: string;
  imageAlt?: string;
};

const defaultPoints = [
  "Filter cleaning and replacement",
  "Coil and blower cleaning",
  "Drain line inspection and flushing",
  "Thermostat and control checks",
];

export default function Approach({
  title = "AC Maintenance Services We Offer in Dubai, UAE",
  intro = "Regular inspections and servicing to reduce wear and tear, improve airflow, and maintain stable cooling performance throughout the year.",
  points = defaultPoints,
  closing = "Early identification of potential faults to avoid sudden failures, costly repairs, and downtime during peak summer months.",
  imageSrc = "https://fixitheroes.ae/wp-content/uploads/2026/02/AC-Maintenance-Services-We-Offer.jpg",
  imageAlt = "Technician servicing a ceiling-mounted AC unit",
}: ApproachSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-background py-16 lg:py-20">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Right: Image */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-muted lg:aspect-[5/4]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                unoptimized
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>


          {/* Left: Text */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-2xl font-bold">
              {title}
            </h2>

            {/* Divider: line - dot - line */}
            <div className="mt-5 flex items-center gap-2" aria-hidden="true">
              <span className="h-px w-8 bg-border" />
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/15">
                <span className="h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="h-px w-8 bg-border" />
            </div>

            <p className="mt-6 text-base leading-7 text-muted-foreground">
              {intro}
            </p>

            <ul className="mt-4 space-y-2.5">
              {points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2.5 text-base leading-7 text-muted-foreground"
                >
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/70" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 max-w-lg text-base leading-7 text-muted-foreground">
              {closing}
            </p>
          </motion.div>

          
        </div>
      </Container>
    </section>
  );
}