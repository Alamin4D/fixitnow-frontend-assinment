"use client";

import { useActionState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { loginAction, LoginState } from "../_actions/loginActions";
import { toast } from "sonner";

const initialState: LoginState = {
    success: false,
    message: "",
};

export default function LoginForm() {
    const router = useRouter()


    const [state, action, pending] = useActionState(
        loginAction.bind(null),
        initialState
    );

    useEffect(() => {
        if (!state.message) return;

        if (state.success) {
            toast.success(state.message);

            router.push("/dashboard");
        } else {
            toast.error(state.message);
        }
    }, [state, router]);

    return (
        <form action={action}>
            <Card className="space-y-5 p-6">

                <div className="space-y-2">
                    <Label>Email</Label>

                    <Input
                        name="email"
                        type="email"
                        placeholder="john@gmail.com"
                    />

                    {state.errors?.email && (
                        <p className="text-sm text-red-500">
                            {state.errors.email[0]}
                        </p>
                    )}
                </div>

                <div className="space-y-2">
                    <Label>Password</Label>

                    <Input
                        name="password"
                        type="password"
                        placeholder="********"
                    />

                    {state.errors?.password && (
                        <p className="text-sm text-red-500">
                            {state.errors.password[0]}
                        </p>
                    )}
                </div>

                <Button
                    className="w-full"
                    disabled={pending}
                >
                    {pending ? "Logging in..." : "Login"}
                </Button>

                <div className="text-center text-sm">
                    <span className="text-muted-foreground">Don&apos;t have an account? </span>
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