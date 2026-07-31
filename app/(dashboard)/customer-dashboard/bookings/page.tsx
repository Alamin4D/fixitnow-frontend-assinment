import { getBookings } from "../_actions/get-bookings";
import BookingEmpty from "../_components/booking-empty";
import BookingsTable from "../_components/bookings-table";

const BookingsPage = async () => {
  const bookings = await getBookings();

  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            My Bookings
          </h1>

          <p className="text-muted-foreground">
            View and manage your service bookings.
          </p>
        </div>

        <div className="rounded-lg border bg-muted/40 px-4 py-2 text-sm">
          <span className="font-medium">
            Total Bookings:
          </span>{" "}
          {bookings.length}
        </div>
      </div>

      {bookings.length === 0 ? (
        <BookingEmpty
        //   title="No bookings yet"
        //   description="You haven't booked any services yet."
        //   actionLabel="Browse Services"
        //   actionHref="/services"
        />
      ) : (
        <BookingsTable bookings={bookings} />
      )}
    </section>
  );
};

export default BookingsPage;