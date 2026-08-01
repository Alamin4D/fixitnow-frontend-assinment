"use server";

import { cookies } from "next/headers";

export async function getBookings() {
  const token = (await cookies()).get("accessToken")?.value;

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/bookings`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch bookings.");
  }

  const result = await res.json();

  return (result.data ?? []).map((booking: any) => ({
    id: booking.id,

    serviceName: booking.service?.title ?? "N/A",

    technicianName:
      booking.technician?.user?.name ?? "N/A",

    customerName:
      booking.customer?.name ?? "N/A",

    bookingDate: booking.scheduledDate,

    bookingTime: booking.scheduledTime,

    totalPrice: booking.totalAmount,

    status: booking.status,

    address: booking.address,

    notes: booking.notes,
  }));
}