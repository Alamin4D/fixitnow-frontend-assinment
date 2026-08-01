
import { getTechnicianBookings } from "../_actions/get-technician-bookings";
import TechnicianBookingsTable from "../_components/technician-bookings-table";



const TechnicianBookingsPage = async () => {
  const result = await getTechnicianBookings();

  return (
    <div className="p-6">
      <TechnicianBookingsTable
        bookings={result.data || []}
      />
    </div>
  );
};

export default TechnicianBookingsPage;