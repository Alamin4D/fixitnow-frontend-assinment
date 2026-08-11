import { CalendarDays, Inbox } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import BookingStatusBadge from "./booking-status-badge";

interface RecentBooking {
  id: string;

  customer: {
    id: string;
    name: string;
    email?: string;
    phone?: string;
  };

  service: {
    id: string;
    title: string;
    category?: {
      id: string;
      name: string;
    };
  };

  scheduledDate: string;
  scheduledTime: string;
  totalAmount: number;
  status: string;
}

interface RecentBookingsTableProps {
  bookings: RecentBooking[];
}

const formatDate = (date: string) => {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
};

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
};

const RecentBookingsTable = ({
  bookings,
}: RecentBookingsTableProps) => {
  return (
    <Card className="overflow-hidden border-border/50 shadow-sm">
      <CardHeader>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <CardTitle className="text-lg">
              Recent Booking Requests
            </CardTitle>

            <p className="mt-1 text-sm text-muted-foreground">
              Latest bookings from your customers
            </p>
          </div>

          <div className="rounded-full bg-muted px-3 py-1.5 text-xs font-medium">
            {bookings.length} Recent
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-0">
        {bookings.length === 0 ? (
          <div className="flex min-h-[260px] flex-col items-center justify-center px-6 text-center">
            <div className="rounded-full bg-muted p-4">
              <Inbox className="size-7 text-muted-foreground" />
            </div>

            <h3 className="mt-4 font-semibold">
              No booking requests
            </h3>

            <p className="mt-1 max-w-sm text-sm text-muted-foreground">
              New customer booking requests will appear here.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px]">
              <thead>
                <tr className="border-y bg-muted/30">
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Customer
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Service
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Schedule
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Amount
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody>
                {bookings.map((booking) => (
                  <tr
                    key={booking.id}
                    className="border-b transition-colors last:border-0 hover:bg-muted/30"
                  >
                    {/* Customer */}
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                          {booking.customer.name
                            ?.charAt(0)
                            .toUpperCase()}
                        </div>

                        <div>
                          <p className="font-medium">
                            {booking.customer.name}
                          </p>

                          <p className="mt-0.5 text-xs text-muted-foreground">
                            {booking.customer.email ||
                              booking.customer.phone ||
                              "Customer"}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Service */}
                    <td className="px-6 py-5">
                      <p className="font-medium">
                        {booking.service.title}
                      </p>

                      {booking.service.category && (
                        <p className="mt-1 text-xs text-muted-foreground">
                          {booking.service.category.name}
                        </p>
                      )}
                    </td>

                    {/* Schedule */}
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2">
                        <CalendarDays className="size-4 text-muted-foreground" />

                        <div>
                          <p className="font-medium">
                            {formatDate(
                              booking.scheduledDate
                            )}
                          </p>

                          <p className="mt-0.5 text-xs text-muted-foreground">
                            {booking.scheduledTime}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Amount */}
                    <td className="px-6 py-5">
                      <span className="font-semibold">
                        {formatCurrency(
                          booking.totalAmount
                        )}
                      </span>
                    </td>

                    {/* Status */}
                    <td className="px-6 py-5">
                      <BookingStatusBadge
                        status={booking.status}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default RecentBookingsTable;