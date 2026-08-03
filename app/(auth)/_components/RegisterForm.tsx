"use client";

import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { registerAction, RegisterState } from "../_actions/registerAction";

const initialState: RegisterState = {
    success: false,
    message: "",
};

export default function RegisterForm() {
    const router = useRouter();

    const [state, action, pending] = useActionState(
        registerAction,
        initialState
    );

    useEffect(() => {
        if (!state.message) return;

        if (state.success) {
            toast.success(state.message);
            router.push("/login");
        } else {
            toast.error(state.message);
        }
    }, [state, router]);

    return (
        <div className="py-20">
            <form action={action}>
                <Card className="space-y-4 p-6">
                    <div>
                        <Label>Name</Label>
                        <Input name="name" placeholder="John Doe" />
                        {state.errors?.name && (
                            <p className="text-sm text-red-500">{state.errors.name[0]}</p>
                        )}
                    </div>

                    <div>
                        <Label>Email</Label>
                        <Input name="email" type="email" placeholder="john@example.com" />
                        {state.errors?.email && (
                            <p className="text-sm text-red-500">{state.errors.email[0]}</p>
                        )}
                    </div>

                    <div>
                        <Label>Phone</Label>
                        <Input name="phone" placeholder="017xxxxxxxx" />
                        {state.errors?.phone && (
                            <p className="text-sm text-red-500">{state.errors.phone[0]}</p>
                        )}
                    </div>

                    <div>
                        <Label>Address</Label>

                        <Input
                            name="address"
                            placeholder="Dhaka, Bangladesh"
                        />

                        {state.errors?.address && (
                            <p className="text-sm text-red-500">
                                {state.errors.address[0]}
                            </p>
                        )}
                    </div>

                    <div>
                        <Label>Role</Label>

                        <Select name="role" defaultValue="CUSTOMER">
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select Role" />
                            </SelectTrigger>

                            <SelectContent>
                                <SelectItem value="CUSTOMER">
                                    Customer
                                </SelectItem>

                                <SelectItem value="TECHNICIAN">
                                    Technician
                                </SelectItem>
                            </SelectContent>
                        </Select>

                        {state.errors?.role && (
                            <p className="text-sm text-red-500">
                                {state.errors.role[0]}
                            </p>
                        )}
                    </div>

                    <div>
                        <Label>Password</Label>
                        <Input name="password" type="password" />
                        {state.errors?.password && (
                            <p className="text-sm text-red-500">{state.errors.password[0]}</p>
                        )}
                    </div>

                    <div>
                        <Label>Confirm Password</Label>
                        <Input name="confirmPassword" type="password" />
                        {state.errors?.confirmPassword && (
                            <p className="text-sm text-red-500">
                                {state.errors.confirmPassword[0]}
                            </p>
                        )}
                    </div>


                    <Button
                        type="submit"
                        className="w-full"
                        disabled={pending}
                    >
                        {pending ? "Creating Account..." : "Register"}
                    </Button>


                    <div className="text-center text-sm">
                        <span className="text-muted-foreground">Already have an account? </span>
                        <a
                            href="/login"
                            className="font-medium text-primary hover:underline"
                        >
                            Login
                        </a>
                    </div>
                </Card>
            </form>
        </div>
    );
}