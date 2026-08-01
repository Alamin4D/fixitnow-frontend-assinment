import {
  CalendarDays,
  CreditCard,
  DollarSign,
  MapPin,
  StickyNote,
} from "lucide-react";

interface PaymentSummaryProps {
  booking: {
    id: string;
    serviceName: string;
    technicianName: string;
    bookingDate: string;
    bookingTime: string;
    totalPrice: number;
    address?: string;
    notes?: string;
  };
}

const PaymentSummary = ({ booking }: PaymentSummaryProps) => {
  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-semibold">
        Booking Summary
      </h2>

      <div className="space-y-5">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Booking ID</span>
          <span className="font-medium">
            #{booking.id.slice(0, 8)}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-muted-foreground">Service</span>
          <span>{booking.serviceName}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-muted-foreground">Technician</span>
          <span>{booking.technicianName}</span>
        </div>

        <div className="flex justify-between">
          <span className="flex items-center gap-2 text-muted-foreground">
            <CalendarDays className="h-4 w-4" />
            Schedule
          </span>

          <span>
            {booking.bookingDate} • {booking.bookingTime}
          </span>
        </div>

        {booking.address && (
          <div className="flex justify-between gap-5">
            <span className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              Address
            </span>

            <span className="text-right">
              {booking.address}
            </span>
          </div>
        )}

        {booking.notes && (
          <div className="flex justify-between gap-5">
            <span className="flex items-center gap-2 text-muted-foreground">
              <StickyNote className="h-4 w-4" />
              Notes
            </span>

            <span className="text-right">
              {booking.notes}
            </span>
          </div>
        )}

        <div className="border-t pt-5">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-lg font-semibold">
              <DollarSign className="h-5 w-5" />
              Total
            </span>

            <span className="text-2xl font-bold text-primary">
              ${booking.totalPrice}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSummary;