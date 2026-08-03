"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

export async function cancelBooking(id: string) {
  const token = (await cookies()).get("accessToken")?.value;

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/bookings/${id}/cancel`,
    {
      method: "PATCH",
      headers: {
        Authorization: token ?? "",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    }
  );

  
  const result = await res.json();

  if (!res.ok) {
    console.error(result);
    throw new Error(result.message || "Failed to cancel booking.");
  }

  revalidatePath("/customer-dashboard/bookings");
  revalidatePath(`/customer-dashboard/bookings/${id}`);

  return result;
}