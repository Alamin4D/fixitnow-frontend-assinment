"use server";

import { cookies } from "next/headers";

export const unbanUser = async (userId: string) => {
  try {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;

    const res = await fetch(
      `${process.env.BACKEND_API_URL}/api/admin/users/${userId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          status: "ACTIVE",
        }),
        cache: "no-store",
      }
    );

    const data = await res.json();

    if (!res.ok) {
      return {
        success: false,
        message: data?.message || "Failed to unban user.",
      };
    }

    return {
      success: true,
      message: data?.message || "User unbanned successfully.",
    };
  } catch (error) {
    console.error("Unban User Error:", error);

    return {
      success: false,
      message: "Something went wrong while unbanning user.",
    };
  }
};