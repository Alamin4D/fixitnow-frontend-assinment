"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { createBooking } from "../_actions/createBooking";
import { BookingFormValues, bookingSchema } from "@/lib/booking.validation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type BookingFormProps = {
  serviceId: string;
};

export default function BookingForm({ serviceId }: BookingFormProps) {
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
        router.push("/dashboard/customer/bookings");
        router.refresh();
      } else {
        toast.error(res.message || "Failed to create booking.");
      }
    });
  };

  return (
    <div className="rounded-xl border p-6 shadow-sm">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Date */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Scheduled Date</label>
          <Input type="date" {...register("scheduledDate")} />
          {errors.scheduledDate && (
            <p className="text-sm text-red-500">
              {errors.scheduledDate.message}
            </p>
          )}
        </div>

        {/* Time */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Scheduled Time</label>
          <Input type="time" {...register("scheduledTime")} />
          {errors.scheduledTime && (
            <p className="text-sm text-red-500">
              {errors.scheduledTime.message}
            </p>
          )}
        </div>

        {/* Address */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Service Address</label>
          <Textarea
            placeholder="Enter your service address"
            {...register("address")}
          />
          {errors.address && (
            <p className="text-sm text-red-500">
              {errors.address.message}
            </p>
          )}
        </div>

        {/* Notes */}
        <div className="space-y-2">
          <label className="text-sm font-medium">
            Additional Notes (Optional)
          </label>
          <Textarea
            placeholder="Any special instructions..."
            {...register("notes")}
          />
          {errors.notes && (
            <p className="text-sm text-red-500">
              {errors.notes.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          className="w-full"
          disabled={isPending}
        >
          {isPending ? "Submitting..." : "Book Service"}
        </Button>
      </form>
    </div>
  );
}