"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

const BACKEND_API_URL = process.env.BACKEND_API_URL!;

export const updateCategory = async (
  id: string,
  values: {
    name: string;
    description: string;
    icon: string;
  }
) => {
  const token = (await cookies()).get("accessToken")?.value;

  try {
    const res = await fetch(
      `${BACKEND_API_URL}/api/admin/categories/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(values),
      }
    );

    const data = await res.json();

    if (!res.ok) {
      return {
        success: false,
        message: data.message || "Failed to update category",
      };
    }

    revalidatePath("/admin-dashboard/categories");

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