import { Activity, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const DashboardHeader = () => {
  return (
    <div className="relative overflow-hidden rounded-3xl border bg-gradient-to-br from-primary/10 via-background to-background p-6 shadow-sm md:p-8">
      <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <Badge
            variant="secondary"
            className="mb-4 rounded-full px-3 py-1"
          >
            <span className="mr-2 h-2 w-2 rounded-full bg-emerald-500" />
            Technician Portal
          </Badge>

          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Technician Dashboard
          </h1>

          <p className="mt-2 max-w-2xl text-sm text-muted-foreground md:text-base">
            Manage your bookings, monitor your performance, and keep
            track of your earnings from one place.
          </p>
        </div>

        <Button className="w-fit gap-2 rounded-xl">
          View Bookings
          <ArrowUpRight className="size-4" />
        </Button>
      </div>

      <div className="relative mt-6 flex items-center gap-2 text-xs text-muted-foreground">
        <Activity className="size-4 text-emerald-500" />
        Dashboard data is synced with your latest bookings
      </div>
    </div>
  );
};

export default DashboardHeader;