import {
  LayoutDashboard,
  CalendarClock,
  CreditCard,
  Star,
  User,
  Settings,
  LogOut,
  Briefcase,
  Clock3,
  Wallet,
  Users,
  FolderTree,
  ClipboardList,
  ChartColumn,
} from "lucide-react";

export type UserRole = "CUSTOMER" | "TECHNICIAN" | "ADMIN";

export interface DashboardMenuItem {
  title: string;
  href: string;
  icon: React.ElementType;
}

export const dashboardMenus: Record<UserRole, DashboardMenuItem[]> = {
  CUSTOMER: [
    {
      title: "Dashboard",
      href: "/dashboard/customer",
      icon: LayoutDashboard,
    },
    {
      title: "My Bookings",
      href: "/dashboard/customer/bookings",
      icon: CalendarClock,
    },
    {
      title: "Payments",
      href: "/dashboard/customer/payments",
      icon: CreditCard,
    },
    {
      title: "Reviews",
      href: "/dashboard/customer/reviews",
      icon: Star,
    },
    {
      title: "Profile",
      href: "/dashboard/customer/profile",
      icon: User,
    },
    {
      title: "Settings",
      href: "/dashboard/customer/settings",
      icon: Settings,
    },
  ],

  TECHNICIAN: [
    {
      title: "Dashboard",
      href: "/dashboard/technician",
      icon: LayoutDashboard,
    },
    {
      title: "Bookings",
      href: "/dashboard/technician/bookings",
      icon: Briefcase,
    },
    {
      title: "Availability",
      href: "/dashboard/technician/availability",
      icon: Clock3,
    },
    {
      title: "Services",
      href: "/dashboard/technician/services",
      icon: FolderTree,
    },
    {
      title: "Earnings",
      href: "/dashboard/technician/earnings",
      icon: Wallet,
    },
    {
      title: "Profile",
      href: "/dashboard/technician/profile",
      icon: User,
    },
    {
      title: "Settings",
      href: "/dashboard/technician/settings",
      icon: Settings,
    },
  ],

  ADMIN: [
    {
      title: "Dashboard",
      href: "/dashboard/admin",
      icon: LayoutDashboard,
    },
    {
      title: "Users",
      href: "/dashboard/admin/users",
      icon: Users,
    },
    {
      title: "Categories",
      href: "/dashboard/admin/categories",
      icon: FolderTree,
    },
    {
      title: "Bookings",
      href: "/dashboard/admin/bookings",
      icon: ClipboardList,
    },
    {
      title: "Analytics",
      href: "/dashboard/admin/analytics",
      icon: ChartColumn,
    },
    {
      title: "Settings",
      href: "/dashboard/admin/settings",
      icon: Settings,
    },
  ],
};

export const logoutMenu = {
  title: "Logout",
  href: "/logout",
  icon: LogOut,
};