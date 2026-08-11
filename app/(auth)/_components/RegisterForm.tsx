"use client";

import { useActionState, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
Eye,
EyeOff,
User,
Mail,
Phone,
MapPin,
LockKeyhole,
Wrench,
Loader2,
ArrowRight,
} from "lucide-react";
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

import {
registerAction,
RegisterState,
} from "../_actions/registerAction";

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

const [showPassword, setShowPassword] = useState(false);
const [showConfirmPassword, setShowConfirmPassword] =
useState(false);

useEffect(() => {
if (!state.message) return;


if (state.success) {
  toast.success(state.message);
  router.push("/login");
} else {
  toast.error(state.message);
}

}, [state, router]);

const errorClass =
"mt-1.5 text-xs font-medium text-destructive";

return ( <div className="relative w-full max-w-2xl">
{/* Background glow */} <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-r from-primary/10 via-blue-500/5 to-violet-500/10 blur-3xl" />

  <Card className="overflow-hidden rounded-3xl border-border/60 bg-background/95 shadow-2xl shadow-black/5 backdrop-blur-xl">
    {/* Header */}
    <div className="relative overflow-hidden border-b bg-gradient-to-br from-primary/10 via-background to-blue-500/5 px-6 py-7 sm:px-8">
      <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-16 -left-10 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
            <Wrench className="h-5 w-5" />
          </div>

          <div>
            <p className="text-sm font-semibold">
              FixIt<span className="text-primary">Now</span>
            </p>

            <p className="text-xs text-muted-foreground">
              Home services marketplace
            </p>
          </div>
        </div>

        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Create your account
        </h1>

        <p className="mt-2 max-w-lg text-sm leading-6 text-muted-foreground">
          Join FixItNow and connect with trusted professionals
          for reliable home services.
        </p>
      </div>
    </div>

    {/* Form */}
    <form action={action} className="space-y-6 p-6 sm:p-8">
      {/* Personal Information */}
      <div>
        <div className="mb-4">
          <h2 className="text-sm font-semibold">
            Personal information
          </h2>

          <p className="mt-1 text-xs text-muted-foreground">
            Tell us a little about yourself.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name">Full name</Label>

            <div className="group relative">
              <User className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-primary" />

              <Input
                id="name"
                name="name"
                placeholder="John Doe"
                autoComplete="name"
                className="h-11 rounded-xl bg-muted/20 pl-10 transition-all focus-visible:bg-background focus-visible:ring-4 focus-visible:ring-primary/10"
              />
            </div>

            {state.errors?.name && (
              <p className={errorClass}>
                {state.errors.name[0]}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">Email address</Label>

            <div className="group relative">
              <Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-primary" />

              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                autoComplete="email"
                className="h-11 rounded-xl bg-muted/20 pl-10 transition-all focus-visible:bg-background focus-visible:ring-4 focus-visible:ring-primary/10"
              />
            </div>

            {state.errors?.email && (
              <p className={errorClass}>
                {state.errors.email[0]}
              </p>
            )}
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label htmlFor="phone">Phone number</Label>

            <div className="group relative">
              <Phone className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-primary" />

              <Input
                id="phone"
                name="phone"
                placeholder="017xxxxxxxx"
                autoComplete="tel"
                className="h-11 rounded-xl bg-muted/20 pl-10 transition-all focus-visible:bg-background focus-visible:ring-4 focus-visible:ring-primary/10"
              />
            </div>

            {state.errors?.phone && (
              <p className={errorClass}>
                {state.errors.phone[0]}
              </p>
            )}
          </div>

          {/* Address */}
          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>

            <div className="group relative">
              <MapPin className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-primary" />

              <Input
                id="address"
                name="address"
                placeholder="Dhaka, Bangladesh"
                autoComplete="street-address"
                className="h-11 rounded-xl bg-muted/20 pl-10 transition-all focus-visible:bg-background focus-visible:ring-4 focus-visible:ring-primary/10"
              />
            </div>

            {state.errors?.address && (
              <p className={errorClass}>
                {state.errors.address[0]}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Account Type */}
      <div className="space-y-2">
        <div>
          <Label>Account type</Label>

          <p className="mt-1 text-xs text-muted-foreground">
            Choose how you want to use FixItNow.
          </p>
        </div>

        <Select name="role" defaultValue="CUSTOMER">
          <SelectTrigger className="h-11 w-full rounded-xl bg-muted/20">
            <SelectValue placeholder="Select account type" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="CUSTOMER">
              Customer — Book home services
            </SelectItem>

            <SelectItem value="TECHNICIAN">
              Technician — Offer your services
            </SelectItem>
          </SelectContent>
        </Select>

        {state.errors?.role && (
          <p className={errorClass}>
            {state.errors.role[0]}
          </p>
        )}
      </div>

      {/* Password */}
      <div>
        <div className="mb-4">
          <h2 className="text-sm font-semibold">
            Create password
          </h2>

          <p className="mt-1 text-xs text-muted-foreground">
            Use a strong password to keep your account secure.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {/* Password */}
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>

            <div className="group relative">
              <LockKeyhole className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-primary" />

              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                autoComplete="new-password"
                className="h-11 rounded-xl bg-muted/20 pl-10 pr-11 transition-all focus-visible:bg-background focus-visible:ring-4 focus-visible:ring-primary/10"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword((prev) => !prev)
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                aria-label={
                  showPassword
                    ? "Hide password"
                    : "Show password"
                }
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>

            {state.errors?.password && (
              <p className={errorClass}>
                {state.errors.password[0]}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">
              Confirm password
            </Label>

            <div className="group relative">
              <LockKeyhole className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-primary" />

              <Input
                id="confirmPassword"
                name="confirmPassword"
                type={
                  showConfirmPassword
                    ? "text"
                    : "password"
                }
                placeholder="Confirm your password"
                autoComplete="new-password"
                className="h-11 rounded-xl bg-muted/20 pl-10 pr-11 transition-all focus-visible:bg-background focus-visible:ring-4 focus-visible:ring-primary/10"
              />

              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword((prev) => !prev)
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                aria-label={
                  showConfirmPassword
                    ? "Hide confirm password"
                    : "Show confirm password"
                }
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>

            {state.errors?.confirmPassword && (
              <p className={errorClass}>
                {state.errors.confirmPassword[0]}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Submit */}
      <Button
        type="submit"
        disabled={pending}
        className="group h-12 w-full rounded-xl font-semibold shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/25"
      >
        {pending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Creating your account...
          </>
        ) : (
          <>
            Create account
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </>
        )}
      </Button>

      {/* Login */}
      <div className="text-center text-sm">
        <span className="text-muted-foreground">
          Already have an account?{" "}
        </span>

        <Link
          href="/login"
          className="font-semibold text-primary transition-colors hover:text-primary/80 hover:underline"
        >
          Sign in
        </Link>
      </div>
    </form>
  </Card>

  <p className="mt-5 text-center text-xs text-muted-foreground">
    By creating an account, you agree to FixItNow&apos;s{" "}
    <Link
      href="/terms"
      className="underline-offset-4 hover:text-foreground hover:underline"
    >
      Terms of Service
    </Link>{" "}
    and{" "}
    <Link
      href="/privacy"
      className="underline-offset-4 hover:text-foreground hover:underline"
    >
      Privacy Policy
    </Link>
    .
  </p>
</div>
);
}
