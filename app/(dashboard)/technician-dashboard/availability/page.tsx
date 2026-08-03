import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AvailabilityTable from "../_components/availability-table";

const availabilityData = [
  {
    id: "1",
    day: "Monday",
    startTime: "09:00 AM",
    endTime: "05:00 PM",
    isAvailable: true,
  },
  {
    id: "2",
    day: "Tuesday",
    startTime: "10:00 AM",
    endTime: "06:00 PM",
    isAvailable: true,
  },
];

const AvailabilityPage = () => {
  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Availability</h1>
          <p className="text-muted-foreground">
            Manage your weekly working schedule.
          </p>
        </div>

        <Button>+ Add Availability</Button>
      </div>


      <Card>
        <CardHeader>
          <CardTitle>Availability Schedule</CardTitle>
        </CardHeader>

        <CardContent>
          <AvailabilityTable availabilities={availabilityData} />
        </CardContent>
      </Card>
    </div>
  );
};

export default AvailabilityPage;