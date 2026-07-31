
import { getBookingById } from "../../_actions/get-booking-by-id";
import BookingDetails from "../../_components/booking-details";


interface Props {
    params: Promise<{
        id: string;
    }>;
}

const BookingsPageById = async ({ params }: Props) => {
    const { id } = await params;

    const booking = await getBookingById(id);

    return <BookingDetails booking={booking} />;
};

export default BookingsPageById;