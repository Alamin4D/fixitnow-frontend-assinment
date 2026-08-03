"use server";

import { cookies } from "next/headers";

export async function getBookingById(id: string) {
  const token = (await cookies()).get("accessToken")?.value;

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/bookings/${id}`,
    {
      headers: {
        Authorization: token ?? "",
      },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch booking.");
  }

  const result = await res.json();
  const booking = result.data;

  return {
  id: booking.id,
  serviceName: booking.service?.title,
  customerName: booking.customer?.name,
  technicianName: booking.technician?.user?.name,
  bookingDate: booking.scheduledDate,
  bookingTime: booking.scheduledTime,
  totalPrice: booking.totalAmount,
  status: booking.status,
  address: booking.address,
  notes: booking.notes,

  cancelledAt: booking.cancelledAt,
  cancellationReason: booking.cancellationReason,
};
}