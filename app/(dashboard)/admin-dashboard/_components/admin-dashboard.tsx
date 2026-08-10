"use client";

import { useEffect, useMemo, useState } from "react";
import {
    ArrowRight,
    ArrowUpRight,
    BriefcaseBusiness,
    CalendarCheck,
    DollarSign,
    Loader2,
    UserCog,
    Users,
} from "lucide-react";
import {
    Area,
    Bar,
    BarChart,
    CartesianGrid,
    Cell,
    Legend,
    Line,
    LineChart,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";



const API_URL =
    process.env.NEXT_PUBLIC_BACKEND_API_URL ||
    "http://localhost:5000";


type User = {
    id: string;
    name: string;
    email: string;
    role: "CUSTOMER" | "TECHNICIAN" | "ADMIN";
    status: string;
    phone: string | null;
    address: string | null;
    createdAt: string;
    updatedAt: string;

    technicianProfile: {
        id: string;
        location: string;
        rating: number;
        totalReviews: number;
        isAvailable: boolean;
    } | null;
};

type UsersApiResponse = {
    success: boolean;
    statusCode: number;
    message: string;

    data: {
        data: User[];

        meta: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
};


type Category = {
    id: string;
    name: string;
    description: string;
    icon: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;

    _count: {
        services: number;
    };
};

type CategoriesApiResponse = {
    success: boolean;
    statusCode: number;
    message: string;
    data: Category[];
};



type Booking = {
    id: string;
    customerId: string;
    technicianId: string;
    serviceId: string;
    status: string;
    scheduledDate: string;
    scheduledTime: string;
    address: string;
    notes: string;
    totalAmount: number;
    completedAt: string | null;
    cancelledAt: string | null;
    cancellationReason: string | null;
    createdAt: string;
    updatedAt: string;

    customer: {
        id: string;
        name: string;
        email: string;
    };

    technician: {
        id: string;
        userId: string;
        bio: string;
        experience: number;
        location: string;
        rating: number;
        totalReviews: number;
        isAvailable: boolean;
        profilePicture: string;

        user: {
            id: string;
            name: string;
            email: string;
        };
    };

    service: {
        id: string;
        title: string;
        description: string;
        price: number;
        duration: number;
        categoryId: string;
        technicianId: string;
        isActive: boolean;

        category: {
            id: string;
            name: string;
            description: string;
            icon: string;
            isActive: boolean;
        };
    };

    payment: {
        id: string;
        bookingId: string;
        userId: string;
        transactionId: string;
        amount: number;
        currency: string;
        method: string;
        provider: string;
        status: string;
        stripePaymentId: string;
        paidAt: string | null;
        createdAt: string;
        updatedAt: string;
    } | null;

    review: unknown | null;
};

type BookingsApiResponse = {
    success: boolean;
    statusCode: number;
    message: string;
    data: Booking[];
};



const AdminDashboard = () => {

    const [users, setUsers] = useState<User[]>([]);
    const [totalUsers, setTotalUsers] = useState(0);
    const [totalTechnicians, setTotalTechnicians] = useState(0);

    const [categories, setCategories] = useState<Category[]>([]);
    const [totalServices, setTotalServices] = useState(0);

    const [bookings, setBookings] = useState<Booking[]>([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");


    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                setLoading(true);
                setError("");

                const [usersResponse, categoriesResponse, bookingsResponse] =
                    await Promise.all([
                        fetch(`${API_URL}/api/admin/users`, {
                            credentials: "include",
                            cache: "no-store",
                        }),

                        fetch(`${API_URL}/api/admin/categories`, {
                            credentials: "include",
                            cache: "no-store",
                        }),

                        fetch(`${API_URL}/api/admin/bookings`, {
                            credentials: "include",
                            cache: "no-store",
                        }),
                    ]);


                if (!usersResponse.ok) {
                    throw new Error("Failed to fetch users");
                }

                if (!categoriesResponse.ok) {
                    throw new Error("Failed to fetch categories");
                }

                if (!bookingsResponse.ok) {
                    throw new Error("Failed to fetch bookings");
                }


                const usersResult: UsersApiResponse =
                    await usersResponse.json();

                const categoriesResult: CategoriesApiResponse =
                    await categoriesResponse.json();

                const bookingsResult: BookingsApiResponse =
                    await bookingsResponse.json();



                if (!usersResult.success) {
                    throw new Error(
                        usersResult.message || "Failed to fetch users"
                    );
                }

                if (!categoriesResult.success) {
                    throw new Error(
                        categoriesResult.message ||
                        "Failed to fetch categories"
                    );
                }

                if (!bookingsResult.success) {
                    throw new Error(
                        bookingsResult.message ||
                        "Failed to fetch bookings"
                    );
                }


                const userList = usersResult.data.data;

                setUsers(userList);

                // Total users comes from pagination meta
                setTotalUsers(usersResult.data.meta.total);

                // Current page technician count
                const technicianCount = userList.filter(
                    (user) => user.role === "TECHNICIAN"
                ).length;

                setTotalTechnicians(technicianCount);



                const categoryList = categoriesResult.data || [];

                setCategories(categoryList);

                const servicesCount = categoryList.reduce(
                    (total, category) =>
                        total + Number(category._count?.services || 0),
                    0
                );

                setTotalServices(servicesCount);


                setBookings(bookingsResult.data || []);
            } catch (error) {
                console.error(
                    "Admin dashboard error:",
                    error
                );

                setError(
                    error instanceof Error
                        ? error.message
                        : "Something went wrong"
                );
            } finally {
                setLoading(false);
            }
        };

        fetchDashboardData();
    }, []);


    const totalRevenue = useMemo(() => {
        return bookings.reduce((total, booking) => {
            if (booking.payment?.status === "COMPLETED") {
                return (
                    total +
                    Number(booking.payment.amount || 0)
                );
            }

            return total;
        }, 0);
    }, [bookings]);

    const bookingData = useMemo(() => {
        const monthlyMap = new Map<
            string,
            {
                month: string;
                bookings: number;
                revenue: number;
                sortDate: number;
            }
        >();

        bookings.forEach((booking) => {
            const date = new Date(booking.createdAt);

            const month = date.toLocaleString("en-US", {
                month: "short",
            });

            const year = date.getFullYear();

            const key = `${year}-${date.getMonth()}`;

            const existing = monthlyMap.get(key);

            if (existing) {
                existing.bookings += 1;

                if (
                    booking.payment?.status === "COMPLETED"
                ) {
                    existing.revenue += Number(
                        booking.payment.amount || 0
                    );
                }
            } else {
                monthlyMap.set(key, {
                    month: `${month} ${year}`,
                    bookings: 1,
                    revenue:
                        booking.payment?.status === "COMPLETED"
                            ? Number(
                                booking.payment.amount || 0
                            )
                            : 0,
                    sortDate: date.getTime(),
                });
            }
        });

        return Array.from(monthlyMap.values())
            .sort((a, b) => a.sortDate - b.sortDate)
            .slice(-6);
    }, [bookings]);


    const bookingStatusData = useMemo(() => {
        const statusMap: Record<string, number> = {};

        bookings.forEach((booking) => {
            const status = booking.status;

            statusMap[status] =
                (statusMap[status] || 0) + 1;
        });

        return Object.entries(statusMap).map(
            ([name, value]) => ({
                name,
                value,
            })
        );
    }, [bookings]);

    const recentBookings = useMemo(() => {
        return [...bookings]
            .sort(
                (a, b) =>
                    new Date(b.createdAt).getTime() -
                    new Date(a.createdAt).getTime()
            )
            .slice(0, 5);
    }, [bookings]);


    const stats = [
        {
            title: "Total Users",
            value: totalUsers.toLocaleString(),
            icon: Users,
            iconClass:
                "bg-blue-100 text-blue-600 dark:bg-blue-950",
        },

        {
            title: "Technicians",
            value: totalTechnicians.toLocaleString(),
            icon: UserCog,
            iconClass:
                "bg-green-100 text-green-600 dark:bg-green-950",
        },

        {
            title: "Services",
            value: totalServices.toLocaleString(),
            icon: BriefcaseBusiness,
            iconClass:
                "bg-purple-100 text-purple-600 dark:bg-purple-950",
        },

        {
            title: "Bookings",
            value: bookings.length.toLocaleString(),
            icon: CalendarCheck,
            iconClass:
                "bg-orange-100 text-orange-600 dark:bg-orange-950",
        },

        {
            title: "Revenue",
            value: `$${totalRevenue.toLocaleString()}`,
            icon: DollarSign,
            iconClass:
                "bg-emerald-100 text-emerald-600 dark:bg-emerald-950",
        },
    ];


    const chartColors = [
        "#3B82F6", // Blue
        "#8B5CF6", // Violet
        "#10B981", // Emerald
        "#F59E0B", // Amber
    ];


    if (loading) {
        return (
            <div className="flex min-h-[500px] items-center justify-center">
                <div className="flex flex-col items-center gap-3">
                    <Loader2 className="h-8 w-8 animate-spin text-primary" />

                    <p className="text-sm text-muted-foreground">
                        Loading dashboard...
                    </p>
                </div>
            </div>
        );
    }


    if (error) {
        return (
            <Card>
                <CardContent className="flex min-h-[350px] flex-col items-center justify-center gap-4">
                    <div className="text-center">
                        <h3 className="font-semibold text-destructive">
                            Failed to load dashboard
                        </h3>

                        <p className="mt-1 text-sm text-muted-foreground">
                            {error}
                        </p>
                    </div>

                    <Button
                        onClick={() =>
                            window.location.reload()
                        }
                    >
                        Try Again
                    </Button>
                </CardContent>
            </Card>
        );
    }


    return (
        <div className="space-y-8">

            <section className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                        Admin Dashboard
                    </h1>

                    <p className="mt-1 text-sm text-muted-foreground sm:text-base">
                        Monitor users, technicians, services,
                        bookings and platform revenue.
                    </p>
                </div>

                <Badge
                    variant="secondary"
                    className="w-fit px-3 py-1"
                >
                    Live Data
                </Badge>
            </section>


            <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                {stats.map((stat) => {
                    const Icon = stat.icon;

                    return (
                        <Card
                            key={stat.title}
                            className="group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >
                            <CardContent className="p-5">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-muted-foreground">
                                            {stat.title}
                                        </p>

                                        <h2 className="mt-2 text-2xl font-bold tracking-tight">
                                            {stat.value}
                                        </h2>
                                    </div>

                                    <div
                                        className={`rounded-xl p-3 transition-transform duration-300 group-hover:scale-110 ${stat.iconClass}`}
                                    >
                                        <Icon className="h-5 w-5" />
                                    </div>
                                </div>

                                <div className="mt-4 flex items-center gap-1 text-xs text-muted-foreground">
                                    <ArrowUpRight className="h-3.5 w-3.5 text-green-600" />

                                    <span className="font-semibold text-green-600">
                                        Live
                                    </span>

                                    <span>from database</span>
                                </div>
                            </CardContent>
                        </Card>
                    );
                })}
            </section>



            <section className="grid gap-6 lg:grid-cols-7">
                <Card className="overflow-hidden border-0 bg-gradient-to-br from-background to-muted/30 shadow-sm lg:col-span-4">

                    <CardHeader className="border-b bg-background/60 px-6 py-5 backdrop-blur">

                        <div className="flex items-center justify-between">

                            <div>
                                <CardTitle className="text-lg font-semibold">
                                    Booking Overview
                                </CardTitle>

                                <p className="mt-1 text-sm text-muted-foreground">
                                    Monthly booking activity
                                </p>
                            </div>

                            <div className="rounded-xl bg-blue-100 px-3 py-2 text-xs font-semibold text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                                Bookings
                            </div>

                        </div>

                    </CardHeader>


                    <CardContent className="p-6">

                        {bookingData.length === 0 ? (

                            <div className="flex h-[330px] items-center justify-center">

                                <div className="text-center">

                                    <CalendarCheck className="mx-auto h-10 w-10 text-muted-foreground/40" />

                                    <p className="mt-3 text-sm text-muted-foreground">
                                        No booking data available.
                                    </p>

                                </div>

                            </div>

                        ) : (

                            <div className="h-[330px] w-full">

                                <ResponsiveContainer
                                    width="100%"
                                    height="100%"
                                >

                                    <BarChart
                                        data={bookingData}
                                        margin={{
                                            top: 10,
                                            right: 10,
                                            left: -20,
                                            bottom: 5,
                                        }}
                                        barCategoryGap="25%"
                                    >

                                        <defs>

                                            <linearGradient
                                                id="bookingGradient"
                                                x1="0"
                                                y1="0"
                                                x2="0"
                                                y2="1"
                                            >
                                                <stop
                                                    offset="0%"
                                                    stopColor="#3B82F6"
                                                    stopOpacity={1}
                                                />

                                                <stop
                                                    offset="100%"
                                                    stopColor="#6366F1"
                                                    stopOpacity={0.75}
                                                />
                                            </linearGradient>

                                        </defs>


                                        <CartesianGrid
                                            strokeDasharray="4 4"
                                            vertical={false}
                                            className="stroke-muted/50"
                                        />


                                        <XAxis
                                            dataKey="month"
                                            axisLine={false}
                                            tickLine={false}
                                            tick={{
                                                fontSize: 12,
                                            }}
                                            tickMargin={10}
                                        />


                                        <YAxis
                                            allowDecimals={false}
                                            axisLine={false}
                                            tickLine={false}
                                            tick={{
                                                fontSize: 12,
                                            }}
                                            tickMargin={8}
                                        />


                                        <Tooltip
                                            cursor={{
                                                fill: "hsl(var(--muted))",
                                                opacity: 0.35,
                                            }}
                                            contentStyle={{
                                                borderRadius: "12px",
                                                border: "1px solid hsl(var(--border))",
                                                backgroundColor:
                                                    "hsl(var(--background))",
                                                boxShadow:
                                                    "0 10px 30px rgba(0,0,0,0.08)",
                                            }}
                                            labelStyle={{
                                                fontWeight: 600,
                                                marginBottom: 4,
                                            }}
                                        />


                                        <Legend
                                            verticalAlign="top"
                                            align="right"
                                            height={30}
                                            iconType="circle"
                                            wrapperStyle={{
                                                fontSize: "12px",
                                            }}
                                        />


                                        <Bar
                                            dataKey="bookings"
                                            name="Bookings"
                                            fill="url(#bookingGradient)"
                                            radius={[8, 8, 3, 3]}
                                            maxBarSize={42}
                                        />

                                    </BarChart>

                                </ResponsiveContainer>

                            </div>

                        )}

                    </CardContent>

                </Card>

                <Card className="overflow-hidden border-0 bg-gradient-to-br from-background to-muted/30 shadow-sm lg:col-span-3">

                    <CardHeader className="border-b bg-background/60 px-6 py-5 backdrop-blur">

                        <div className="flex items-center justify-between">

                            <div>

                                <CardTitle className="text-lg font-semibold">
                                    Booking Status
                                </CardTitle>

                                <p className="mt-1 text-sm text-muted-foreground">
                                    Current booking distribution
                                </p>

                            </div>


                            <div className="rounded-xl bg-violet-100 px-3 py-2 text-xs font-semibold text-violet-600 dark:bg-violet-950 dark:text-violet-400">
                                Overview
                            </div>

                        </div>

                    </CardHeader>


                    <CardContent className="p-6">

                        {bookingStatusData.length === 0 ? (

                            <div className="flex h-[330px] items-center justify-center">

                                <div className="text-center">

                                    <CalendarCheck className="mx-auto h-10 w-10 text-muted-foreground/40" />

                                    <p className="mt-3 text-sm text-muted-foreground">
                                        No booking status data available.
                                    </p>

                                </div>

                            </div>

                        ) : (

                            <div className="relative h-[330px] w-full">

                                <ResponsiveContainer
                                    width="100%"
                                    height="100%"
                                >

                                    <PieChart>

                                        <Pie
                                            data={bookingStatusData}
                                            cx="50%"
                                            cy="45%"
                                            innerRadius={72}
                                            outerRadius={105}
                                            paddingAngle={5}
                                            cornerRadius={6}
                                            dataKey="value"
                                            stroke="hsl(var(--background))"
                                            strokeWidth={3}
                                        >

                                            {bookingStatusData.map(
                                                (entry, index) => (

                                                    <Cell
                                                        key={`cell-${entry.name}`}
                                                        fill={
                                                            chartColors[
                                                            index %
                                                            chartColors.length
                                                            ]
                                                        }
                                                    />

                                                )
                                            )}

                                        </Pie>


                                        <Tooltip
                                            contentStyle={{
                                                borderRadius: "12px",
                                                border: "1px solid hsl(var(--border))",
                                                backgroundColor:
                                                    "hsl(var(--background))",
                                                boxShadow:
                                                    "0 10px 30px rgba(0,0,0,0.08)",
                                            }}
                                        />


                                        <Legend
                                            verticalAlign="bottom"
                                            height={42}
                                            iconType="circle"
                                            wrapperStyle={{
                                                fontSize: "12px",
                                            }}
                                        />

                                    </PieChart>

                                </ResponsiveContainer>


                                {/* Center Content */}

                                <div className="pointer-events-none absolute left-1/2 top-[45%] flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">

                                    <span className="text-3xl font-bold tracking-tight">
                                        {bookings.length.toLocaleString()}
                                    </span>

                                    <span className="mt-1 text-xs font-medium text-muted-foreground">
                                        Total Bookings
                                    </span>

                                </div>

                            </div>

                        )}

                    </CardContent>

                </Card>

            </section>





            <Card className="overflow-hidden border-0 bg-gradient-to-br from-background to-muted/30 shadow-sm">

                {/* Header */}

                <CardHeader className="border-b bg-background/60 px-6 py-5 backdrop-blur">

                    <div className="flex items-center justify-between gap-4">

                        <div>

                            <CardTitle className="text-lg font-semibold">
                                Revenue Overview
                            </CardTitle>

                            <p className="mt-1 text-sm text-muted-foreground">
                                Revenue generated from completed payments
                            </p>

                        </div>


                        {/* Revenue Badge */}

                        <div className="flex items-center gap-2 rounded-xl bg-emerald-100 px-3 py-2 text-xs font-semibold text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">

                            <DollarSign className="h-3.5 w-3.5" />

                            Revenue

                        </div>

                    </div>

                </CardHeader>


                {/* Content */}

                <CardContent className="p-6">

                    {bookingData.length === 0 ? (

                        <div className="flex h-[330px] items-center justify-center">

                            <div className="text-center">

                                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-muted">

                                    <DollarSign className="h-6 w-6 text-muted-foreground/50" />

                                </div>

                                <p className="mt-3 text-sm text-muted-foreground">
                                    No revenue data available.
                                </p>

                            </div>

                        </div>

                    ) : (

                        <div className="h-[330px] w-full">

                            <ResponsiveContainer
                                width="100%"
                                height="100%"
                            >

                                <LineChart
                                    data={bookingData}
                                    margin={{
                                        top: 15,
                                        right: 15,
                                        left: -15,
                                        bottom: 5,
                                    }}
                                >

                                    {/* =========================================
                Gradient
            ========================================= */}

                                    <defs>

                                        <linearGradient
                                            id="revenueLineGradient"
                                            x1="0"
                                            y1="0"
                                            x2="1"
                                            y2="0"
                                        >

                                            <stop
                                                offset="0%"
                                                stopColor="#10B981"
                                            />

                                            <stop
                                                offset="50%"
                                                stopColor="#14B8A6"
                                            />

                                            <stop
                                                offset="100%"
                                                stopColor="#3B82F6"
                                            />

                                        </linearGradient>


                                        <linearGradient
                                            id="revenueAreaGradient"
                                            x1="0"
                                            y1="0"
                                            x2="0"
                                            y2="1"
                                        >

                                            <stop
                                                offset="0%"
                                                stopColor="#10B981"
                                                stopOpacity={0.20}
                                            />

                                            <stop
                                                offset="100%"
                                                stopColor="#10B981"
                                                stopOpacity={0}
                                            />

                                        </linearGradient>

                                    </defs>


                                    {/* =========================================
                Grid
            ========================================= */}

                                    <CartesianGrid
                                        strokeDasharray="4 4"
                                        vertical={false}
                                        className="stroke-muted/50"
                                    />


                                    {/* =========================================
                X Axis
            ========================================= */}

                                    <XAxis
                                        dataKey="month"
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{
                                            fontSize: 12,
                                        }}
                                        tickMargin={10}
                                    />


                                    {/* =========================================
                Y Axis
            ========================================= */}

                                    <YAxis
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{
                                            fontSize: 12,
                                        }}
                                        tickMargin={8}
                                        tickFormatter={(value) =>
                                            `$${Number(value).toLocaleString()}`
                                        }
                                    />


                                    {/* =========================================
                Tooltip
            ========================================= */}

                                    <Tooltip
                                        cursor={{
                                            stroke: "#10B981",
                                            strokeWidth: 1,
                                            strokeDasharray: "4 4",
                                        }}
                                        formatter={(value) =>
                                            `$${Number(value).toLocaleString()}`
                                        }
                                        contentStyle={{
                                            borderRadius: "14px",
                                            border:
                                                "1px solid hsl(var(--border))",
                                            backgroundColor:
                                                "hsl(var(--background))",
                                            boxShadow:
                                                "0 12px 35px rgba(0,0,0,0.10)",
                                            padding: "10px 14px",
                                        }}
                                        labelStyle={{
                                            fontWeight: 600,
                                            marginBottom: 4,
                                        }}
                                    />


                                    {/* =========================================
                Area
            ========================================= */}

                                    <Area
                                        type="monotone"
                                        dataKey="revenue"
                                        stroke="none"
                                        fill="url(#revenueAreaGradient)"
                                    />


                                    {/* =========================================
                Revenue Line
            ========================================= */}

                                    <Line
                                        type="monotone"
                                        dataKey="revenue"
                                        name="Revenue"
                                        stroke="url(#revenueLineGradient)"
                                        strokeWidth={3}
                                        dot={{
                                            r: 4,
                                            fill: "#10B981",
                                            stroke:
                                                "hsl(var(--background))",
                                            strokeWidth: 2,
                                        }}
                                        activeDot={{
                                            r: 7,
                                            fill: "#10B981",
                                            stroke:
                                                "hsl(var(--background))",
                                            strokeWidth: 3,
                                        }}
                                    />

                                </LineChart>

                            </ResponsiveContainer>

                        </div>

                    )}

                </CardContent>

            </Card>



            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between gap-4">
                        <div>
                            <CardTitle>
                                Recent Bookings
                            </CardTitle>

                            <p className="mt-1 text-sm text-muted-foreground">
                                Latest booking activity
                            </p>
                        </div>

                        <Button
                            variant="ghost"
                            size="sm"
                        >
                            View All
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </CardHeader>

                <CardContent>
                    {recentBookings.length === 0 ? (
                        <div className="flex h-[200px] items-center justify-center text-sm text-muted-foreground">
                            No bookings found.
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full min-w-[850px] text-sm">
                                <thead>
                                    <tr className="border-b text-left text-muted-foreground">
                                        <th className="px-4 py-3 font-medium">
                                            Booking
                                        </th>

                                        <th className="px-4 py-3 font-medium">
                                            Customer
                                        </th>

                                        <th className="px-4 py-3 font-medium">
                                            Service
                                        </th>

                                        <th className="px-4 py-3 font-medium">
                                            Technician
                                        </th>

                                        <th className="px-4 py-3 font-medium">
                                            Amount
                                        </th>

                                        <th className="px-4 py-3 font-medium">
                                            Status
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {recentBookings.map(
                                        (booking) => (
                                            <tr
                                                key={booking.id}
                                                className="border-b last:border-0 hover:bg-muted/50"
                                            >
                                                <td className="px-4 py-4 font-medium">
                                                    #{booking.id.slice(0, 8)}
                                                </td>

                                                <td className="px-4 py-4">
                                                    <div>
                                                        <p className="font-medium">
                                                            {booking.customer.name}
                                                        </p>

                                                        <p className="text-xs text-muted-foreground">
                                                            {booking.customer.email}
                                                        </p>
                                                    </div>
                                                </td>

                                                <td className="px-4 py-4">
                                                    {booking.service.title}
                                                </td>

                                                <td className="px-4 py-4">
                                                    {
                                                        booking.technician
                                                            .user.name
                                                    }
                                                </td>

                                                <td className="px-4 py-4 font-medium">
                                                    $
                                                    {Number(
                                                        booking.payment
                                                            ?.amount ??
                                                        booking.totalAmount
                                                    ).toLocaleString()}
                                                </td>

                                                <td className="px-4 py-4">
                                                    <Badge variant="outline">
                                                        {booking.status}
                                                    </Badge>
                                                </td>
                                            </tr>
                                        )
                                    )}
                                </tbody>
                            </table>
                        </div>
                    )}
                </CardContent>
            </Card>


            <section className="grid gap-6 md:grid-cols-3">
                {/* Total Bookings */}

                <Card>
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-muted-foreground">
                                    Total Bookings
                                </p>

                                <p className="mt-2 text-2xl font-bold">
                                    {bookings.length}
                                </p>
                            </div>

                            <CalendarCheck className="h-8 w-8 text-primary" />
                        </div>
                    </CardContent>
                </Card>

                {/* Paid Bookings */}

                <Card>
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-muted-foreground">
                                    Paid Bookings
                                </p>

                                <p className="mt-2 text-2xl font-bold">
                                    {
                                        bookings.filter(
                                            (booking) =>
                                                booking.payment
                                                    ?.status === "COMPLETED"
                                        ).length
                                    }
                                </p>
                            </div>

                            <DollarSign className="h-8 w-8 text-green-600" />
                        </div>
                    </CardContent>
                </Card>

                {/* Pending Bookings */}

                <Card>
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-muted-foreground">
                                    Pending Bookings
                                </p>

                                <p className="mt-2 text-2xl font-bold">
                                    {
                                        bookings.filter(
                                            (booking) =>
                                                booking.status ===
                                                "PENDING"
                                        ).length
                                    }
                                </p>
                            </div>

                            <CalendarCheck className="h-8 w-8 text-orange-500" />
                        </div>
                    </CardContent>
                </Card>
            </section>
        </div>
    );
};

export default AdminDashboard;
