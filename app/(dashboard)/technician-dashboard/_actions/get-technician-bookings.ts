"use server";

import { cookies } from "next/headers";

export const getTechnicianBookings = async () => {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken")?.value;

    const res = await fetch(
      `${process.env.BACKEND_API_URL}/api/bookings`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token}` : "",
        },
        credentials: "include",
        cache: "no-store",
        next: {
          tags: ["technician-bookings"],
        },
      }
    );

    const result = await res.json();

    return result;
  } catch (error) {
    console.error("Failed to fetch technician bookings:", error);

    return {
      success: false,
      message: "Failed to fetch technician bookings.",
      data: [],
    };
  }
};