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
        message: result.message || "Login failed",
      };
    }


    const cookieStore = await cookies();


    const accessToken = result.data.accessToken;
    const user = result.data.user;

    console.log("COOKIE SET TOKEN:", accessToken);
    console.log("COOKIE SET ROLE:", user.role);


    if (!accessToken || !user) {
      return {
        success: false,
        message: "Invalid login response",
      };
    }


    cookieStore.set(
      "accessToken",
      accessToken,
      {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24,
      }
    );


    cookieStore.set(
      "role",
      user.role,
      {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24,
      }
    );


    cookieStore.set(
      "name",
      user.name,
      {
        httpOnly: true,
        sameSite: "lax",
        secure: false,
        path: "/",
      }
    );


    cookieStore.set(
      "email",
      user.email,
      {
        httpOnly: true,
        sameSite: "lax",
        secure: false,
        path: "/",
      }
    );


    return {
      success: true,
      message:
        result.message || "Login successful",
      role: user.role,
    };


  } catch (error) {
    console.error("Login error:", error);

    return {
      success: false,
      message:
        "Something went wrong. Please try again.",
    };
  }
}