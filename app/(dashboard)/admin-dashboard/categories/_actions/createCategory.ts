"use server";

import { cookies } from "next/headers";

const BACKEND_API_URL = process.env.BACKEND_API_URL!;

export const createCategory = async (values: {
  name: string;
}) => {
  const token = (await cookies()).get("accessToken")?.value;

  try {
    const res = await fetch(`${BACKEND_API_URL}/api/categories`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(values),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(
        data.message || "Failed to create category"
      );
    }

    return {
      success: true,
      data: data.data || data,
      message: "Category created successfully",
    };
  } catch (error) {
    console.error("Create category error:", error);

    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Something went wrong",
    };
  }
};