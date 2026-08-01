"use client";

import {
  CalendarDays,
  Clock,
  MapPin,
} from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import BookingActionButtons from "./booking-action-buttons";



type BookingStatus =
  | "REQUESTED"
  | "ACCEPTED"
  | "DECLINED"
  | "PAID"
  | "IN_PROGRESS"
  | "COMPLETED"
  | "CANCELLED";

interface Booking {
  id: string;
  status: BookingStatus;
  date: string;
  time: string;
  address: string;
  price?: number;

  customer?: {
    id: string;
    name: string;
    email: string;
  };

  service?: {
    id: string;
    name: string;
  };
}

interface TechnicianBookingsTableProps {
  bookings: Booking[];
}

const statusStyles: Record<BookingStatus, string> = {
  REQUESTED: "bg-yellow-100 text-yellow-700",
  ACCEPTED: "bg-green-100 text-green-700",
  DECLINED: "bg-red-100 text-red-700",
  PAID: "bg-purple-100 text-purple-700",
  IN_PROGRESS: "bg-blue-100 text-blue-700",
  COMPLETED: "bg-emerald-100 text-emerald-700",
  CANCELLED: "bg-gray-100 text-gray-700",
};

const TechnicianBookingsTable = ({
  bookings,
}: TechnicianBookingsTableProps) => {
  if (!bookings.length) {
    return (
      <div className="rounded-xl border bg-white p-12 text-center">
        <h2 className="text-lg font-semibold">
          No Bookings Found
        </h2>

        <p className="mt-2 text-sm text-muted-foreground">
          You don't have any incoming bookings yet.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
      <div className="border-b px-6 py-4">
        <h2 className="text-lg font-semibold">
          Incoming Bookings
        </h2>

        <p className="text-sm text-muted-foreground">
          Manage customer booking requests.
        </p>
      </div>

      {/* Desktop */}

      <div className="hidden overflow-x-auto md:block">
        <table className="w-full text-sm">
          <thead className="bg-muted/50">
            <tr>
              <th className="px-6 py-3 text-left">
                Customer
              </th>

              <th className="px-6 py-3 text-left">
                Service
              </th>

              <th className="px-6 py-3 text-left">
                Schedule
              </th>

              <th className="px-6 py-3 text-left">
                Address
              </th>

              <th className="px-6 py-3 text-left">
                Price
              </th>

              <th className="px-6 py-3 text-left">
                Status
              </th>

              <th className="px-6 py-3 text-left">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((booking) => (
              <tr
                key={booking.id}
                className="border-t hover:bg-muted/30"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback>
                        {booking.customer?.name
                          ?.charAt(0)
                          .toUpperCase() ?? "U"}
                      </AvatarFallback>
                    </Avatar>

                    <div>
                      <p className="font-medium">
                        {booking.customer?.name ??
                          "Unknown"}
                      </p>

                      <p className="text-xs text-muted-foreground">
                        {booking.customer?.email}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4">
                  {booking.service?.name ?? "--"}
                </td>

                <td className="px-6 py-4">
                  <div className="space-y-1">
                    <p className="flex items-center gap-2">
                      <CalendarDays className="h-4 w-4" />
                      {booking.date}
                    </p>

                    <p className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {booking.time}
                    </p>
                  </div>
                </td>

                <td className="px-6 py-4">
                  <p className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {booking.address}
                  </p>
                </td>

                <td className="px-6 py-4">
                  {booking.price
                    ? `$${booking.price}`
                    : "--"}
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${statusStyles[booking.status]}`}
                  >
                    {booking.status.replace("_", " ")}
                  </span>
                </td>

                <td className="px-6 py-4">
                  <BookingActionButtons
                    bookingId={booking.id}
                    status={booking.status}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile */}

      <div className="space-y-4 p-4 md:hidden">
        {bookings.map((booking) => (
          <div
            key={booking.id}
            className="rounded-xl border p-4"
          >
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarFallback>
                  {booking.customer?.name
                    ?.charAt(0)
                    .toUpperCase() ?? "U"}
                </AvatarFallback>
              </Avatar>

              <div>
                <h3 className="font-semibold">
                  {booking.customer?.name}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {booking.service?.name}
                </p>
              </div>
            </div>

            <div className="mt-4 space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4" />
                {booking.date}
              </p>

              <p className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {booking.time}
              </p>

              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {booking.address}
              </p>

              <p>
                <strong>Price:</strong>{" "}
                {booking.price
                  ? `$${booking.price}`
                  : "--"}
              </p>
            </div>

            <span
              className={`mt-4 inline-block rounded-full px-3 py-1 text-xs font-medium ${statusStyles[booking.status]}`}
            >
              {booking.status.replace("_", " ")}
            </span>

            <div className="mt-4">
              <BookingActionButtons
                bookingId={booking.id}
                status={booking.status}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnicianBookingsTable;