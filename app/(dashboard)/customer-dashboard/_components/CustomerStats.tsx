import {
    CalendarCheck,
    Clock,
    CheckCircle,
    CreditCard,
} from "lucide-react";

interface Booking {
    id: string;
    status:
    | "REQUESTED"
    | "ACCEPTED"
    | "DECLINED"
    | "PAID"
    | "IN_PROGRESS"
    | "COMPLETED"
    | "CANCELLED";
    totalAmount: number;
}

interface CustomerStatsProps {
    bookings: Booking[];
}


const CustomerStats = ({ bookings }: CustomerStatsProps) => {
    const totalBookings = bookings.length;

    const pendingBookings = bookings.filter(
        (booking) =>
            booking.status === "REQUESTED" ||
            booking.status === "ACCEPTED"
    ).length;

    const completedBookings = bookings.filter(
        (booking) => booking.status === "COMPLETED"
    ).length;

    const totalSpent = bookings
        .filter(
            (booking) =>
                booking.status === "PAID" ||
                booking.status === "COMPLETED"
        )
        .reduce(
            (total, booking) =>
                total + Number(booking.totalAmount || 0),
            0
        );


    const stats = [
        {
            title: "Total Bookings",
            value: totalBookings,
            icon: CalendarCheck,
            color: "bg-blue-500",
        },
        {
            title: "Pending",
            value: pendingBookings,
            icon: Clock,
            color: "bg-orange-500",
        },
        {
            title: "Completed",
            value: completedBookings,
            icon: CheckCircle,
            color: "bg-green-500",
        },
        {
            title: "Spent",
            value: `$${totalSpent}`,
            icon: CreditCard,
            color: "bg-purple-500",
        }
    ];


    return (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((item) => {
                const Icon = item.icon;

                return (
                    <div
                        key={item.title}
                        className="rounded-xl border bg-card p-6 shadow-sm"
                    >
                        <div className="flex items-center justify-between">

                            <div>
                                <p className="text-sm text-muted-foreground">
                                    {item.title}
                                </p>

                                <h2 className="mt-2 text-3xl font-bold">
                                    {item.value}
                                </h2>
                            </div>

                            <div
                                className={`rounded-xl p-3 text-white ${item.color}`}
                            >
                                <Icon size={24} />
                            </div>

                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default CustomerStats;