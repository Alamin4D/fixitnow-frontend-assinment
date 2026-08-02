"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { loginAction } from "../_actions/loginActions";
import { toast } from "sonner";

export default function LoginForm() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const redirect =
        searchParams.get("redirect");

    const [loading, setLoading] = useState(false);


    async function handleSubmit(
        e: React.FormEvent<HTMLFormElement>
    ) {
        e.preventDefault();


        const formData = new FormData(e.currentTarget);


        try {
            setLoading(true);


            const result = await loginAction(
                {
                    success: false,
                    message: "",
                },
                formData
            );


            if (!result.success) {
                toast.error(result.message);
                return;
            }


            toast.success(result.message);


            router.refresh();


            if (redirect) {
                router.replace(redirect);
                return;
            }


            switch (result.role) {
                case "ADMIN":
                    router.replace("/admin-dashboard");
                    break;

                case "TECHNICIAN":
                    router.replace("/technician-dashboard");
                    break;

                case "CUSTOMER":
                    router.replace("/customer-dashboard");
                    break;

                default:
                    router.replace("/");
            }


        } catch (error) {
            toast.error(
                "Something went wrong"
            );

        } finally {
            setLoading(false);
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <Card className="space-y-5 p-6">


                <div className="space-y-2">
                    <Label>Email</Label>

                    <Input
                        name="email"
                        type="email"
                        placeholder="john@gmail.com"
                    />
                </div>


                <div className="space-y-2">
                    <Label>Password</Label>

                    <Input
                        name="password"
                        type="password"
                        placeholder="********"
                    />
                </div>


                <Button
                    type="submit"
                    className="w-full"
                    disabled={loading}
                >
                    {loading
                        ? "Logging in..."
                        : "Login"}
                </Button>


                <div className="text-center text-sm">
                    <span className="text-muted-foreground">
                        Don&apos;t have an account?{" "}
                    </span>

                    <a
                        href="/register"
                        className="font-medium text-primary hover:underline"
                    >
                        Sign up
                    </a>
                </div>


            </Card>
        </form>
    );
}