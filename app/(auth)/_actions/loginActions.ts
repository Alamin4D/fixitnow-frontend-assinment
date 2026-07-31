"use server";

import { loginSchema } from "@/lib/auth.validation";
import { cookies } from "next/headers";

export type LoginState = {
  success: boolean;
  message: string;
  role?: "CUSTOMER" | "TECHNICIAN" | "ADMIN";
  errors?: {
    email?: string[];
    password?: string[];
  };
};

export async function loginAction(
  prevState: LoginState,
  formData: FormData
): Promise<LoginState> {
  const values = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const validated = loginSchema.safeParse(values);

  if (!validated.success) {
    return {
      success: false,
      message: "Validation Failed",
      errors: validated.error.flatten().fieldErrors,
    };
  }

  try {
    const res = await fetch(
      `${process.env.BACKEND_API_URL}/api/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(validated.data),
        cache: "no-store",
      }
    );

    const result = await res.json();

    if (!res.ok) {
      return {
        success: false,
        message: result.message ?? "Login failed",
      };
    }

    const cookieStore = await cookies();

    // Access Token
    cookieStore.set("accessToken", result.data.accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24,
    });

    // Role
    cookieStore.set("role", result.data.user.role, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24,
    });

    cookieStore.set("name", result.data.user.name, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
    });

    cookieStore.set("email", result.data.user.email, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
    });

    // Refresh Token (if exists)
    if (result.data.refreshToken) {
      cookieStore.set("refreshToken", result.data.refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
      });
    }
    return {
      success: true,
      message: result.message || "Login successful",
      role: result.data.user.role,
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
}