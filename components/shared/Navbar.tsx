import Link from "next/link";
import { Menu, Sparkles } from "lucide-react";

import Logo from "./Logo";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { getCurrentUser } from "@/lib/getCurrentUser";
import { logoutAction } from "@/app/(auth)/_actions/logoutAction";
import { ThemeToggle } from "../theme-toggle";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Technicians", href: "/technicians" },
  { label: "About", href: "/about" },
  { label: "Contract", href: "/contract" },
];


export default async function Navbar() {
  const user = await getCurrentUser();

  const dashboardHref =
    user?.role === "TECHNICIAN"
      ? "/technician-dashboard"
      : user?.role === "ADMIN"
        ? "/admin-dashboard"
        : "/customer-dashboard";

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* ================= LOGO ================= */}
        <Logo />

        {/* ================= DESKTOP NAV ================= */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
            >
              {item.label}

              {/* Hover underline */}
              <span className="absolute inset-x-4 bottom-1 h-px origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </div>

        {/* ================= DESKTOP ACTIONS ================= */}
        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />

          {user ? (
            <>
              {/* Dashboard */}
              <Button
                asChild
                className="rounded-full px-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <Link href={dashboardHref}>
                  <Sparkles className="mr-2 h-4 w-4" />
                  Dashboard
                </Link>
              </Button>

              {/* Logout */}
              <form action={logoutAction}>
                <Button
                  type="submit"
                  variant="outline"
                  className="rounded-full border-destructive/20 text-destructive transition-all hover:border-destructive/40 hover:bg-destructive/10"
                >
                  Logout
                </Button>
              </form>
            </>
          ) : (
            <>
              <Button
                variant="ghost"
                asChild
                className="rounded-full px-5"
              >
                <Link href="/login">Login</Link>
              </Button>

              <Button
                asChild
                className="rounded-full px-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <Link href="/register">Get Started</Link>
              </Button>
            </>
          )}
        </div>

        {/* ================= MOBILE MENU ================= */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="rounded-xl md:hidden"
              aria-label="Open navigation menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="w-[300px] border-l bg-background/95 backdrop-blur-xl sm:w-[360px]"
          >
            {/* Mobile Header */}
            <SheetHeader className="border-b pb-5">
              <SheetTitle className="text-left">
                <Logo />
              </SheetTitle>
            </SheetHeader>

            <div className="flex flex-col px-2 py-6">
              {/* Mobile Navigation */}
              <div className="space-y-1">
                {navLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Divider */}
              <div className="my-6 h-px bg-border" />

              {/* Mobile Auth */}
              {user ? (
                <div className="space-y-3">
                  <Button
                    asChild
                    className="h-11 w-full rounded-xl"
                  >
                    <Link href={dashboardHref}>
                      <Sparkles className="mr-2 h-4 w-4" />
                      Dashboard
                    </Link>
                  </Button>

                  <form action={logoutAction}>
                    <Button
                      type="submit"
                      variant="destructive"
                      className="h-11 w-full rounded-xl"
                    >
                      Logout
                    </Button>
                  </form>
                </div>
              ) : (
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    asChild
                    className="h-11 w-full rounded-xl"
                  >
                    <Link href="/login">Login</Link>
                  </Button>

                  <Button
                    asChild
                    className="h-11 w-full rounded-xl"
                  >
                    <Link href="/register">Get Started</Link>
                  </Button>
                </div>
              )}

              {/* Mobile Theme */}
              <div className="mt-6 flex items-center justify-between rounded-xl border bg-muted/30 p-3">
                <span className="text-sm font-medium">
                  Appearance
                </span>

                <ThemeToggle />
              </div>

              {/* Mobile Footer Text */}
              <div className="mt-8 rounded-2xl bg-primary/5 p-4">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <Sparkles className="h-4 w-4 text-primary" />
                  FixItNow
                </div>

                <p className="mt-2 text-xs leading-5 text-muted-foreground">
                  Trusted professionals for your everyday home service needs.
                </p>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}