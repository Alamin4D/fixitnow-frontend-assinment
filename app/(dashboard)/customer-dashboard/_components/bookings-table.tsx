"use client";

import Link from "next/link";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

export type BookingStatus =
    | "REQUESTED"
    | "ACCEPTED"
    | "IN_PROGRESS"
    | "COMPLETED"
    | "CANCELLED";

export interface Booking {
    id: string;
    serviceName: string;
    technicianName: string;
    customerName: string;
    bookingDate: string;
    totalPrice: number;
    status: BookingStatus;
}

interface BookingsTableProps {
    bookings: Booking[];
    showCustomer?: boolean;
    showTechnician?: boolean;
}

const statusVariant = (status: BookingStatus) => {
    switch (status) {
        case "REQUESTED":
            return "outline";

        case "ACCEPTED":
            return "secondary";

        case "IN_PROGRESS":
            return "default";

        case "COMPLETED":
            return "default";

        case "CANCELLED":
            return "destructive";

        default:
            return "outline";
    }
};

export default function BookingsTable({
    bookings,
    showCustomer = false,
    showTechnician = true,
}: BookingsTableProps) {
    if (!bookings.length) {
        return (
            <div className="flex h-52 items-center justify-center rounded-xl border border-dashed">
                <p className="text-sm text-muted-foreground">
                    No bookings found.
                </p>
            </div>
        );
    }

    return (
        <div className="overflow-hidden rounded-xl border bg-background">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Service</TableHead>

                        {showCustomer && (
                            <TableHead>Customer</TableHead>
                        )}

                        {showTechnician && (
                            <TableHead>Technician</TableHead>
                        )}

                        <TableHead>Date</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">
                            Price
                        </TableHead>
                        <TableHead className="text-center">
                            Action
                        </TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {bookings.map((booking) => (
                        <TableRow key={booking.id}>
                            <TableCell className="font-medium">
                                {booking.serviceName}
                            </TableCell>

                            {showCustomer && (
                                <TableCell>
                                    {booking.customerName}
                                </TableCell>
                            )}

                            {showTechnician && (
                                <TableCell>
                                    {booking.technicianName}
                                </TableCell>
                            )}

                            <TableCell>
                                {new Date(
                                    booking.bookingDate
                                ).toLocaleDateString()}
                            </TableCell>

                            <TableCell>
                                <Badge
                                    variant={statusVariant(booking.status)}
                                >
                                    {booking.status}
                                </Badge>
                            </TableCell>

                            <TableCell className="text-right font-semibold">
                                ${booking.totalPrice}
                            </TableCell>

                            <TableCell className="text-center">
                                <Button
                                    asChild
                                    size="icon"
                                    variant="ghost"
                                >
                                    <Link href={`/customer-dashboard/bookings/${booking.id}`}>
                                        <Eye className="h-4 w-4" />
                                    </Link>
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}