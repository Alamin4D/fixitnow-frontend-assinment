"use server";

import { cookies } from "next/headers";

const BACKEND_API_URL = process.env.BACKEND_API_URL!;

export const updateCategory = async (
  id: string,
  values: {
    name: string;
  }
) => {
  const token = (await cookies()).get("accessToken")?.value;

  try {
    const res = await fetch(
      `${BACKEND_API_URL}/api/categories/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(values),
      }
    );

    const data = await res.json();

    if (!res.ok) {
      throw new Error(
        data.message || "Failed to update category"
      );
    }

    return {
      success: true,
      data: data.data || data,
      message: "Category updated successfully",
    };
  } catch (error) {
    console.error("Update category error:", error);

    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Something went wrong",
    };
  }
};