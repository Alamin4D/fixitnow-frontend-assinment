import { getCustomerBookings } from "./_actions/getCustomerBookings";
import CustomerBookingChart from "./_components/CustomerBookingChart";
import CustomerStats from "./_components/CustomerStats";
import CustomerBookingsTable from "./_components/Recent-booking";
import CustomerBookingStatus from "./_components/Status-pie";



const CustomerDashboardPage = async () => {

  const result = await getCustomerBookings();
  const bookings = result.data;


  return (
    <div className="space-y-6 p-6">
      <CustomerStats 
        bookings={bookings}
      />
      <div className="grid gap-6 lg:grid-cols-2">
    <CustomerBookingChart bookings={bookings} />

    <CustomerBookingStatus bookings={bookings} />
    <CustomerBookingsTable bookings={bookings} />
  </div>
    </div>
  );
};


export default CustomerDashboardPage;