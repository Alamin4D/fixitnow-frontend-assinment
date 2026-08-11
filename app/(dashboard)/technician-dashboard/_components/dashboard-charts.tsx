import BookingStatusChart from "./booking-status-chart";
import BookingsChart from "./bookings-chart";
import EarningsChart from "./earnings-chart";


interface DashboardChartsProps {
  bookingStatus: {
    status: string;
    count: number;
  }[];

  monthlyAnalytics: {
    key: string;
    month: string;
    bookings: number;
    earnings: number;
  }[];
}

const DashboardCharts = ({
  bookingStatus,
  monthlyAnalytics,
}: DashboardChartsProps) => {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-3">
        <EarningsChart
          data={monthlyAnalytics}
        />

        <BookingStatusChart
          data={bookingStatus}
        />
      </div>

      <BookingsChart
        data={monthlyAnalytics}
      />
    </div>
  );
};

export default DashboardCharts;