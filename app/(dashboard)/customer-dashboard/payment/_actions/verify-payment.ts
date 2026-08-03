"use server";

import { cookies } from "next/headers";

const BACKEND_API_URL = process.env.BACKEND_API_URL!;

export const verifyPayment = async (sessionId: string) => {
  const token = (await cookies()).get("accessToken")?.value;

  try {
    const res = await fetch(`${BACKEND_API_URL}/api/payments/verify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        sessionId,
      }),
      cache: "no-store",
    });
    

    const result = await res.json();

    return result;
  } catch (error) {
    console.error("Verify payment error:", error);

    return {
      success: false,
      message: "Failed to verify payment.",
    };
  }
};