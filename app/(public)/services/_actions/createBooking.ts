"use server";

import { cookies } from "next/headers";

export async function createBooking(data: unknown) {
  const token = (await cookies()).get("accessToken")?.value;

  if (!token) {
    return {
      success: false,
      message: "Unauthorized. Please login first.",
    };
  }

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/bookings`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
      cache: "no-store",
    }
  );

  return await res.json();
}