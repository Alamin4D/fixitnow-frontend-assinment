import {
  Users,
  UserCog,
  BriefcaseBusiness,
  CalendarCheck,
  DollarSign,
  ArrowRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


const AdminDashboardPage = () => {

  const stats = [
    {
      title: "Total Users",
      value: "1,250",
      icon: Users,
      color: "bg-blue-500",
    },
    {
      title: "Technicians",
      value: "180",
      icon: UserCog,
      color: "bg-green-500",
    },
    {
      title: "Services",
      value: "65",
      icon: BriefcaseBusiness,
      color: "bg-purple-500",
    },
    {
      title: "Bookings",
      value: "3,420",
      icon: CalendarCheck,
      color: "bg-orange-500",
    },
    {
      title: "Revenue",
      value: "$24,500",
      icon: DollarSign,
      color: "bg-emerald-500",
    },
  ];


  return (
    <div className="space-y-8 p-6">

      {/* Header */}
      <section>
        <h1 className="text-3xl font-bold">
          Admin Dashboard 👋
        </h1>

        <p className="text-muted-foreground">
          Monitor users, technicians, services and platform activity.
        </p>
      </section>


      {/* Stats */}
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">

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



      {/* Management Cards */}
      <div className="grid gap-6 md:grid-cols-3">


        <Card>
          <CardHeader>
            <CardTitle>
              Manage Users
            </CardTitle>
          </CardHeader>

          <CardContent>
            <p className="mb-4 text-sm text-muted-foreground">
              View and manage customer accounts.
            </p>

            <Button className="w-full">
              Users
              <ArrowRight className="ml-2 h-4 w-4"/>
            </Button>
          </CardContent>
        </Card>



        <Card>
          <CardHeader>
            <CardTitle>
              Manage Technicians
            </CardTitle>
          </CardHeader>

          <CardContent>
            <p className="mb-4 text-sm text-muted-foreground">
              Approve and monitor technicians.
            </p>

            <Button className="w-full">
              Technicians
              <ArrowRight className="ml-2 h-4 w-4"/>
            </Button>
          </CardContent>
        </Card>



        <Card>
          <CardHeader>
            <CardTitle>
              Manage Services
            </CardTitle>
          </CardHeader>

          <CardContent>
            <p className="mb-4 text-sm text-muted-foreground">
              Add, edit and remove services.
            </p>

            <Button className="w-full">
              Services
              <ArrowRight className="ml-2 h-4 w-4"/>
            </Button>
          </CardContent>
        </Card>


      </div>



      {/* Recent Activity */}
      <Card>

        <CardHeader>
          <CardTitle>
            Recent Activity
          </CardTitle>
        </CardHeader>


        <CardContent className="space-y-4">

          <div className="flex justify-between border-b pb-3">
            <div>
              <p className="font-medium">
                New technician registered
              </p>

              <p className="text-sm text-muted-foreground">
                Waiting for approval
              </p>
            </div>

            <span className="text-orange-500">
              Pending
            </span>
          </div>


          <div className="flex justify-between">
            <div>
              <p className="font-medium">
                New booking created
              </p>

              <p className="text-sm text-muted-foreground">
                AC Repair Service
              </p>
            </div>

            <span className="text-green-600">
              Completed
            </span>
          </div>


        </CardContent>

      </Card>


    </div>
  );
};


export default AdminDashboardPage;