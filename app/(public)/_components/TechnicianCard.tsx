import Link from "next/link";
import {
  BriefcaseBusiness,
  MapPin,
  Phone,
  Star,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export default function TechnicianCard({
  technician,
}: {
  technician: any;
}) {
  const name = technician?.user?.name || "Unknown Technician";

  const initials = name
    .split(" ")
    .map((item: string) => item[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <Card className="group relative overflow-hidden rounded-3xl border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      {/* Premium Top Gradient */}
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent" />

      {/* Profile */}
      <div className="relative px-6 pt-8">
        <div className="flex items-start justify-between">
          {/* Avatar */}
          <div className="relative">
            <Avatar className="h-24 w-24 border-4 border-background shadow-xl">
              <AvatarImage
                src={technician?.profilePicture}
                alt={name}
              />

              <AvatarFallback className="bg-primary/10 text-lg font-bold text-primary">
                {initials}
              </AvatarFallback>
            </Avatar>

            {/* Online / Verified Badge */}
            <div className="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full border-4 border-background bg-primary text-primary-foreground">
              <ShieldCheck className="h-4 w-4" />
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1 rounded-full border bg-background/80 px-3 py-1.5 text-sm font-semibold shadow-sm backdrop-blur">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span>{technician?.rating ?? 0}</span>
          </div>
        </div>

        {/* Name */}
        <div className="mt-5">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-xl font-bold tracking-tight">
              {name}
            </h2>

            <Badge
              variant="secondary"
              className="rounded-full px-2 py-0.5 text-[10px]"
            >
              Verified
            </Badge>
          </div>

          <p className="mt-1 line-clamp-1 text-sm text-muted-foreground">
            {technician?.user?.email}
          </p>
        </div>

        {/* Information */}
        <div className="mt-6 space-y-3">
          <div className="flex items-center gap-3 rounded-xl bg-muted/40 px-3 py-2.5">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <BriefcaseBusiness className="h-4 w-4" />
            </div>

            <div className="min-w-0">
              <p className="text-xs text-muted-foreground">
                Experience
              </p>

              <p className="text-sm font-semibold">
                {technician?.experience ?? 0} Years
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-xl bg-muted/40 px-3 py-2.5">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <MapPin className="h-4 w-4" />
            </div>

            <div className="min-w-0">
              <p className="text-xs text-muted-foreground">
                Location
              </p>

              <p className="truncate text-sm font-semibold">
                {technician?.location || "Not specified"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-xl bg-muted/40 px-3 py-2.5">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Phone className="h-4 w-4" />
            </div>

            <div className="min-w-0">
              <p className="text-xs text-muted-foreground">
                Contact
              </p>

              <p className="truncate text-sm font-semibold">
                {technician?.user?.phone || "Not available"}
              </p>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="mt-5 flex items-center justify-between border-t pt-4">
          <div>
            <p className="text-xs text-muted-foreground">
              Customer Reviews
            </p>

            <p className="mt-1 text-sm font-semibold">
              {technician?.totalReviews ?? 0} Reviews
            </p>
          </div>

          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-bold">
              {technician?.rating ?? 0}/5
            </span>
          </div>
        </div>

        {/* CTA */}
        <Button
          asChild
          className="group/btn mt-6 mb-6 h-11 w-full rounded-xl"
        >
          <Link href={`/technicians/${technician.id}`}>
            View Technician Profile

            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
          </Link>
        </Button>
      </div>
    </Card>
  );
}