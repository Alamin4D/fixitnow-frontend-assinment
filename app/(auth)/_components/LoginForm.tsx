"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import {
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  Loader2,
  ArrowRight,
  Check,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { loginAction } from "../_actions/loginActions";
import { googleLoginAction } from "../_actions/googleLoginAction";

import { toast } from "sonner";

export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const redirect = searchParams.get("redirect");

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  /*
   * Google Identity Services
   */
  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "https://accounts.google.com/gsi/client";

    script.async = true;
    script.defer = true;

    script.onload = () => {
      if (!window.google) {
        console.error(
          "Google Identity Services failed to load"
        );
        return;
      }

      const clientId =
        process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

      if (!clientId) {
        console.error(
          "NEXT_PUBLIC_GOOGLE_CLIENT_ID is missing"
        );
        return;
      }

      window.google.accounts.id.initialize({
        client_id: clientId,

        callback: async (response) => {
          await handleGoogleLogin(
            response.credential
          );
        },
      });

      const googleButton =
        document.getElementById(
          "google-login-button"
        );

      if (!googleButton) return;

      window.google.accounts.id.renderButton(
        googleButton,
        {
          theme: "outline",
          size: "large",
          width: 400,
          text: "continue_with",
          shape: "rect",
        }
      );
    };

    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  /*
   * Normal email/password login
   */
  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    const formData = new FormData(
      e.currentTarget
    );

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

      redirectByRole(result.role);
    } catch (error) {
      console.error(error);

      toast.error(
        "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  /*
   * Google login
   */
  async function handleGoogleLogin(
    credential: string
  ) {
    try {
      setLoading(true);

      const result =
        await googleLoginAction(credential);

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

      redirectByRole(result.role);
    } catch (error) {
      console.error(error);

      toast.error(
        "Google login failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  /*
   * Role based dashboard redirect
   */
  function redirectByRole(
    role?: "ADMIN" | "TECHNICIAN" | "CUSTOMER"
  ) {
    switch (role) {
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
  }

  return (
    <div className="relative w-full max-w-md">
      {/* Decorative background glow */}
      <div className="absolute -inset-1 -z-10 rounded-[2rem] bg-gradient-to-r from-primary/20 via-blue-500/10 to-purple-500/20 blur-2xl" />

      <Card className="overflow-hidden rounded-3xl border border-border/60 bg-background/95 p-0 shadow-2xl shadow-black/5 backdrop-blur-xl">
        {/* Top gradient section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-blue-500/5 px-6 pb-6 pt-8 sm:px-8">
          <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-3xl" />

          <div className="absolute -bottom-10 -left-10 h-28 w-28 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative">
            {/* Logo / Icon */}
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
              <LockKeyhole className="h-6 w-6" />
            </div>

            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Welcome back
            </h1>

            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Sign in to your FixItNow account and
              continue where you left off.
            </p>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5 p-6 sm:p-8"
        >
          {/* Email */}
          <div className="space-y-2">
            <Label
              htmlFor="email"
              className="text-sm font-medium"
            >
              Email address
            </Label>

            <div className="group relative">
              <Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-primary" />

              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                autoComplete="email"
                required
                className="h-12 rounded-xl border-border/70 bg-muted/20 pl-10 pr-4 transition-all focus-visible:border-primary focus-visible:bg-background focus-visible:ring-4 focus-visible:ring-primary/10"
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label
                htmlFor="password"
                className="text-sm font-medium"
              >
                Password
              </Label>

              <a
                href="/forgot-password"
                className="text-xs font-medium text-primary transition-colors hover:text-primary/80 hover:underline"
              >
                Forgot password?
              </a>
            </div>

            <div className="group relative">
              <LockKeyhole className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-primary" />

              <Input
                id="password"
                name="password"
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="Enter your password"
                autoComplete="current-password"
                required
                className="h-12 rounded-xl border-border/70 bg-muted/20 pl-10 pr-11 transition-all focus-visible:border-primary focus-visible:bg-background focus-visible:ring-4 focus-visible:ring-primary/10"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword((prev) => !prev)
                }
                aria-label={
                  showPassword
                    ? "Hide password"
                    : "Show password"
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          {/* Remember me */}
          <label className="flex cursor-pointer select-none items-center gap-2.5">
            <input
              type="checkbox"
              name="rememberMe"
              checked={rememberMe}
              onChange={(e) =>
                setRememberMe(e.target.checked)
              }
              className="peer sr-only"
            />

            <span className="flex h-4 w-4 items-center justify-center rounded border border-border transition-all peer-checked:border-primary peer-checked:bg-primary">
              {rememberMe && (
                <Check className="h-3 w-3 text-primary-foreground" />
              )}
            </span>

            <span className="text-sm text-muted-foreground">
              Remember me
            </span>
          </label>

          {/* Login button */}
          <Button
            type="submit"
            disabled={loading}
            className="group h-12 w-full rounded-xl text-sm font-semibold shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/25"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Signing you in...
              </>
            ) : (
              <>
                Sign in
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </Button>

          {/* Divider */}
          <div className="relative py-1">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border/70" />
            </div>

            <div className="relative flex justify-center">
              <span className="bg-background px-3 text-xs text-muted-foreground">
                OR CONTINUE WITH
              </span>
            </div>
          </div>

          {/* Google Login */}
          <div className="flex min-h-12 w-full items-center justify-center overflow-hidden rounded-xl">
            <div
              id="google-login-button"
              className="flex w-full justify-center"
            />
          </div>

          {/* Register */}
          <p className="pt-1 text-center text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <a
              href="/register"
              className="font-semibold text-primary transition-colors hover:text-primary/80 hover:underline"
            >
              Create an account
            </a>
          </p>
        </form>
      </Card>
    </div>
  );
}