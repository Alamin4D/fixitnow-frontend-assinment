"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import BookingActionButtons from "./BookingActionButtons";

interface Booking {
  id: string;
  scheduledDate: string;
  scheduledTime: string;
  status:
    | "REQUESTED"
    | "ACCEPTED"
    | "DECLINED"
    | "PAID"
    | "IN_PROGRESS"
    | "COMPLETED"
    | "CANCELLED";
  customer: {
    name: string;
    email: string;
  };
  service: {
    title: string;
    price: number;
  };
}

interface TechnicianBookingsTableProps {
  bookings: Booking[];
}

const statusVariant = (
  status: Booking["status"]
):
  | "default"
  | "secondary"
  | "destructive"
  | "outline" => {
  switch (status) {
    case "COMPLETED":
      return "default";
    case "REQUESTED":
      return "secondary";
    case "DECLINED":
    case "CANCELLED":
      return "destructive";
    default:
      return "outline";
  }
};

export default function TechnicianBookingsTable({
  bookings,
}: TechnicianBookingsTableProps) {
  if (!bookings.length) {
    return (
      <div className="rounded-lg border py-12 text-center text-muted-foreground">
        No bookings found.
      </div>
    );
  }
  

  return (
    <div className="rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Customer</TableHead>
            <TableHead>Service</TableHead>
            <TableHead>Schedule</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Price</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {bookings.map((booking) => (
            <TableRow key={booking.id}>
              <TableCell>
                <div>
                  <p className="font-medium">{booking.customer.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {booking.customer.email}
                  </p>
                </div>
              </TableCell>

              <TableCell>{booking.service.title}</TableCell>

              <TableCell>
                <div>
                  <p>{booking.scheduledDate}</p>
                  <p className="text-sm text-muted-foreground">
                    {booking.scheduledTime}
                  </p>
                </div>
              </TableCell>

              <TableCell>
                <Badge variant={statusVariant(booking.status)}>
                  {booking.status.replaceAll("_", " ")}
                </Badge>
              </TableCell>

              <TableCell>৳{booking.service.price}</TableCell>

              <TableCell className="text-right">
                <BookingActionButtons booking={booking} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}