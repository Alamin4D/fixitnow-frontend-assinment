"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
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

interface EarningsChartProps {
  data: {
    key: string;
    month: string;
    bookings: number;
    earnings: number;
  }[];
}

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
};

const EarningsChart = ({ data }: EarningsChartProps) => {
  return (
    <Card className="border-border/50 shadow-sm lg:col-span-2">
      <CardHeader>
        <CardTitle className="text-lg">
          Earnings Overview
        </CardTitle>

        <p className="text-sm text-muted-foreground">
          Earnings generated from completed jobs
        </p>
      </CardHeader>

      <CardContent>
        <div className="h-[320px] w-full">
          {data.length > 0 ? (
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
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
                  tickMargin={10}
                />

                <Tooltip
                  formatter={(value) =>
                    formatCurrency(Number(value))
                  }
                  contentStyle={{
                    borderRadius: "12px",
                    border: "1px solid hsl(var(--border))",
                    background: "hsl(var(--background))",
                  }}
                />

                <Line
                  type="monotone"
                  dataKey="earnings"
                  stroke="hsl(var(--chart-1))"
                  strokeWidth={3}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <EmptyChart />
          )}
        </div>
      </CardContent>
    </Card>
  );
};

const EmptyChart = () => {
  return (
    <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
      No earnings data available yet.
    </div>
  );
};

export default EarningsChart;