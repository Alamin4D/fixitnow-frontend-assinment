"use server";

import { cookies } from "next/headers";

const BACKEND_API_URL = process.env.BACKEND_API_URL!;

export const getCustomerBookings = async () => {
  const token = (await cookies()).get("accessToken")?.value;

  try {
    const res = await fetch(
      `${BACKEND_API_URL}/api/bookings`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        cache: "no-store",
      }
    );

    const data = await res.json();

    
    return {
      success: true,
      data: data.data || [],
    };
  } catch (error) {
    return {
      success: false,
      data: [],
    };
  }
};