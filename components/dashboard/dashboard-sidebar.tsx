"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  CalendarCheck,
  Users,
  Wrench,
  CreditCard,
  ClipboardList,
  Star,
  UserCircle,
  Settings,
  Shield,
  LogOut,
  ChartBarStacked,
} from "lucide-react";


import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import LogoutButton from "./logout-button";

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
  // {
  //   title: "Profile",
  //   href: "/customer-dashboard/profile",
  //   icon: UserCircle,
  // },
  {
    title: "Payment",
    href: "/customer-dashboard/payment",
    icon: CreditCard,
  },
  // {
  //   title: "Settings",
  //   href: "/customer/settings",
  //   icon: Settings,
  // },
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
  // {
  //   title: "Availability",
  //   href: "/technician-dashboard/availability",
  //   icon: Wrench,
  // },
  // {
  //   title: "Reviews",
  //   href: "/technician-dashboard/reviews",
  //   icon: Star,
  // },
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
  // {
  //   title: "Technicians",
  //   href: "/admin-dashboard/technicians",
  //   icon: Wrench,
  // },
  // {
  //   title: "Bookings",
  //   href: "/admin-dashboard/bookings",
  //   icon: ClipboardList,
  // },
  {
    title: "Categories",
    href: "/admin-dashboard/categories",
    icon: ChartBarStacked,
  },
];

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

  return (
    <aside className="flex h-full w-72 flex-col border-r bg-background">
      {/* Logo */}
      <div className="border-b px-6 py-5">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold"
        >
          <Shield className="h-7 w-7 text-primary" />
          <span>FixItNow</span>
        </Link>

        <p className="mt-1 text-xs text-muted-foreground">
          {role.toLowerCase()} dashboard
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 p-4">
        {links.map((item) => {
          const Icon = item.icon;

          const active =
            pathname === item.href ||
            pathname.startsWith(item.href + "/");

          return (
            <Link key={item.href} href={item.href}>
              <Button
                variant={active ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start gap-3",
                  active && "font-semibold"
                )}
              >
                <Icon className="h-5 w-5" />
                {item.title}
              </Button>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="border-t p-4">
        {/* <Button
          variant="ghost"
          className="w-full justify-start gap-3 text-red-500 hover:text-red-600"
        >
          <LogOut className="h-5 w-5" />
          Logout
        </Button> */}
        <LogoutButton className="w-full justify-start" />
      </div>
    </aside>
  );
}