import {
  BadgeCheck,
  CalendarDays,
  Clock3,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Star,
  UserRound,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function TechnicianProfile({
  technician,
}: {
  technician: any;
}) {
  const name = technician?.user?.name || "Technician";

  const initials =
    name
      .split(" ")
      .filter(Boolean)
      .map((word: string) => word[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() || "TC";

  const rating = Number(technician?.rating || 0);
  const totalReviews = Number(technician?.totalReviews || 0);

  return (
    <div className="grid gap-8 lg:grid-cols-3">
      {/* =====================================================
          PROFILE CARD
      ====================================================== */}
      <Card className="relative h-fit overflow-hidden rounded-3xl border bg-card shadow-sm">
        {/* Top Background */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent" />

        <div className="relative p-6 sm:p-8">
          {/* Avatar */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="rounded-full bg-background p-1.5 shadow-lg ring-1 ring-primary/10">
                <Avatar className="h-28 w-28 border-4 border-background">
                  <AvatarImage
                    src={technician?.profilePicture}
                    alt={name}
                    className="object-cover"
                  />

                  <AvatarFallback className="bg-primary/10 text-2xl font-bold text-primary">
                    {initials}
                  </AvatarFallback>
                </Avatar>
              </div>

              {/* Verified */}
              <div className="absolute bottom-1 right-1 flex h-8 w-8 items-center justify-center rounded-full border-4 border-background bg-primary text-primary-foreground shadow-md">
                <BadgeCheck className="h-4 w-4" />
              </div>
            </div>
          </div>

          {/* Name */}
          <div className="mt-5 text-center">
            <div className="flex items-center justify-center gap-1.5">
              <h2 className="text-2xl font-bold tracking-tight">
                {name}
              </h2>
            </div>

            <p className="mt-1 text-sm text-muted-foreground">
              Professional Technician
            </p>

            {/* Experience */}
            <Badge
              variant="secondary"
              className="mt-4 rounded-full px-4 py-1.5"
            >
              <ShieldCheck className="mr-1.5 h-3.5 w-3.5 text-primary" />
              {technician?.experience || 0} Years Experience
            </Badge>
          </div>

          {/* Rating */}
          <div className="mt-6 rounded-2xl border bg-muted/30 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground">
                  Overall Rating
                </p>

                <div className="mt-1 flex items-center gap-2">
                  <span className="text-2xl font-bold">
                    {rating.toFixed(1)}
                  </span>

                  <div className="flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-4 w-4 ${
                          star <= Math.round(rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-muted-foreground/30"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="text-right">
                <p className="text-lg font-bold">
                  {totalReviews}
                </p>
                <p className="text-xs text-muted-foreground">
                  Reviews
                </p>
              </div>
            </div>
          </div>

          <Separator className="my-6" />

          {/* Contact Information */}
          <div className="space-y-4">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-primary">
              Contact Information
            </p>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <MapPin className="h-4 w-4" />
              </div>

              <div className="min-w-0">
                <p className="text-[11px] text-muted-foreground">
                  Location
                </p>

                <p className="truncate text-sm font-medium">
                  {technician?.location || "Not specified"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Phone className="h-4 w-4" />
              </div>

              <div className="min-w-0">
                <p className="text-[11px] text-muted-foreground">
                  Phone
                </p>

                <p className="truncate text-sm font-medium">
                  {technician?.user?.phone || "Not available"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Mail className="h-4 w-4" />
              </div>

              <div className="min-w-0">
                <p className="text-[11px] text-muted-foreground">
                  Email
                </p>

                <p className="truncate text-sm font-medium">
                  {technician?.user?.email || "Not available"}
                </p>
              </div>
            </div>
          </div>

          {/* Status */}
          <div className="mt-6 flex items-center gap-2 rounded-xl border bg-muted/30 px-4 py-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
            </span>

            <span className="text-xs font-medium text-muted-foreground">
              Trusted & Verified Professional
            </span>
          </div>
        </div>
      </Card>

      {/* =====================================================
          RIGHT CONTENT
      ====================================================== */}
      <div className="space-y-6 lg:col-span-2">
        {/* ================= BIOGRAPHY ================= */}
        <Card className="rounded-3xl border bg-card p-6 shadow-sm sm:p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <UserRound className="h-5 w-5" />
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-primary">
                About Technician
              </p>

              <h3 className="mt-1 text-2xl font-bold tracking-tight">
                Professional Biography
              </h3>
            </div>
          </div>

          <p className="mt-6 leading-7 text-muted-foreground">
            {technician?.bio ||
              "This technician has not added a biography yet."}
          </p>
        </Card>

        {/* ================= AVAILABILITY ================= */}
        <Card className="rounded-3xl border bg-card p-6 shadow-sm sm:p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <CalendarDays className="h-5 w-5" />
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-primary">
                Schedule
              </p>

              <h3 className="mt-1 text-2xl font-bold tracking-tight">
                Availability
              </h3>

              <p className="mt-1 text-sm text-muted-foreground">
                Technician&apos;s available working hours
              </p>
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border">
            {technician?.availability?.length ? (
              technician.availability.map((item: any, index: number) => (
                <div
                  key={item.id}
                  className={`flex items-center justify-between gap-4 px-4 py-4 transition-colors hover:bg-muted/40 sm:px-5 ${
                    index !== technician.availability.length - 1
                      ? "border-b"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                        item.isAvailable
                          ? "bg-green-500/10 text-green-600"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      <Clock3 className="h-4 w-4" />
                    </div>

                    <span className="text-sm font-semibold">
                      {item.dayOfWeek}
                    </span>
                  </div>

                  {item.isAvailable ? (
                    <Badge
                      variant="secondary"
                      className="rounded-full bg-green-500/10 text-green-700 dark:text-green-400"
                    >
                      {item.startTime} - {item.endTime}
                    </Badge>
                  ) : (
                    <Badge
                      variant="secondary"
                      className="rounded-full"
                    >
                      Unavailable
                    </Badge>
                  )}
                </div>
              ))
            ) : (
              <div className="p-8 text-center text-sm text-muted-foreground">
                No availability schedule has been added yet.
              </div>
            )}
          </div>
        </Card>

        {/* ================= REVIEWS ================= */}
        <Card className="rounded-3xl border bg-card p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-500/10 text-yellow-600">
                <Star className="h-5 w-5 fill-yellow-400" />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-primary">
                  Customer Feedback
                </p>

                <h3 className="mt-1 text-2xl font-bold tracking-tight">
                  Customer Reviews
                </h3>
              </div>
            </div>

            <Badge
              variant="outline"
              className="w-fit rounded-full px-3 py-1"
            >
              {totalReviews} Reviews
            </Badge>
          </div>

          <div className="mt-6 space-y-4">
            {technician?.reviews?.length ? (
              technician.reviews.map((review: any) => {
                const customerName =
                  review?.customer?.name || "Customer";

                const customerInitials = customerName
                  .split(" ")
                  .filter(Boolean)
                  .map((word: string) => word[0])
                  .join("")
                  .slice(0, 2)
                  .toUpperCase();

                return (
                  <div
                    key={review.id}
                    className="rounded-2xl border bg-muted/20 p-5 transition-all duration-300 hover:border-primary/20 hover:bg-muted/30"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarFallback className="bg-primary/10 text-xs font-semibold text-primary">
                            {customerInitials}
                          </AvatarFallback>
                        </Avatar>

                        <div>
                          <p className="text-sm font-semibold">
                            {customerName}
                          </p>

                          <div className="mt-1 flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className={`h-3.5 w-3.5 ${
                                  star <= Number(review.rating)
                                    ? "fill-yellow-400 text-yellow-400"
                                    : "text-muted-foreground/30"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>

                      <Badge
                        variant="secondary"
                        className="rounded-full"
                      >
                        {review.rating}/5
                      </Badge>
                    </div>

                    {review.comment && (
                      <p className="mt-4 text-sm leading-6 text-muted-foreground">
                        “{review.comment}”
                      </p>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="rounded-2xl border border-dashed p-8 text-center">
                <Star className="mx-auto h-8 w-8 text-muted-foreground/40" />

                <p className="mt-3 text-sm font-medium">
                  No reviews yet
                </p>

                <p className="mt-1 text-xs text-muted-foreground">
                  Customer reviews will appear here after completed services.
                </p>
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}