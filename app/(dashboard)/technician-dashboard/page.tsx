import {
  CalendarCheck,
  Clock,
  CheckCircle,
  DollarSign,
  UserCheck,
  BriefcaseBusiness,
} from "lucide-react";

import {
  Card,
  CardContent,
} from "@/components/ui/card";


const TechniciansDashboardPage = () => {

  const stats = [
    {
      title: "Total Bookings",
      value: "120",
      icon: CalendarCheck,
      color: "bg-blue-500",
    },
    {
      title: "Pending Requests",
      value: "08",
      icon: Clock,
      color: "bg-orange-500",
    },
    {
      title: "Completed Jobs",
      value: "95",
      icon: CheckCircle,
      color: "bg-green-500",
    },
    {
      title: "Total Earnings",
      value: "$8,500",
      icon: DollarSign,
      color: "bg-purple-500",
    },
  ];


  return (
    <div className="space-y-8 p-6">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">
          Technician Dashboard 👋
        </h1>

        <p className="text-muted-foreground">
          Manage your bookings, availability and earnings.
        </p>
      </div>


      {/* Stats */}
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

        {stats.map((item)=>{

          const Icon = item.icon;

          return (
            <Card
              key={item.title}
              className="transition hover:-translate-y-1 hover:shadow-lg"
            >
              <CardContent className="flex items-center justify-between p-6">

                <div>
                  <p className="text-sm text-muted-foreground">
                    {item.title}
                  </p>

                  <h2 className="mt-2 text-3xl font-bold">
                    {item.value}
                  </h2>
                </div>


                <div
                  className={`rounded-2xl p-3 text-white ${item.color}`}
                >
                  <Icon size={24}/>
                </div>

              </CardContent>
            </Card>
          );

        })}

      </div>



      {/* Quick Actions */}
      <div className="grid gap-5 md:grid-cols-3">

        <Card>
          <CardContent className="p-6">

            <UserCheck className="mb-3"/>

            <h3 className="font-semibold">
              Availability
            </h3>

            <p className="text-sm text-muted-foreground">
              Update your working schedule.
            </p>

          </CardContent>
        </Card>



        <Card>
          <CardContent className="p-6">

            <BriefcaseBusiness className="mb-3"/>

            <h3 className="font-semibold">
              Manage Services
            </h3>

            <p className="text-sm text-muted-foreground">
              Add or update your services.
            </p>

          </CardContent>
        </Card>



        <Card>
          <CardContent className="p-6">

            <CalendarCheck className="mb-3"/>

            <h3 className="font-semibold">
              Booking Requests
            </h3>

            <p className="text-sm text-muted-foreground">
              Review customer bookings.
            </p>

          </CardContent>
        </Card>

      </div>



      {/* Recent Bookings */}
      <Card>

        <CardContent className="p-6">

          <h2 className="mb-4 text-xl font-semibold">
            Recent Booking Requests
          </h2>


          <div className="space-y-4">

            <div className="flex justify-between border-b pb-3">

              <div>
                <p className="font-medium">
                  AC Repair Service
                </p>

                <p className="text-sm text-muted-foreground">
                  Customer: Mizan
                </p>
              </div>


              <span className="text-orange-500">
                Pending
              </span>

            </div>


            <div className="flex justify-between">

              <div>
                <p className="font-medium">
                  Electrical Repair
                </p>

                <p className="text-sm text-muted-foreground">
                  Customer: Rahim
                </p>
              </div>


              <span className="text-green-600">
                Completed
              </span>

            </div>


          </div>

        </CardContent>

      </Card>


    </div>
  );
};


export default TechniciansDashboardPage;