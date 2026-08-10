import Link from "next/link";
import { Menu } from "lucide-react";

import Logo from "./Logo";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
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
  { label: "Contact", href: "/contract" },
];

export default async function Navbar() {
  const user = await getCurrentUser();

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur px-4 sm:px-6 lg:px-8">
        <nav className="flex h-16 items-center justify-between">
          <Logo />

          {/* Desktop Menu */}
          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop Auth */}
          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
            {user ? (
              <>
                <Button asChild>
                  <Link
                    href={
                      user?.role === "TECHNICIAN"
                        ? "/technician-dashboard"
                        : user?.role === "ADMIN"
                          ? "/admin-dashboard"
                          : "/customer-dashboard"
                    }
                  >
                    Dashboard
                  </Link>
                </Button>

                <form action={logoutAction}>
                  <Button variant="destructive">
                    Logout
                  </Button>
                </form>
              </>
            ) : (
              <>
                <Button variant="ghost" asChild>
                  <Link href="/login">Login</Link>
                </Button>

                <Button asChild>
                  <Link href="/register">Register</Link>
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="md:hidden"
              >
                <Menu size={20} />
              </Button>
            </SheetTrigger>

            <SheetContent>
              <div className="mt-8 flex flex-col gap-5 px-4">
                {navLinks.map((item) => (
                  <Link key={item.href} href={item.href}>
                    {item.label}
                  </Link>
                ))}

                {user ? (
                  <>
                    <Button asChild>
                      <Link href="/dashboard">Dashboard</Link>
                    </Button>

                    <form action={logoutAction}>
                      <Button
                        className="w-full"
                        variant="destructive"
                      >
                        Logout
                      </Button>
                    </form>
                  </>
                ) : (
                  <>
                    <Button variant="outline" asChild>
                      <Link href="/login">Login</Link>
                    </Button>

                    <Button asChild>
                      <Link href="/register">Register</Link>
                    </Button>
                  </>
                )}
                <ThemeToggle />
              </div>
            </SheetContent>
          </Sheet>
        </nav>
    </header>
  );
}