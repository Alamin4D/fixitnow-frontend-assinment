"use client";

import { useTransition } from "react";
import { CheckCircle, Loader2, XCircle } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { updateBookingStatus } from "../../customer-dashboard/_actions/update-booking-status";


interface BookingActionButtonsProps {
  bookingId: string;
  status:
    | "REQUESTED"
    | "ACCEPTED"
    | "DECLINED"
    | "PAID"
    | "IN_PROGRESS"
    | "COMPLETED"
    | "CANCELLED";
}

const BookingActionButtons = ({
  bookingId,
  status,
}: BookingActionButtonsProps) => {
  const [isPending, startTransition] = useTransition();

  const handleStatusUpdate = (
    nextStatus: "ACCEPTED" | "DECLINED"
  ) => {
    startTransition(async () => {
      try {
        await updateBookingStatus(bookingId, nextStatus);

        toast.success(
          `Booking ${
            nextStatus === "ACCEPTED" ? "accepted" : "declined"
          } successfully.`
        );
      } catch (error) {
        toast.error(
          error instanceof Error
            ? error.message
            : "Something went wrong."
        );
      }
    });
  };

  if (status !== "REQUESTED") {
    return null;
  }

  return (
    <div className="flex items-center gap-2">
      <Button
        size="sm"
        disabled={isPending}
        onClick={() => handleStatusUpdate("ACCEPTED")}
        className="bg-green-600 hover:bg-green-700"
      >
        {isPending ? (
          <Loader2 className="mr-1 h-4 w-4 animate-spin" />
        ) : (
          <CheckCircle className="mr-1 h-4 w-4" />
        )}
        Accept
      </Button>

      <Button
        size="sm"
        variant="destructive"
        disabled={isPending}
        onClick={() => handleStatusUpdate("DECLINED")}
      >
        {isPending ? (
          <Loader2 className="mr-1 h-4 w-4 animate-spin" />
        ) : (
          <XCircle className="mr-1 h-4 w-4" />
        )}
        Decline
      </Button>
    </div>
  );
};

export default BookingActionButtons;