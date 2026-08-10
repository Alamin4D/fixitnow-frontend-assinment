"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import {
  Activity,
  CheckCircle2,
  Clock3,
  CreditCard,
  XCircle,
  Ban,
} from "lucide-react";

interface Booking {
  id: string;
  status: string;
}

interface CustomerBookingStatusProps {
  bookings: Booking[];
}

const STATUS_CONFIG: Record<
  string,
  {
    label: string;
    icon: React.ElementType;
  }
> = {
  REQUESTED: {
    label: "Requested",
    icon: Clock3,
  },
  ACCEPTED: {
    label: "Accepted",
    icon: CheckCircle2,
  },
  PAID: {
    label: "Paid",
    icon: CreditCard,
  },
  IN_PROGRESS: {
    label: "In Progress",
    icon: Activity,
  },
  COMPLETED: {
    label: "Completed",
    icon: CheckCircle2,
  },
  DECLINED: {
    label: "Declined",
    icon: XCircle,
  },
  CANCELLED: {
    label: "Cancelled",
    icon: Ban,
  },
};

const STATUS_COLORS: Record<string, string> = {
  REQUESTED: "#FBBF24",
  ACCEPTED: "#60A5FA",
  PAID: "#A78BFA",
  IN_PROGRESS: "#22D3EE",
  COMPLETED: "#34D399",
  DECLINED: "#FB7185",
  CANCELLED: "#94A3B8",
};

const CustomerBookingStatus = ({
  bookings,
}: CustomerBookingStatusProps) => {
  const statuses = Object.keys(STATUS_CONFIG);

  const data = statuses
    .map((status) => ({
      status,
      name: STATUS_CONFIG[status].label,
      value: bookings.filter(
        (booking) => booking.status === status
      ).length,
    }))
    .filter((item) => item.value > 0);

  const totalBookings = bookings.length;

  return (
    <div className="relative overflow-hidden rounded-2xl border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-lg">
      {/* Decorative glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/5 blur-3xl" />

      {/* Header */}
      <div className="relative flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Activity className="h-4 w-4" />
            </div>

            <div>
              <h2 className="font-semibold tracking-tight">
                Booking Status
              </h2>

              <p className="text-xs text-muted-foreground">
                Service activity overview
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-full border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground">
          {totalBookings} Total
        </div>
      </div>

      {data.length === 0 ? (
        /* Empty State */
        <div className="flex h-[330px] flex-col items-center justify-center text-center">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-muted">
            <Activity className="h-6 w-6 text-muted-foreground" />
          </div>

          <h3 className="font-semibold">
            No booking activity
          </h3>

          <p className="mt-1 max-w-[220px] text-sm text-muted-foreground">
            Your booking status distribution will appear here.
          </p>
        </div>
      ) : (
        <div className="relative mt-4">
          {/* Chart */}
          <div className="relative h-[300px]">
            <ResponsiveContainer
              width="100%"
              height="100%"
            >
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={78}
                  outerRadius={108}
                  paddingAngle={4}
                  cornerRadius={6}
                  stroke="none"
                  animationDuration={900}
                >
                  {data.map((item) => (
                    <Cell
                      key={item.status}
                      fill={STATUS_COLORS[item.status]}
                    />
                  ))}
                </Pie>

                <Tooltip
                  cursor={false}
                  content={({ active, payload }) => {
                    if (
                      !active ||
                      !payload ||
                      !payload.length
                    ) {
                      return null;
                    }

                    const item = payload[0].payload;

                    return (
                      <div className="rounded-xl border bg-background/95 px-4 py-3 shadow-xl backdrop-blur">
                        <p className="text-xs text-muted-foreground">
                          {item.name}
                        </p>

                        <p className="mt-1 text-lg font-bold">
                          {item.value}
                          <span className="ml-1 text-xs font-normal text-muted-foreground">
                            bookings
                          </span>
                        </p>
                      </div>
                    );
                  }}
                />
              </PieChart>
            </ResponsiveContainer>

            {/* Center Content */}
            <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold tracking-tight">
                {totalBookings}
              </span>

              <span className="mt-1 text-xs font-medium text-muted-foreground">
                Total Bookings
              </span>
            </div>
          </div>

          {/* Status List */}
          <div className="mt-2 grid grid-cols-2 gap-3">
            {data.map((item) => {
              const Icon =
                STATUS_CONFIG[item.status].icon;

              const percentage =
                totalBookings > 0
                  ? Math.round(
                      (item.value / totalBookings) * 100
                    )
                  : 0;

              return (
                <div
                  key={item.status}
                  className="group flex items-center justify-between rounded-xl border bg-muted/20 p-3 transition-colors hover:bg-muted/50"
                >
                  <div className="flex min-w-0 items-center gap-2.5">
                    <div
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                      style={{
                        backgroundColor: `${STATUS_COLORS[item.status]}20`,
                        color: STATUS_COLORS[item.status],
                      }}
                    >
                      <Icon className="h-4 w-4" />
                    </div>

                    <div className="min-w-0">
                      <p className="truncate text-xs font-medium">
                        {item.name}
                      </p>

                      <p className="text-[11px] text-muted-foreground">
                        {percentage}% of bookings
                      </p>
                    </div>
                  </div>

                  <span className="ml-2 text-sm font-bold">
                    {item.value}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerBookingStatus;