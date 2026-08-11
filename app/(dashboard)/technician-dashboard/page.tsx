
import getTechnicianDashboard from "./_actions/getTechnicianDashboard";
import DashboardCharts from "./_components/dashboard-charts";
import DashboardHeader from "./_components/dashboard-header";
import DashboardStats from "./_components/dashboard-stats";
import RecentBookingsTable from "./_components/recent-bookings-table";


const TechniciansDashboardPage = async () => {
  const dashboard = await getTechnicianDashboard();

  return (
    <div className="space-y-8 p-4 md:p-6 lg:p-8">
      <DashboardHeader />

      <DashboardStats stats={dashboard.stats} />

      <DashboardCharts
        bookingStatus={dashboard.bookingStatus}
        monthlyAnalytics={dashboard.monthlyAnalytics}
      />

      <RecentBookingsTable
        bookings={dashboard.recentBookings}
      />
    </div>
  );
};

export default TechniciansDashboardPage;