import { getCustomerBookings } from "./_actions/getCustomerBookings";
import CustomerStats from "./_components/CustomerStats";



const CustomerDashboardPage = async () => {

  const result = await getCustomerBookings();

  const bookings = result.data;


  return (
    <div className="space-y-6 p-6">

      <CustomerStats 
        bookings={bookings}
      />

    </div>
  );
};


export default CustomerDashboardPage;