"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  CalendarCheck,
  Users,
  CreditCard,
  ClipboardList,
  UserCircle,
  ChartBarStacked,
  Sparkles,
  ChevronRight,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import LogoutButton from "./logout-button";
import Logo from "../shared/Logo";

type Role = "CUSTOMER" | "TECHNICIAN" | "ADMIN";

interface DashboardSidebarProps {
  role: Role;
}

const customerLinks = [
  {
    title: "Dashboard",
    href: "/customer-dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "My Bookings",
    href: "/customer-dashboard/bookings",
    icon: CalendarCheck,
  },
  {
    title: "Payment",
    href: "/customer-dashboard/payment",
    icon: CreditCard,
  },
];

const technicianLinks = [
  {
    title: "Dashboard",
    href: "/technician-dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Bookings",
    href: "/technician-dashboard/bookings",
    icon: ClipboardList,
  },
  {
    title: "Profile",
    href: "/technician-dashboard/profile",
    icon: UserCircle,
  },
];

const adminLinks = [
  {
    title: "Dashboard",
    href: "/admin-dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Users",
    href: "/admin-dashboard/users",
    icon: Users,
  },
  {
    title: "Categories",
    href: "/admin-dashboard/categories",
    icon: ChartBarStacked,
  },
];

const roleConfig = {
  CUSTOMER: {
    label: "Customer",
    description: "Manage your services",
  },
  TECHNICIAN: {
    label: "Technician",
    description: "Manage your work",
  },
  ADMIN: {
    label: "Administrator",
    description: "Manage the platform",
  },
};

export default function DashboardSidebar({
  role,
}: DashboardSidebarProps) {
  const pathname = usePathname();

  const links =
    role === "CUSTOMER"
      ? customerLinks
      : role === "TECHNICIAN"
        ? technicianLinks
        : adminLinks;

  const currentRole = roleConfig[role];

  return (
    <aside className="flex h-full w-72 flex-col border-r bg-background/95 backdrop-blur-xl">
      {/* ================= LOGO ================= */}
      <div className="border-b px-5 py-5">
        <div className="rounded-2xl border bg-card/70 p-4 shadow-sm">
          <Logo />

          <div className="mt-4 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
              <Sparkles className="h-4 w-4 text-primary" />
            </div>

            <div className="min-w-0">
              <p className="text-xs font-semibold">
                {currentRole.label}
              </p>

              <p className="truncate text-[11px] text-muted-foreground">
                {currentRole.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= NAVIGATION ================= */}
      <div className="px-4 pt-6">
        <div className="mb-3 px-3">
          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground">
            Workspace
          </p>
        </div>
      </div>

      <nav className="flex-1 space-y-1.5 px-4">
        {links.map((item) => {
          const Icon = item.icon;

          const active =
            pathname === item.href ||
            pathname.startsWith(`${item.href}/`);

          return (
            <Button
              key={item.href}
              asChild
              variant="ghost"
              className={cn(
                "group relative h-11 w-full justify-start gap-3 rounded-xl px-3 text-sm font-medium transition-all duration-200",
                active
                  ? "bg-primary/10 text-primary shadow-sm hover:bg-primary/10 hover:text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
            >
              <Link href={item.href}>
                {/* Active Indicator */}
                {active && (
                  <span className="absolute left-0 h-6 w-1 rounded-r-full bg-primary" />
                )}

                {/* Icon */}
                <span
                  className={cn(
                    "flex h-8 w-8 items-center justify-center rounded-lg transition-all duration-200",
                    active
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-muted/60 text-muted-foreground group-hover:bg-background group-hover:text-foreground",
                  )}
                >
                  <Icon className="h-4 w-4" />
                </span>

                <span className="flex-1 text-left">
                  {item.title}
                </span>

                {/* Arrow */}
                <ChevronRight
                  className={cn(
                    "h-4 w-4 transition-all duration-200",
                    active
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-60",
                  )}
                />
              </Link>
            </Button>
          );
        })}
      </nav>

      {/* ================= BOTTOM ================= */}
      <div className="border-t p-4">
        {/* Support / Status Card */}
        <div className="mb-4 rounded-2xl border bg-muted/30 p-4">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-500" />

            <span className="text-xs font-semibold">
              System Operational
            </span>
          </div>

          <p className="mt-2 text-[11px] leading-5 text-muted-foreground">
            Everything is running smoothly.
          </p>
        </div>

        {/* Logout */}
        <LogoutButton
          className="h-11 w-full justify-start rounded-xl px-3"
        />
      </div>
    </aside>
  );
}