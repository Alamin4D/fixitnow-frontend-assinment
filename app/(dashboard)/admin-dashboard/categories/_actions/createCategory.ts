"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export const createCategory = async (payload: {
  name: string;
  description: string;
  image: string;
}) => {
  try {
    const token = (await cookies()).get("accessToken")?.value;
    const res = await fetch(
      `${process.env.BACKEND_API_URL}/api/admin/categories`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      }
    );
    

    const result = await res.json();

    if (!res.ok) {
      return {
        success: false,
        message: result.message,
      };
    }

    revalidatePath("/admin-dashboard/categories");

    return result;
  } catch {
    return {
      success: false,
      message: "Something went wrong.",
    };
  }
};