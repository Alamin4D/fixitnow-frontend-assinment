"use server";

import { cookies } from "next/headers";

const BACKEND_API_URL = process.env.BACKEND_API_URL!;

export const createCheckout = async (bookingId: string) => {
  const token = (await cookies()).get("accessToken")?.value;

  try {
    const res = await fetch(`${BACKEND_API_URL}/api/payments/checkout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ bookingId }),
      cache: "no-store",
    });
    

    const result = await res.json();

    return result;
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: "Unable to create checkout session.",
    };
  }
};