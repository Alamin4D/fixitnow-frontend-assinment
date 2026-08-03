"use server";

import { cookies } from "next/headers";

const BACKEND_API_URL = process.env.BACKEND_API_URL!;

export const getTechnicianAvailability = async () => {
  const token = (await cookies()).get("accessToken")?.value;

  try {
    const res = await fetch(
      `${BACKEND_API_URL}/api/availability`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        cache: "no-store",
      }
    );
    

    const data = await res.json();

    if (!res.ok) {
      return {
        success: false,
        message: data.message || "Failed to fetch availability.",
        data: [],
      };
    }

    return {
      success: true,
      message: data.message,
      data: data.data,
    };
  } catch (error) {
    console.error("Get Technician Availability Error:", error);

    return {
      success: false,
      message: "Something went wrong.",
      data: [],
    };
  }
};