"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import {
  ArrowRight,
  Clock3,
  MapPin,
  Star,
  User,
  ShieldCheck,
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
        hidden: { opacity: 0, y: 16 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.4, ease: [0.215, 0.61, 0.355, 1] },
        },
      }}
      className="h-full"
    >
      <Card className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/50 bg-card shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-[0_12px_24px_-4px_rgba(0,0,0,0.08)]">
        
        {/* ================= IMAGE AREA ================= */}
        <div className="relative h-48 w-full overflow-hidden bg-muted">
          {service.category.image ? (
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src={service.category.image}
                alt={service.category.name}
                unoptimized
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          ) : (
            <div className="flex h-full items-center justify-center text-xs text-muted-foreground/80 bg-accent/40">
              No image available
            </div>
          )}

          {/* Premium overlay: Clean, minimal gradient vignetting */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

          {/* Top row badges using shadcn styling */}
          <div className="absolute inset-x-3.5 top-3.5 flex items-center justify-between gap-2">
            <Badge className="bg-background/90 text-foreground border-none backdrop-blur-md font-medium text-[11px] py-0.5 px-2.5 shadow-sm hover:bg-background/90">
              {service.category.name}
            </Badge>

            {hasRating ? (
              <div className="flex items-center gap-1 rounded-full bg-black/40 px-2 py-0.5 text-[11px] font-bold text-amber-400 backdrop-blur-md border border-white/10">
                <Star className="h-3 w-3 fill-current" />
                {rating.toFixed(1)}
              </div>
            ) : (
              <Badge className="bg-emerald-500/90 text-white font-semibold text-[10px] uppercase border-none tracking-wider py-0.5 px-2">
                New
              </Badge>
            )}
          </div>

          {/* Service Time Meta */}
          <div className="absolute bottom-3 left-3.5 flex items-center gap-1.5 text-[11px] font-medium text-white/90 drop-shadow-sm">
            <Clock3 className="h-3.5 w-3.5 text-white/80" />
            {service.duration} mins
          </div>
        </div>

        {/* ================= BODY CONTENT ================= */}
        <div className="flex flex-1 flex-col p-5">
          
          {/* Title & Pricing Layout */}
          <div className="flex-1 space-y-2">
            <div className="flex items-start justify-between gap-2">
              <h2 className="line-clamp-1 text-base font-bold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary">
                {service.title}
              </h2>
              {/* Premium Pricing presentation inside content block */}
              <div className="flex shrink-0 items-baseline gap-0.5 text-right">
                <span className="text-base font-extrabold text-foreground">${service.price}</span>
                <span className="text-[10px] text-muted-foreground font-medium">/srv</span>
              </div>
            </div>

            <p className="line-clamp-2 min-h-[38px] text-xs leading-relaxed text-muted-foreground/90">
              {service.description}
            </p>
          </div>

          {/* ================= TECHNICIAN WIDGET ================= */}
          <div className="mt-4 flex items-center gap-3 rounded-xl border border-border/40 bg-muted/20 p-2.5 transition-colors duration-300 group-hover:border-primary/15 group-hover:bg-muted/40">
            <div className="relative">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary border border-primary/5">
                <User className="h-3.5 w-3.5" />
              </div>
              {/* Small verified dot indicator */}
              <div className="absolute -bottom-0.5 -right-0.5 rounded-full bg-background p-0.5">
                <ShieldCheck className="h-3 w-3 text-blue-500 fill-blue-500/10" />
              </div>
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-semibold text-foreground tracking-tight">
                {service.technician.user.name}
              </p>
              <div className="mt-0.5 flex items-center gap-1 text-[11px] text-muted-foreground/80">
                <MapPin className="h-3 w-3 shrink-0 text-muted-foreground/60" />
                <span className="truncate">{service.technician.location}</span>
              </div>
            </div>
          </div>

          {/* ================= ACTION ACTION BUTTON ================= */}
          <div className="mt-4 pt-1">
            <Button
              asChild
              variant="outline"
              className="w-full h-9 rounded-xl text-xs font-semibold shadow-none border-border/60 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
            >
              <Link href={`/services/${service.id}`} className="flex items-center justify-center gap-1.5">
                View Details
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Dynamic Border Line Accent */}
        <div className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-primary transition-transform duration-500 ease-out group-hover:scale-x-100" />
      </Card>
    </motion.div>
  );
}
