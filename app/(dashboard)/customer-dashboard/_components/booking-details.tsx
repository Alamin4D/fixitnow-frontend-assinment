"use client";

import Link from "next/link";
import {
    ArrowLeft,
    CalendarDays,
    Clock3,
    DollarSign,
    MapPin,
    NotebookText,
    User,
    Wrench,
} from "lucide-react";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { cancelBooking } from "../_actions/cancel-booking";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import BookingStatusBadge from "./booking-status-badge";

interface BookingDetailsProps {
    booking: {
        id: string;
        serviceName: string;
        customerName: string;
        technicianName: string;
        bookingDate: string;
        bookingTime: string;
        totalPrice: number;
        status: string;
        address: string;
        notes?: string;

        cancelledAt?: string | null;
        cancellationReason?: string | null;
    };
}

export default function BookingDetails({
    booking,
}: BookingDetailsProps) {
    const router = useRouter();

    const [isPending, startTransition] = useTransition();

    const handleCancelBooking = () => {
        startTransition(async () => {
            try {
                await cancelBooking(booking.id);

                toast.success("Booking cancelled successfully.");

                router.push("/customer-dashboard/bookings");
                router.refresh();
            } catch (error) {
                toast.error(
                    error instanceof Error
                        ? error.message
                        : "Failed to cancel booking."
                );
            }
        });
    };
    return (
        <div className="mx-auto max-w-6xl space-y-8">
            {/* Header */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <Button asChild variant="ghost" className="mb-3 px-0">
                        <Link href="/customer-dashboard/bookings">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Bookings
                        </Link>
                    </Button>

                    <h1 className="text-3xl font-bold">Booking Details</h1>

                    <p className="text-muted-foreground">
                        Review all information about this booking.
                    </p>
                </div>

                <BookingStatusBadge status={booking.status} />
            </div>

            {/* Cards */}
            <div className="grid gap-6 md:grid-cols-2">
                <InfoCard
                    icon={<Wrench className="h-5 w-5" />}
                    title="Service"
                    value={booking.serviceName}
                />

                <InfoCard
                    icon={<DollarSign className="h-5 w-5" />}
                    title="Total Price"
                    value={`$${booking.totalPrice}`}
                />

                <InfoCard
                    icon={<User className="h-5 w-5" />}
                    title="Customer"
                    value={booking.customerName}
                />

                <InfoCard
                    icon={<User className="h-5 w-5" />}
                    title="Technician"
                    value={booking.technicianName}
                />
            </div>

            {/* Schedule */}
            <Card>
                <CardContent className="p-6">
                    <h2 className="mb-5 text-xl font-semibold">
                        Booking Schedule
                    </h2>

                    <div className="relative ml-3 border-l pl-8">
                        <TimelineItem
                            icon={<CalendarDays className="h-4 w-4" />}
                            title="Date"
                            value={new Date(
                                booking.bookingDate
                            ).toLocaleDateString()}
                        />

                        <TimelineItem
                            icon={<Clock3 className="h-4 w-4" />}
                            title="Time"
                            value={booking.bookingTime}
                        />

                        <TimelineItem
                            icon={<MapPin className="h-4 w-4" />}
                            title="Service Address"
                            value={booking.address}
                            last
                        />
                    </div>
                </CardContent>
            </Card>

            {/* Notes */}
            <Card>
                <CardContent className="p-6">
                    <div className="mb-4 flex items-center gap-2">
                        <NotebookText className="h-5 w-5 text-primary" />

                        <h2 className="text-xl font-semibold">
                            Additional Notes
                        </h2>
                    </div>

                    <Separator className="mb-4" />

                    <p className="leading-7 text-muted-foreground">
                        {booking.notes || "No additional notes provided."}
                    </p>
                </CardContent>
            </Card>

            {/* Footer */}
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button variant="destructive">
                        Cancel Booking
                    </Button>
                </AlertDialogTrigger>

                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>
                            Cancel Booking?
                        </AlertDialogTitle>

                        <AlertDialogDescription>
                            This action cannot be undone. Your booking
                            will be cancelled and the technician will be
                            notified.
                        </AlertDialogDescription>
                    </AlertDialogHeader>

                    <AlertDialogFooter>
                        <AlertDialogCancel>
                            Keep Booking
                        </AlertDialogCancel>

                        <AlertDialogAction
                            onClick={handleCancelBooking}
                            disabled={isPending}
                        >
                            {isPending
                                ? "Cancelling..."
                                : "Yes, Cancel"}
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
}

function InfoCard({
    icon,
    title,
    value,
}: {
    icon: React.ReactNode;
    title: string;
    value: string;
}) {
    return (
        <Card className="transition-shadow hover:shadow-md">
            <CardContent className="flex items-center gap-4 p-6">
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                    {icon}
                </div>

                <div>
                    <p className="text-sm text-muted-foreground">
                        {title}
                    </p>

                    <h3 className="text-lg font-semibold">
                        {value}
                    </h3>
                </div>
            </CardContent>
        </Card>
    );
}

function TimelineItem({
    icon,
    title,
    value,
    last = false,
}: {
    icon: React.ReactNode;
    title: string;
    value: string;
    last?: boolean;
}) {
    return (
        <div
            className={`relative ${last ? "" : "pb-8"
                }`}
        >
            <div className="absolute -left-[42px] flex h-8 w-8 items-center justify-center rounded-full border bg-background">
                {icon}
            </div>

            <p className="text-sm text-muted-foreground">
                {title}
            </p>

            <p className="font-medium">{value}</p>
        </div>
    );
}