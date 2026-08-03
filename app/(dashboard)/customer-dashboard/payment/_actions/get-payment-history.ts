"use server";

import { cookies } from "next/headers";

export const getPaymentHistory = async () => {
  try {
    const token = (await cookies()).get("accessToken")?.value;

    const res = await fetch(
      `${process.env.BACKEND_API_URL}/api/payments`,
      {
        headers: {
        Authorization: `Bearer ${token}`,
        },
        cache: "no-store",
      }
    );
    

    return res.json();
  } catch {
    return {
      success: false,
      data: [],
    };
  }
};