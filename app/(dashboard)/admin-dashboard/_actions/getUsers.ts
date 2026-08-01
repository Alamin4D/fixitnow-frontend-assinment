"use server";

import { cookies } from "next/headers";

export const getUsers = async () => {
  try {
    const cookieStore = await cookies();

    const token = cookieStore.get("accessToken")?.value;

    const res = await fetch(
      `${process.env.BACKEND_API_URL}/api/admin/users`,
      {
        method: "GET",
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const result = await res.json();

    console.log("BACKEND RESPONSE:", result);

    return {
      success: result.success,
      data: result.data?.data || [],
      meta: result.data?.meta,
      message: result.message,
    };

  } catch (error) {
    console.log(error);

    return {
      success: false,
      data: [],
      meta: undefined,
      message: "Failed to fetch users",
    };
  }
};