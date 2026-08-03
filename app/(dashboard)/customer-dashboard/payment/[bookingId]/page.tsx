import PaymentSummary from "../_components/PaymentSummary";
import PaymentMethodSection from "../_components/PaymentMethodSection";
import { getBookingById } from "../../_actions/get-booking-by-id";

interface PageProps {
  params: Promise<{
    bookingId: string;
  }>;
}


const PaymentDetailsPage = async ({ params }: PageProps) => {
  const { bookingId } = await params;
  const booking = await getBookingById(bookingId);

  return (
    <div className="grid gap-6 lg:grid-cols-3">
    <div className="lg:col-span-2">
      <PaymentSummary booking={booking} />
    </div>

    <PaymentMethodSection bookingId={booking.id} />
  </div>
  );
};

export default PaymentDetailsPage;