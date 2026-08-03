"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export type BookingStatus =
    | "REQUESTED"
    | "ACCEPTED"
    | "IN_PROGRESS"
    | "COMPLETED"
    | "CANCELLED";

interface BookingStatusBadgeProps {
    status: BookingStatus | string;
    className?: string;
}


const statusConfig: Record<
    BookingStatus,
    {
        label: string;
        className: string;
    }> = {
    REQUESTED: {
        label: "Pending",
        className:
            "border-yellow-200 bg-yellow-100 text-yellow-800 hover:bg-yellow-100",
    },
    ACCEPTED: {
        label: "Accepted",
        className:
            "border-blue-200 bg-blue-100 text-blue-800 hover:bg-blue-100",
    },
    IN_PROGRESS: {
        label: "In Progress",
        className:
            "border-indigo-200 bg-indigo-100 text-indigo-800 hover:bg-indigo-100",
    },
    COMPLETED: {
        label: "Completed",
        className:
            "border-green-200 bg-green-100 text-green-800 hover:bg-green-100",
    },
    CANCELLED: {
        label: "Cancelled",
        className:
            "border-red-200 bg-red-100 text-red-800 hover:bg-red-100",
    },
};

export default function BookingStatusBadge({
    status,
    className,
}: BookingStatusBadgeProps) {
    const config =
        statusConfig[status as BookingStatus] ?? {
            label: status,
            className:
                "border-gray-200 bg-gray-100 text-gray-700 hover:bg-gray-100",
        };

    return (
        <Badge
            variant="outline"
            className={cn("font-medium", config.className, className)}
        >
            {config.label}
        </Badge>
    );
}