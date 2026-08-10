"use client";

import {
  CalendarCheck,
  Clock3,
  CheckCircle2,
  CreditCard,
  ArrowUpRight,
} from "lucide-react";

interface Booking {
  id: string;
  status:
    | "REQUESTED"
    | "ACCEPTED"
    | "DECLINED"
    | "PAID"
    | "IN_PROGRESS"
    | "COMPLETED"
    | "CANCELLED";
  totalAmount: number;
}

interface CustomerStatsProps {
  bookings: Booking[];
}

const CustomerStats = ({ bookings }: CustomerStatsProps) => {
  const totalBookings = bookings.length;

  const pendingBookings = bookings.filter(
    (booking) =>
      booking.status === "REQUESTED" ||
      booking.status === "ACCEPTED"
  ).length;

  const completedBookings = bookings.filter(
    (booking) => booking.status === "COMPLETED"
  ).length;

  const totalSpent = bookings
    .filter(
      (booking) =>
        booking.status === "PAID" ||
        booking.status === "COMPLETED"
    )
    .reduce(
      (total, booking) =>
        total + Number(booking.totalAmount || 0),
      0
    );

  const stats = [
    {
      title: "Total Bookings",
      value: totalBookings,
      description: "All service requests",
      icon: CalendarCheck,
      iconStyle:
        "bg-blue-500/10 text-blue-600 dark:text-blue-400",
      glow: "from-blue-500/10",
    },
    {
      title: "Pending",
      value: pendingBookings,
      description: "Awaiting completion",
      icon: Clock3,
      iconStyle:
        "bg-amber-500/10 text-amber-600 dark:text-amber-400",
      glow: "from-amber-500/10",
    },
    {
      title: "Completed",
      value: completedBookings,
      description: "Successfully completed",
      icon: CheckCircle2,
      iconStyle:
        "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
      glow: "from-emerald-500/10",
    },
    {
      title: "Total Spent",
      value: `৳${totalSpent.toLocaleString()}`,
      description: "Paid service amount",
      icon: CreditCard,
      iconStyle:
        "bg-violet-500/10 text-violet-600 dark:text-violet-400",
      glow: "from-violet-500/10",
    },
  ];

  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className={`group relative overflow-hidden rounded-2xl border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
          >
            {/* Background Glow */}
            <div
              className={`pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br ${item.glow} to-transparent blur-2xl`}
            />

            <div className="relative flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  {item.title}
                </p>

                <h2 className="mt-2 text-3xl font-bold tracking-tight">
                  {item.value}
                </h2>

                <div className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                  {item.description}
                </div>
              </div>

              <div
                className={`rounded-2xl p-3.5 transition-transform duration-300 group-hover:scale-110 ${item.iconStyle}`}
              >
                <Icon className="h-6 w-6" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CustomerStats;