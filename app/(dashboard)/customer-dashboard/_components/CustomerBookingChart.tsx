"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { CalendarRange } from "lucide-react";

interface Booking {
  id: string;
  status: string;
  totalAmount: number;
  createdAt?: string;
}

interface CustomerBookingChartProps {
  bookings: Booking[];
}

const CustomerBookingChart = ({
  bookings,
}: CustomerBookingChartProps) => {
  const data = Array.from({ length: 6 }, (_, index) => {
    const date = new Date();

    date.setMonth(date.getMonth() - (5 - index));

    const month = date.toLocaleString("en-US", {
      month: "short",
    });

    const monthBookings = bookings.filter((booking) => {
      if (!booking.createdAt) return false;

      const bookingDate = new Date(booking.createdAt);

      return (
        bookingDate.getMonth() === date.getMonth() &&
        bookingDate.getFullYear() === date.getFullYear()
      );
    });

    return {
      month,
      bookings: monthBookings.length,
      completed: monthBookings.filter(
        (booking) => booking.status === "COMPLETED"
      ).length,
    };
  });

  return (
    <div className="rounded-2xl border bg-card p-6 shadow-sm">
      <div className="mb-8 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2">
            <div className="rounded-lg bg-primary/10 p-2 text-primary">
              <CalendarRange className="h-4 w-4" />
            </div>

            <h2 className="font-semibold">
              Booking Analytics
            </h2>
          </div>

          <p className="mt-2 text-sm text-muted-foreground">
            Your booking activity over the last 6 months
          </p>
        </div>
      </div>

      <div className="h-[320px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            barGap={8}
            margin={{
              top: 10,
              right: 10,
              left: -20,
              bottom: 0,
            }}
          >
            <CartesianGrid
              vertical={false}
              strokeDasharray="4 4"
              className="stroke-muted"
            />

            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tickMargin={12}
            />

            <YAxis
              allowDecimals={false}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip
              cursor={{ opacity: 0.08 }}
              contentStyle={{
                borderRadius: "12px",
                border: "1px solid hsl(var(--border))",
                background: "hsl(var(--card))",
              }}
            />

            <Bar
              dataKey="bookings"
              name="Bookings"
              radius={[6, 6, 0, 0]}
            />

            <Bar
              dataKey="completed"
              name="Completed"
              radius={[6, 6, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CustomerBookingChart;