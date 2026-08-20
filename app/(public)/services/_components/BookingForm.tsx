"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import {
  CalendarDays,
  Clock3,
  Loader2,
  MapPin,
  MessageSquareText,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { createBooking } from "../_actions/createBooking";
import {
  BookingFormValues,
  bookingSchema,
} from "@/lib/booking.validation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type BookingFormProps = {
  serviceId: string;
};

export default function BookingForm({
  serviceId,
}: BookingFormProps) {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      scheduledDate: "",
      scheduledTime: "",
      address: "",
      notes: "",
    },
  });

  const onSubmit = (values: BookingFormValues) => {
    startTransition(async () => {
      const payload = {
        serviceId,
        ...values,
      };

      const res = await createBooking(payload);

      if (res.success) {
        toast.success("Booking request submitted successfully!");

        reset();

        router.push("/customer-dashboard/bookings");
      } else {
        toast.error(res.message || "Failed to create booking.");
      }
    });
  };

  return (
    <div className="relative overflow-hidden rounded-3xl border bg-card shadow-xl shadow-black/5">
      {/* Top Accent */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/40 via-primary to-primary/40" />

      <div className="p-6 sm:p-8">
        {/* ================= HEADER ================= */}
        <div className="mb-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            Book a Service
          </div>

          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Schedule your service
          </h2>

          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Choose a convenient time and provide your service details.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
        >
          {/* ================= DATE & TIME ================= */}
          <div className="grid gap-5 sm:grid-cols-2">
            {/* Date */}
            <div className="space-y-2">
              <label
                htmlFor="scheduledDate"
                className="flex items-center gap-2 text-sm font-semibold"
              >
                <CalendarDays className="h-4 w-4 text-primary" />
                Scheduled Date
              </label>

              <Input
                id="scheduledDate"
                type="date"
                {...register("scheduledDate")}
                disabled={isPending}
                className={`h-11 rounded-xl bg-muted/20 transition-all focus-visible:ring-2 ${
                  errors.scheduledDate
                    ? "border-destructive focus-visible:ring-destructive/20"
                    : "focus-visible:border-primary"
                }`}
              />

              {errors.scheduledDate ? (
                <p className="text-xs font-medium text-destructive">
                  {errors.scheduledDate.message}
                </p>
              ) : (
                <p className="text-xs text-muted-foreground">
                  Select your preferred service date.
                </p>
              )}
            </div>

            {/* Time */}
            <div className="space-y-2">
              <label
                htmlFor="scheduledTime"
                className="flex items-center gap-2 text-sm font-semibold"
              >
                <Clock3 className="h-4 w-4 text-primary" />
                Scheduled Time
              </label>

              <Input
                id="scheduledTime"
                type="time"
                {...register("scheduledTime")}
                disabled={isPending}
                className={`h-11 rounded-xl bg-muted/20 transition-all focus-visible:ring-2 ${
                  errors.scheduledTime
                    ? "border-destructive focus-visible:ring-destructive/20"
                    : "focus-visible:border-primary"
                }`}
              />

              {errors.scheduledTime ? (
                <p className="text-xs font-medium text-destructive">
                  {errors.scheduledTime.message}
                </p>
              ) : (
                <p className="text-xs text-muted-foreground">
                  Choose a suitable time for the technician.
                </p>
              )}
            </div>
          </div>

          {/* ================= ADDRESS ================= */}
          <div className="space-y-2">
            <label
              htmlFor="address"
              className="flex items-center gap-2 text-sm font-semibold"
            >
              <MapPin className="h-4 w-4 text-primary" />
              Service Address
            </label>

            <Textarea
              id="address"
              placeholder="Enter your complete service address..."
              {...register("address")}
              disabled={isPending}
              className={`min-h-[100px] resize-none rounded-xl bg-muted/20 transition-all focus-visible:ring-2 ${
                errors.address
                  ? "border-destructive focus-visible:ring-destructive/20"
                  : "focus-visible:border-primary"
              }`}
            />

            {errors.address ? (
              <p className="text-xs font-medium text-destructive">
                {errors.address.message}
              </p>
            ) : (
              <p className="text-xs text-muted-foreground">
                Please provide a complete address so the technician can
                easily find you.
              </p>
            )}
          </div>

          {/* ================= NOTES ================= */}
          <div className="space-y-2">
            <label
              htmlFor="notes"
              className="flex items-center gap-2 text-sm font-semibold"
            >
              <MessageSquareText className="h-4 w-4 text-primary" />
              Additional Notes
              <span className="font-normal text-muted-foreground">
                (Optional)
              </span>
            </label>

            <Textarea
              id="notes"
              placeholder="Any special instructions, problems, or additional details..."
              {...register("notes")}
              disabled={isPending}
              className={`min-h-[120px] resize-none rounded-xl bg-muted/20 transition-all focus-visible:ring-2 ${
                errors.notes
                  ? "border-destructive focus-visible:ring-destructive/20"
                  : "focus-visible:border-primary"
              }`}
            />

            {errors.notes ? (
              <p className="text-xs font-medium text-destructive">
                {errors.notes.message}
              </p>
            ) : (
              <p className="text-xs text-muted-foreground">
                Help the technician understand your requirements beforehand.
              </p>
            )}
          </div>

          {/* ================= TRUST BOX ================= */}
          <div className="flex gap-3 rounded-2xl border bg-primary/[0.03] p-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10">
              <ShieldCheck className="h-5 w-5 text-primary" />
            </div>

            <div>
              <p className="text-sm font-semibold">
                Safe & Reliable Booking
              </p>

              <p className="mt-1 text-xs leading-5 text-muted-foreground">
                Your booking request will be securely submitted and reviewed
                by the assigned technician.
              </p>
            </div>
          </div>

          {/* ================= SUBMIT ================= */}
          <Button
            type="submit"
            disabled={isPending}
            className="h-12 w-full rounded-xl text-sm font-semibold shadow-lg shadow-primary/15 transition-all hover:-translate-y-0.5 hover:shadow-xl disabled:translate-y-0 disabled:opacity-70"
          >
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting Booking...
              </>
            ) : (
              <>
                <CalendarDays className="mr-2 h-4 w-4" />
                Book Service
              </>
            )}
          </Button>

          <p className="text-center text-xs text-muted-foreground">
            By booking this service, you agree to our terms and service
            policies.
          </p>
        </form>
      </div>
    </div>
  );
}