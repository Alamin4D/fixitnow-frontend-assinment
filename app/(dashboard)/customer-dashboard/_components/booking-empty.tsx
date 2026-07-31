"use client";


import { Button } from "@/components/ui/button";

interface BookingEmptyProps {
    role?: "CUSTOMER" | "TECHNICIAN";
}

export default function BookingEmpty({
    role = "CUSTOMER",
}: BookingEmptyProps) {

    const isTechnician = role === "TECHNICIAN";

    return (
        <div className="flex flex-col items-center justify-center rounded-xl border border-dashed p-12">

            <h3 className="text-xl font-semibold">
                {isTechnician
                    ? "No incoming bookings yet"
                    : "No bookings yet"}
            </h3>


            <p className="mt-2 text-muted-foreground">
                {isTechnician
                    ? "Customer booking requests will appear here."
                    : "You haven't booked any services yet."}
            </p>


            {!isTechnician && (
                <Button className="mt-6">
                    Browse Services
                </Button>
            )}

        </div>
    );
}