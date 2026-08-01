"use server";

import { cookies } from "next/headers";

export const banUser = async (userId: string) => {
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
          status: "BANNED",
        }),
        cache: "no-store",
      }
    );

    const data = await res.json();

    if (!res.ok) {
      return {
        success: false,
        message: data?.message || "Failed to ban user.",
      };
    }

    return {
      success: true,
      message: data?.message || "User banned successfully.",
    };
  } catch (error) {
    console.error("Ban User Error:", error);

    return {
      success: false,
      message: "Something went wrong while banning user.",
    };
  }
};