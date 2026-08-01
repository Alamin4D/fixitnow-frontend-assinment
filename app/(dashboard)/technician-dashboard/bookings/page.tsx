export const dynamic = "force-dynamic";

import { getTechnicianBookings } from "../_actions/get-technician-bookings";
import TechnicianBookingsTable from "../_components/technician-bookings-table";

export default async function TechnicianBookingsPage() {
  const result = await getTechnicianBookings();

  return (
    <TechnicianBookingsTable bookings={result.data ?? []} />
  );
}