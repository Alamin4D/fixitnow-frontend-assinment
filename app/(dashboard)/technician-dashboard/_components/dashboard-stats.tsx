import {
  CalendarCheck,
  CheckCircle2,
  Clock3,
  DollarSign,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

interface DashboardStatsProps {
  stats: {
    totalBookings: number;
    pendingRequests: number;
    completedJobs: number;
    totalEarnings: number;
  };
}

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
};

const DashboardStats = ({ stats }: DashboardStatsProps) => {
  const items = [
    {
      title: "Total Bookings",
      value: stats.totalBookings.toLocaleString(),
      description: "All service requests",
      icon: CalendarCheck,
      iconClass: "bg-blue-500/10 text-blue-600",
    },
    {
      title: "Pending Requests",
      value: stats.pendingRequests.toLocaleString(),
      description: "Waiting for your action",
      icon: Clock3,
      iconClass: "bg-orange-500/10 text-orange-600",
    },
    {
      title: "Completed Jobs",
      value: stats.completedJobs.toLocaleString(),
      description: "Successfully completed",
      icon: CheckCircle2,
      iconClass: "bg-emerald-500/10 text-emerald-600",
    },
    {
      title: "Total Earnings",
      value: formatCurrency(stats.totalEarnings),
      description: "From completed jobs",
      icon: DollarSign,
      iconClass: "bg-violet-500/10 text-violet-600",
    },
  ];

  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <Card
            key={item.title}
            className="group relative overflow-hidden border-border/50 bg-card/80 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-150" />

            <CardContent className="relative p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {item.title}
                  </p>

                  <h2 className="mt-3 text-3xl font-bold tracking-tight">
                    {item.value}
                  </h2>

                  <p className="mt-2 text-xs text-muted-foreground">
                    {item.description}
                  </p>
                </div>

                <div className={`rounded-2xl p-3 ${item.iconClass}`}>
                  <Icon className="size-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default DashboardStats;