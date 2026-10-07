
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Images,
} from "lucide-react";
import Container from "../shared/Container";

const galleryImages = [
  {
    src: "https://plus.unsplash.com/premium_photo-1682126009570-3fe2399162f7?q=80&w=1170&auto=format&fit=crop",
    alt: "Carpenter measuring wood",
    category: "Carpentry",
  },
  {
    src: "https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=1000&auto=format&fit=crop&q=80",
    alt: "Technician using power tool",
    category: "Repair",
  },
  {
    src: "https://fixitheroes.ae/wp-content/uploads/2026/02/2.png",
    alt: "Welding work close-up",
    category: "Welding",
  },
  {
    src: "https://media.istockphoto.com/id/2253670782/photo/pest-control-exterminator-in-white-protective-suit-mask-and-gas-respirator-with-sprayer.webp?a=1&b=1&s=612x612&w=0&k=20&c=jo39r8PtbPfC_cJjTV62GIXRr1M-Va5Ov1fDCX7VRsk=",
    alt: "Pest control professional",
    category: "Pest Control",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR94RncT4mJlUw3C6im58j0sBnTUVGW7-DTdf89btxdXg&s=10",
    alt: "Technician wearing safety goggles",
    category: "Electrical",
  },
  {
    src: "https://www.gharpedia.com/cf-img/uploads/2024/10/Professional-Equipment-and-Products-05-0504170065.jpg",
    alt: "Professional reviewing project plans",
    category: "Planning",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf8BHLBquaRCT7AnlfIwwAQf86yXHKAJEallO-z-1lUg&s=10",
    alt: "Cleaning service team",
    category: "Cleaning",
  },
];

const firstRow = [...galleryImages, ...galleryImages];
const secondRow = [
  ...galleryImages.slice(3),
  ...galleryImages.slice(0, 3),
  ...galleryImages,
];

export default function GalleryShowcase() {
  return (
    <section className="relative overflow-hidden border-y border-border/50 bg-background py-16 sm:py-20">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/4 top-0 h-80 w-80 rounded-full bg-primary/5 blur-[120px]" />
      <div className="pointer-events-none absolute right-1/4 bottom-0 h-80 w-80 rounded-full bg-blue-500/5 blur-[120px]" />

      <Container>
        {/* ================= HEADER ================= */}
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mb-4 flex w-fit items-center justify-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-primary"
          >
            <Images className="h-3.5 w-3.5" />
            <span>Our Work</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Real work Real professionals.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-4 max-w-xl text-sm leading-6 text-muted-foreground"
          >
            Explore some of the work completed by trusted professionals
            through FixItNow.
          </motion.p>
        </div>

        {/* ================= MARQUEE ================= */}
        <div className="relative mt-12 space-y-4">

          {/* Left fade */}
          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-16 sm:w-28" />

          {/* Right fade */}
          <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-16 sm:w-28" />

          {/* ================= ROW 1 ================= */}
          <div className="marquee-wrapper overflow-hidden">
            <div className="marquee-track flex w-max gap-4 hover:[animation-play-state:paused]">
              {firstRow.map((item, index) => (
                <GalleryCard
                  key={`row1-${item.src}-${index}`}
                  item={item}
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* ================= ROW 2 ================= */}
          <div className="marquee-wrapper overflow-hidden">
            <div className="marquee-track-reverse flex w-max gap-4 hover:[animation-play-state:paused]">
              {secondRow.map((item, index) => (
                <GalleryCard
                  key={`row2-${item.src}-${index}`}
                  item={item}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ================= TRUST FOOTER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-8 flex w-fit items-center gap-2 rounded-full border border-border/60 bg-muted/30 px-4 py-2"
        >
          <CheckCircle2 className="h-4 w-4 text-primary" />

          <span className="text-xs font-medium text-muted-foreground">
            Trusted professionals • Quality work • Reliable service
          </span>
        </motion.div>
      </Container>

      {/* ================= MARQUEE CSS ================= */}
      <style jsx>{`
        .marquee-track {
          animation: marquee 35s linear infinite;
        }

        .marquee-track-reverse {
          animation: marqueeReverse 40s linear infinite;
        }

        .marquee-wrapper:hover .marquee-track,
        .marquee-wrapper:hover .marquee-track-reverse {
          animation-play-state: paused;
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @keyframes marqueeReverse {
          from {
            transform: translateX(-50%);
          }

          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}

/* ================= GALLERY CARD ================= */

function GalleryCard({
  item,
  index,
}: {
  item: {
    src: string;
    alt: string;
    category: string;
  };
  index: number;
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="
        group
        relative
        h-[190px]
        w-[260px]
        shrink-0
        overflow-hidden
        rounded-[22px]
        border
        border-border/50
        bg-muted
        shadow-sm
        transition-shadow
        duration-300
        hover:shadow-xl
        sm:h-[210px]
        sm:w-[300px]
      "
    >
      {/* Image */}
      <Image
        src={item.src}
        alt={item.alt}
        fill
        unoptimized
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        sizes="300px"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

      {/* Number */}
      <div className="absolute left-4 top-4">
        <span className="rounded-full bg-black/30 px-2.5 py-1 text-[9px] font-bold tracking-widest text-white backdrop-blur-md">
          {String((index % 7) + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Arrow */}
      <div className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-white group-hover:text-black">
        <ArrowUpRight className="h-3.5 w-3.5" />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <span className="inline-flex rounded-full bg-primary px-2.5 py-1 text-[8px] font-bold uppercase tracking-wider text-primary-foreground">
          {item.category}
        </span>

        <h3 className="mt-2 text-sm font-bold text-white">
          {item.alt}
        </h3>

        <div className="mt-1 flex items-center gap-1 text-[9px] text-white/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          View work
          <ArrowUpRight className="h-3 w-3" />
        </div>
      </div>
    </motion.div>
  );
}
