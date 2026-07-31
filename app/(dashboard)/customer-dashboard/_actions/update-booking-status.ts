"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

export const updateBookingStatus = async (
  bookingId: string,
  status: "ACCEPTED" | "DECLINED"
) => {
  const token = (await cookies()).get("accessToken")?.value;

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/technician/bookings/${bookingId}`,
    {
      method: "PATCH",
      headers: {
        Authorization: token!,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status }),
    }
  );

  const result = await res.json();

  if (!res.ok) {
    throw new Error(result.message);
  }

  revalidatePath("/technician-dashboard/bookings");

  return result;
};