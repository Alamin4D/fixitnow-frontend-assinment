"use server";

import { cookies } from "next/headers";

const BACKEND_API_URL = process.env.BACKEND_API_URL!;

export const getTechnicianProfile = async () => {
  const token = (await cookies()).get("accessToken")?.value;

  try {
    const res = await fetch(`${BACKEND_API_URL}/api/technician/profile`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    });

    const data = await res.json();

    if (!res.ok) {
      return {
        success: false,
        message: data.message || "Failed to fetch technician profile.",
        data: null,
      };
    }

    return {
      success: true,
      message: data.message,
      data: data.data,
    };
  } catch (error) {
    console.error("Get Technician Profile Error:", error);

    return {
      success: false,
      message: "Something went wrong.",
      data: null,
    };
  }
};