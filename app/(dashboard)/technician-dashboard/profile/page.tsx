

import {
  CalendarCheck,
  CircleDollarSign,
  Clock3,
  CheckCircle2,
} from "lucide-react";
import { getTechnicianProfile } from "../_actions/get-technician-profile";
import { getTechnicianAvailability } from "../_actions/get-technician-availability";
import { getTechnicianBookings } from "../_actions/get-technician-bookings";
import TechnicianStatsCard from "../_components/TechnicianStatsCard";
import TechnicianProfileCard from "../_components/TechnicianProfileCard";
import TechnicianAvailabilityCard from "../_components/TechnicianAvailabilityCard";
import TechnicianBookingsTable from "../_components/TechnicianBookingsTable";

export const dynamic = "force-dynamic";

const TechnicianDashboardPage = async () => {
  const [profileResult, availabilityResult, bookingsResult] =
    await Promise.all([
      getTechnicianProfile(),
      getTechnicianAvailability(),
      getTechnicianBookings(),
    ]);

  const bookings = bookingsResult.data ?? [];

  const totalBookings = bookings.length;

  const pendingBookings = bookings.filter(
    (booking: any) => booking.status === "REQUESTED"
  ).length;

  const completedBookings = bookings.filter(
    (booking: any) => booking.status === "COMPLETED"
  ).length;

  const totalEarnings = bookings
    .filter((booking: any) => booking.status === "COMPLETED")
    .reduce(
      (sum: number, booking: any) => sum + (booking.service?.price ?? 0),
      0
    );

  return (
    <div className="space-y-8 p-6">
      <div>
        <h1 className="text-3xl font-bold">Technician Dashboard</h1>
        <p className="text-muted-foreground">
          Manage your profile, bookings, and availability.
        </p>
      </div>

      {/* <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <TechnicianStatsCard
          title="Total Bookings"
          value={totalBookings}
          icon={CalendarCheck}
        />

        <TechnicianStatsCard
          title="Pending"
          value={pendingBookings}
          icon={Clock3}
        />

        <TechnicianStatsCard
          title="Completed"
          value={completedBookings}
          icon={CheckCircle2}
        />

        <TechnicianStatsCard
          title="Total Earnings"
          value={`{totalEarnings}`}
          icon={CircleDollarSign}
        />
      </div> */}

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <TechnicianProfileCard
            profile={profileResult.data}
          />
        </div>

        <div className="lg:col-span-2">
          <TechnicianAvailabilityCard
            availability={availabilityResult.data ?? []}
          />
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-xl font-semibold">Recent Bookings</h2>

        <TechnicianBookingsTable bookings={bookings} />
      </div>
    </div>
  );
};

export default TechnicianDashboardPage;