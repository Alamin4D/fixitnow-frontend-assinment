"use client";

import { useTransition } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { updateBookingStatus } from "../_actions/update-booking-status";

interface Booking {
  id: string;
  status:
    | "REQUESTED"
    | "ACCEPTED"
    | "DECLINED"
    | "PAID"
    | "IN_PROGRESS"
    | "COMPLETED"
    | "CANCELLED";
}

interface BookingActionButtonsProps {
  booking: Booking;
}

export default function BookingActionButtons({
  booking,
}: BookingActionButtonsProps) {
  const [isPending, startTransition] = useTransition();

  const handleUpdate = (
    status: "ACCEPTED" | "DECLINED" | "IN_PROGRESS" | "COMPLETED"
  ) => {
    startTransition(async () => {
      const result = await updateBookingStatus(booking.id, status);

      if (result.success) {
        toast.success(result.message);
      } else {
        toast.error(result.message);
      }
    });
  };

  switch (booking.status) {
    case "REQUESTED":
      return (
        <div className="flex justify-end gap-2">
          <Button
            size="sm"
            disabled={isPending}
            onClick={() => handleUpdate("ACCEPTED")}
          >
            Accept
          </Button>

          <Button
            size="sm"
            variant="destructive"
            disabled={isPending}
            onClick={() => handleUpdate("DECLINED")}
          >
            Decline
          </Button>
        </div>
      );

    case "PAID":
    case "ACCEPTED":
      return (
        <Button
          size="sm"
          disabled={isPending}
          onClick={() => handleUpdate("IN_PROGRESS")}
        >
          Start Work
        </Button>
      );

    case "IN_PROGRESS":
      return (
        <Button
          size="sm"
          disabled={isPending}
          onClick={() => handleUpdate("COMPLETED")}
        >
          Mark Complete
        </Button>
      );

    default:
      return (
        <span className="text-sm text-muted-foreground">
          No actions available
        </span>
      );
  }
}