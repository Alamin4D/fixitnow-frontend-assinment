"use server";

import { cookies } from "next/headers";

interface GoogleLoginResult {
  success: boolean;
  message: string;
  role?: "ADMIN" | "TECHNICIAN" | "CUSTOMER";
}

export async function googleLoginAction(
  credential: string
): Promise<GoogleLoginResult> {
  try {
    if (!credential) {
      return {
        success: false,
        message: "Google credential is required",
      };
    }

    const backendUrl = process.env.BACKEND_API_URL;

    if (!backendUrl) {
      return {
        success: false,
        message: "Backend API URL is not configured",
      };
    }

    const response = await fetch(
      `${backendUrl}/api/auth/google`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          credential,
        }),
        cache: "no-store",
      }
    );

    const data = await response.json();

    if (!response.ok || !data.success) {
      return {
        success: false,
        message: data.message || "Google login failed",
      };
    }

    
    if (data.accessToken) {
      const cookieStore = await cookies();

      cookieStore.set("accessToken", data.accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite:
          process.env.NODE_ENV === "production"
            ? "none"
            : "lax",
        path: "/",
        maxAge: 7 * 24 * 60 * 60,
      });
    }

    return {
      success: true,
      message: data.message || "Google login successful",
      role: data.role,
    };
  } catch (error) {
    console.error("Google login action error:", error);

    return {
      success: false,
      message: "Unable to connect to authentication server",
    };
  }
}