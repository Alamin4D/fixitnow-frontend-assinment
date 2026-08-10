import { ArrowUpRight } from "lucide-react";

interface Booking {
  id: string;
  status: string;
  totalAmount: number;
}

interface CustomerBookingsTableProps {
  bookings: Booking[];
}

const CustomerBookingsTable = ({
  bookings,
}: CustomerBookingsTableProps) => {
  const recentBookings = bookings.slice(0, 6);

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "COMPLETED":
        return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400";

      case "REQUESTED":
      case "ACCEPTED":
        return "bg-amber-500/10 text-amber-600 dark:text-amber-400";

      case "CANCELLED":
      case "DECLINED":
        return "bg-red-500/10 text-red-600 dark:text-red-400";

      case "PAID":
      case "IN_PROGRESS":
        return "bg-blue-500/10 text-blue-600 dark:text-blue-400";

      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="overflow-hidden rounded-2xl border bg-card shadow-sm">
      <div className="flex items-center justify-between border-b p-6">
        <div>
          <h2 className="font-semibold">Recent Bookings</h2>

          <p className="mt-1 text-sm text-muted-foreground">
            Your latest service activity
          </p>
        </div>

        <button className="flex items-center gap-1 text-sm font-medium text-primary hover:underline">
          View all
          <ArrowUpRight className="h-4 w-4" />
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-muted/30">
            <tr className="border-b">
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Booking
              </th>

              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Status
              </th>

              <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Amount
              </th>
            </tr>
          </thead>

          <tbody>
            {recentBookings.length === 0 ? (
              <tr>
                <td
                  colSpan={3}
                  className="px-6 py-12 text-center text-sm text-muted-foreground"
                >
                  No bookings found.
                </td>
              </tr>
            ) : (
              recentBookings.map((booking) => (
                <tr
                  key={booking.id}
                  className="border-b last:border-0 transition-colors hover:bg-muted/20"
                >
                  <td className="px-6 py-5">
                    <div>
                      <p className="font-medium">
                        Booking #{booking.id.slice(0, 8)}
                      </p>

                      <p className="mt-1 text-xs text-muted-foreground">
                        Service booking
                      </p>
                    </div>
                  </td>

                  <td className="px-6 py-5">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${getStatusStyle(
                        booking.status
                      )}`}
                    >
                      {booking.status.replace("_", " ")}
                    </span>
                  </td>

                  <td className="px-6 py-5 text-right">
                    <span className="font-semibold">
                      $
                      {Number(
                        booking.totalAmount || 0
                      ).toLocaleString()}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerBookingsTable;