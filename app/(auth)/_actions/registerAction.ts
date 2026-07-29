"use server";

import { registerSchema } from "@/lib/auth.validation";

export type RegisterState = {
    success: boolean;
    message: string;
    errors?: {
        name?: string[];
        email?: string[];
        phone?: string[];
        address?: string[];
        role?: string[];
        password?: string[];
        confirmPassword?: string[];
    };
};

export async function registerAction(
    prevState: RegisterState,
    formData: FormData
): Promise<RegisterState> {
    const values = {
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        address: formData.get("address"),
        role: formData.get("role"),
        password: formData.get("password"),
        confirmPassword: formData.get("confirmPassword"),
    };

    const validated = registerSchema.safeParse(values);

    if (!validated.success) {
        return {
            success: false,
            message: "Validation Failed",
            errors: validated.error.flatten().fieldErrors,
        };
    }

    const { confirmPassword, ...payload } = validated.data;

    try {
        const res = await fetch(
            `${process.env.BACKEND_API_URL}/api/auth/register`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
                cache: "no-store",
            }
        );

        const result = await res.json();

        if (!res.ok) {
            return {
                success: false,
                message: result.message ?? "Registration failed",
            };
        }

        return {
            success: true,
            message: result.message || "Registration successful",
        };
    } catch {
        return {
            success: false,
            message: "Something went wrong",
        };
    }
}