"use server";

import { cookies } from "next/headers";

const BACKEND_API_URL = process.env.BACKEND_API_URL;

export const getTechnicianBookings = async () => {
  try {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;


    const res = await fetch(
      `${BACKEND_API_URL}/api/bookings`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        cache: "no-store",
      }
    );

    const data = await res.json();

    if (!res.ok) {
      throw new Error(
        data?.message || "Failed to fetch technician bookings"
      );
    }

    return {
      success: true,
      data: data.data,
      meta: data.meta,
    };
  } catch (error: any) {
    console.error("Get technician bookings error:", error);

    return {
      success: false,
      message: error.message || "Something went wrong",
      data: [],
    };
  }
};