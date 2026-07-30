import BookingForm from "../../_components/BookingForm";


type Props = {
  params: Promise<{
    id: string;
  }>;
};

const BookingPage = async ({ params }: Props) => {
  const { id } = await params;

  return (
    <div className="container mx-auto max-w-2xl py-10 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Book Service
        </h1>

        <p className="text-muted-foreground mt-2">
          Fill in the booking details below.
        </p>
      </div>

      <BookingForm serviceId={id} />
    </div>
  );
};

export default BookingPage;