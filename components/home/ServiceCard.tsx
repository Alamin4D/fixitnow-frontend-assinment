"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import {
  ArrowRight,
  Clock3,
  MapPin,
  Star,
  User,
} from "lucide-react";

interface ServiceCardProps {
  service: {
    id: string;
    title: string;
    description: string;
    price: number;
    duration: number;
    category: {
      name: string;
      image?: string | null;
    };
    technician: {
      location: string;
      rating: number;
      user: {
        name: string;
      };
    };
  };
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const { rating } = service.technician;
  const hasRating = rating > 0;

  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: 24,
        },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      className="h-full"
    >
      <Card className="group relative h-full overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm ring-1 ring-black/[0.02] transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-xl hover:shadow-black/10">

        {/* ================= IMAGE ================= */}
        <div className="relative h-52 w-full overflow-hidden bg-muted">

          {service.category.image ? (
            <motion.div
              className="absolute inset-0"
              whileHover={{ scale: 1.06 }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Image
                src={service.category.image}
                alt={service.category.name}
                unoptimized
                fill
                className="object-cover"
              />
            </motion.div>
          ) : (
            <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
              No image available
            </div>
          )}

          {/* Image Overlay — stronger at the bottom for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/25" />

          {/* Top row: Category + Rating, aligned on one baseline */}
          <div className="absolute inset-x-4 top-4 flex items-center justify-between gap-2">
            <span className="rounded-full border border-white/15 bg-black/45 px-3 py-1 text-[11px] font-semibold tracking-wide text-white/90 backdrop-blur-md">
              {service.category.name}
            </span>

            {hasRating ? (
              <div className="flex items-center gap-1 rounded-full border border-white/15 bg-black/45 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-md">
                <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                {rating.toFixed(1)}
              </div>
            ) : (
              <div className="rounded-full border border-white/15 bg-black/45 px-2.5 py-1 text-[11px] font-semibold text-white/80 backdrop-blur-md">
                New
              </div>
            )}
          </div>

          {/* Duration */}
          <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-xs font-medium text-white/90">
            <Clock3 className="h-3.5 w-3.5" />
            {service.duration} mins
          </div>

          {/* Price on image, bottom right — premium touch */}
          <div className="absolute bottom-4 right-4 flex items-baseline gap-1 text-white">
            <span className="text-lg font-bold leading-none">
              ${service.price}
            </span>
            <span className="text-[11px] text-white/75">/ service</span>
          </div>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="p-5">

          {/* Title */}
          <div>
            <h2 className="line-clamp-1 text-lg font-bold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary">
              {service.title}
            </h2>

            <p className="mt-1.5 line-clamp-2 min-h-10 text-sm leading-5 text-muted-foreground">
              {service.description}
            </p>
          </div>

          {/* ================= TECHNICIAN ================= */}
          <div className="mt-4 flex items-center gap-3 rounded-xl border border-border/60 bg-muted/30 p-3 transition-colors duration-300 group-hover:border-primary/20">

            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <User className="h-4 w-4" />
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-foreground">
                {service.technician.user.name}
              </p>
              <div className="mt-0.5 flex items-center gap-1 text-xs text-muted-foreground">
                <MapPin className="h-3 w-3 shrink-0" />
                <span className="truncate">{service.technician.location}</span>
              </div>
            </div>

            {hasRating && (
              <div className="flex shrink-0 items-center gap-1 text-xs font-semibold text-foreground">
                <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                {rating.toFixed(1)}
              </div>
            )}
          </div>

          {/* ================= FOOTER ================= */}
          <div className="mt-5">
            <Button
              asChild
              className="w-full rounded-xl shadow-sm transition-all duration-300 group-hover:shadow-md"
            >
              <Link href={`/services/${service.id}`} className="flex items-center justify-center gap-2">
                View Details
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Bottom Accent */}
        <div className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-300 ease-out group-hover:scale-x-100" />
      </Card>
    </motion.div>
  );
}