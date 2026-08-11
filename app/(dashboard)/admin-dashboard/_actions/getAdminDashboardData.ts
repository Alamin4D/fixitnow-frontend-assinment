"use server";

import { cookies } from "next/headers";

const API_URL = process.env.BACKEND_API_URL;

if (!API_URL) {
  throw new Error("BACKEND_API_URL is not configured");
}

export async function getAdminDashboard() {
  try {
    const cookieStore = await cookies();

    const accessToken = cookieStore.get("accessToken")?.value;

    if (!accessToken) {
      return {
        success: false,
        message: "Authentication required",
        data: null,
      };
    }

    const headers = {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    };

    const [usersResponse, categoriesResponse, bookingsResponse] =
      await Promise.all([
        fetch(`${API_URL}/api/admin/users`, {
          method: "GET",
          headers,
          cache: "no-store",
        }),

        fetch(`${API_URL}/api/admin/categories`, {
          method: "GET",
          headers,
          cache: "no-store",
        }),

        fetch(`${API_URL}/api/admin/bookings`, {
          method: "GET",
          headers,
          cache: "no-store",
        }),
      ]);

    const [usersResult, categoriesResult, bookingsResult] =
      await Promise.all([
        usersResponse.json(),
        categoriesResponse.json(),
        bookingsResponse.json(),
      ]);

    if (!usersResponse.ok) {
      throw new Error(
        usersResult?.message || "Failed to fetch users"
      );
    }

    if (!categoriesResponse.ok) {
      throw new Error(
        categoriesResult?.message || "Failed to fetch categories"
      );
    }

    if (!bookingsResponse.ok) {
      throw new Error(
        bookingsResult?.message || "Failed to fetch bookings"
      );
    }

    return {
      success: true,
      message: "Dashboard data retrieved successfully",
      data: {
        users: usersResult?.data?.data ?? [],
        usersMeta: usersResult?.data?.meta ?? {
          total: 0,
        },
        categories: categoriesResult?.data ?? [],
        bookings: bookingsResult?.data ?? [],
      },
    };
  } catch (error) {
    console.error("Admin dashboard error:", error);

    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Failed to load admin dashboard",
      data: null,
    };
  }
}