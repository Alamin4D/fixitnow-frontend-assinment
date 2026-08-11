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

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface BookingsChartProps {
  data: {
    key: string;
    month: string;
    bookings: number;
    earnings: number;
  }[];
}

const BookingsChart = ({
  data,
}: BookingsChartProps) => {
  return (
    <Card className="border-border/50 shadow-sm">
      <CardHeader>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <CardTitle className="text-lg">
              Booking Performance
            </CardTitle>

            <p className="text-sm text-muted-foreground">
              Monthly booking activity
            </p>
          </div>

          <div className="rounded-full border px-3 py-1 text-xs font-medium">
            Monthly
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="h-[330px] w-full">
          {data.length > 0 ? (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  className="stroke-muted"
                />

                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tickMargin={10}
                />

                <YAxis
                  axisLine={false}
                  tickLine={false}
                  allowDecimals={false}
                />

                <Tooltip
                  contentStyle={{
                    borderRadius: "12px",
                    border: "1px solid hsl(var(--border))",
                    background: "hsl(var(--background))",
                  }}
                />

                <Bar
                  dataKey="bookings"
                  fill="hsl(var(--chart-2))"
                  radius={[8, 8, 0, 0]}
                  maxBarSize={48}
                />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
              No booking data available yet.
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default BookingsChart;