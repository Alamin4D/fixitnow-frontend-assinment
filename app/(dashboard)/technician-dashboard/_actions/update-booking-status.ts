"use server";

// import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

const BACKEND_API_URL = process.env.BACKEND_API_URL!;

export const updateBookingStatus = async (
    bookingId: string,
    status: "ACCEPTED" | "DECLINED" | "IN_PROGRESS" | "COMPLETED"
) => {
    const token = (await cookies()).get("accessToken")?.value;

    try {
        const res = await fetch(
            `${BACKEND_API_URL}/api/technician/bookings/${bookingId}`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ status }),
            }
        );

        const data = await res.json();

        if (!res.ok) {
            return {
                success: false,
                message: data.message || "Failed to update booking status.",
            };
        }

        // revalidateTag("technician-bookings");

        return {
            success: true,
            message: data.message || "Booking status updated successfully.",
            data: data.data,
        };
    } catch (error) {
        console.error("Update Booking Status Error:", error);

        return {
            success: false,
            message: "Something went wrong.",
        };
    }
};