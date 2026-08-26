import Image from "next/image";
import Link from "next/link";

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
  return (
    <Card className="group relative overflow-hidden rounded-2xl border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl hover:shadow-black/5">
      {/* ================= IMAGE ================= */}
      <div className="relative h-52 w-full overflow-hidden bg-muted">
        {service.category.image ? (
          <Image
            src={service.category.image}
            alt={service.category.name}
            unoptimized
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-muted text-sm text-muted-foreground">
            No image available
          </div>
        )}

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-70" />

        {/* Category Badge */}
        <div className="absolute left-4 top-4">
          <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-xs font-semibold text-white shadow-sm backdrop-blur-md">
            {service.category.name}
          </span>
        </div>

        {/* Rating */}
        <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full border border-white/20 bg-black/40 px-2.5 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
          <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
          {service.technician.rating.toFixed(1)}
        </div>

        {/* Duration */}
        <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-xs font-medium text-white">
          <Clock3 className="h-3.5 w-3.5" />
          {service.duration} mins
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="p-5">
        {/* Title */}
        <div>
          <h2 className="line-clamp-1 text-xl font-bold tracking-tight transition-colors group-hover:text-primary">
            {service.title}
          </h2>

          <p className="mt-2 line-clamp-2 min-h-10 text-sm leading-5 text-muted-foreground">
            {service.description}
          </p>
        </div>

        {/* ================= TECHNICIAN ================= */}
        <div className="mt-5 rounded-xl border bg-muted/30 p-3">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <User className="h-4 w-4" />
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-xs text-muted-foreground">
                Technician
              </p>

              <p className="truncate text-sm font-semibold">
                {service.technician.user.name}
              </p>
            </div>

            <div className="flex items-center gap-1 text-xs font-semibold">
              <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
              {service.technician.rating.toFixed(1)}
            </div>
          </div>

          <div className="mt-3 flex items-center gap-1.5 border-t pt-3 text-xs text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 shrink-0 text-primary" />
            <span className="truncate">
              {service.technician.location}
            </span>
          </div>
        </div>

        {/* ================= FOOTER ================= */}
        <div className="mt-5 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs text-muted-foreground">
              Starting from
            </p>

            <div className="mt-0.5 flex items-baseline gap-1">
              <span className="text-2xl font-bold tracking-tight">
                ${service.price}
              </span>

              <span className="text-xs text-muted-foreground">
                / service
              </span>
            </div>
          </div>

          <Button
            asChild
            className="rounded-xl shadow-sm transition-all duration-300 group-hover:shadow-md"
          >
            <Link href={`/services/${service.id}`}>
              View Details
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
    </Card>
  );
}