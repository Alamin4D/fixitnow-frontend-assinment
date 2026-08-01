"use server";

import { cookies } from "next/headers";

const BACKEND_API_URL = process.env.BACKEND_API_URL!;

export const getCategories = async () => {
  const token = (await cookies()).get("accessToken")?.value;

  try {
    const res = await fetch(`${BACKEND_API_URL}/api/categories`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(
        data.message || "Failed to fetch categories"
      );
    }

    return {
      success: true,
      data: data.data || data,
    };
  } catch (error) {
    console.error("Get categories error:", error);

    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Something went wrong",
      data: [],
    };
  }
};