"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

interface UpdateProfilePayload {
  name: string;
  phone?: string;
  address?: string;
  image?: string;
}

export async function updateProfile(
  payload: UpdateProfilePayload
) {
  try {
    const token = (await cookies()).get("accessToken")?.value;

    const response = await fetch(
      `${process.env.BACKEND_API_URL}/api/users/profile`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
        cache: "no-store",
      }
    );

    const result = await response.json();

    if (!response.ok) {
      throw new Error(
        result.message || "Failed to update profile."
      );
    }

    revalidatePath("/dashboard/profile");

    return {
      success: true,
      message: result.message,
      data: result.data,
    };
  } catch (error) {
    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Something went wrong.",
    };
  }
}