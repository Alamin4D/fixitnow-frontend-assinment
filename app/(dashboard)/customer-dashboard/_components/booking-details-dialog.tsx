"use client";

import {
  Calendar,
  Clock,
  DollarSign,
  MapPin,
  User,
  Wrench,
  FileText,
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";

import BookingStatusBadge from "./booking-status-badge";

export interface BookingDetails {
  id: string;
  serviceName: string;
  customerName: string;
  technicianName: string;
  bookingDate: string;
  bookingTime?: string;
  address?: string;
  notes?: string;
  totalPrice: number;
  status:
    | "PENDING"
    | "ACCEPTED"
    | "IN_PROGRESS"
    | "COMPLETED"
    | "CANCELLED";
}

interface BookingDetailsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  booking: BookingDetails | null;
}

function DetailRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value?: string | number | null;
}) {
  if (!value) return null;

  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 text-muted-foreground">
        {icon}
      </div>

      <div className="flex-1">
        <p className="text-xs text-muted-foreground">
          {label}
        </p>

        <p className="font-medium">{value}</p>
      </div>
    </div>
  );
}

export default function BookingDetailsDialog({
  open,
  onOpenChange,
  booking,
}: BookingDetailsDialogProps) {
  if (!booking) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>
            Booking Details
          </DialogTitle>

          <DialogDescription>
            Review booking information.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold">
                {booking.serviceName}
              </h2>

              <p className="text-sm text-muted-foreground">
                Booking ID: {booking.id}
              </p>
            </div>

            <BookingStatusBadge
              status={booking.status}
            />
          </div>

          <Separator />

          <div className="grid gap-5 md:grid-cols-2">
            <DetailRow
              icon={<User className="h-4 w-4" />}
              label="Customer"
              value={booking.customerName}
            />

            <DetailRow
              icon={<Wrench className="h-4 w-4" />}
              label="Technician"
              value={booking.technicianName}
            />

            <DetailRow
              icon={<Calendar className="h-4 w-4" />}
              label="Booking Date"
              value={new Date(
                booking.bookingDate
              ).toLocaleDateString()}
            />

            <DetailRow
              icon={<Clock className="h-4 w-4" />}
              label="Time"
              value={booking.bookingTime}
            />

            <DetailRow
              icon={<DollarSign className="h-4 w-4" />}
              label="Total Price"
              value={`$${booking.totalPrice}`}
            />

            <DetailRow
              icon={<MapPin className="h-4 w-4" />}
              label="Service Address"
              value={booking.address}
            />
          </div>

          {booking.notes && (
            <>
              <Separator />

              <DetailRow
                icon={<FileText className="h-4 w-4" />}
                label="Additional Notes"
                value={booking.notes}
              />
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}