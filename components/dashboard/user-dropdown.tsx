"use client";

import Link from "next/link";
import {
  ChevronDown,
  LayoutDashboard,
  LogOut,
  Settings,
  User,
} from "lucide-react";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import LogoutButton from "./logout-button";

type Role = "CUSTOMER" | "TECHNICIAN" | "ADMIN";

interface UserDropdownProps {
  name?: string;
  email?: string;
  image?: string;
  role: Role;
}

const roleConfig = {
  CUSTOMER: {
    label: "Customer",
    dashboard: "/customer-dashboard",
    profile: "/customer-dashboard/profile",
    settings: "/customer-dashboard/settings",
  },
  TECHNICIAN: {
    label: "Technician",
    dashboard: "/technician-dashboard",
    profile: "/technician-dashboard/profile",
    settings: "/technician-dashboard/settings",
  },
  ADMIN: {
    label: "Administrator",
    dashboard: "/admin-dashboard",
    profile: "/admin-dashboard/profile",
    settings: "/admin-dashboard/settings",
  },
};

export default function UserDropdown({
  name = "John Doe",
  email = "john@example.com",
  image,
  role,
}: UserDropdownProps) {
  const initials =
    name
      ?.split(" ")
      .filter(Boolean)
      .map((item) => item[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() || "JD";

  const config = roleConfig[role];

  return (
    <DropdownMenu>
      {/* ================= TRIGGER ================= */}
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="group h-auto gap-2 rounded-xl px-1.5 py-1.5 transition-all hover:bg-muted focus-visible:ring-2 focus-visible:ring-primary/20"
        >
          {/* Avatar */}
          <div className="relative">
            <Avatar className="h-9 w-9 border-2 border-background shadow-sm">
              <AvatarImage src={image} alt={name} />

              <AvatarFallback className="bg-primary/10 text-xs font-bold text-primary">
                {initials}
              </AvatarFallback>
            </Avatar>

            {/* Online Indicator */}
            <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-background bg-green-500" />
          </div>

          {/* User Info */}
          <div className="hidden max-w-[150px] text-left md:block">
            <p className="truncate text-sm font-semibold leading-5">
              {name}
            </p>

            <p className="mt-0.5 text-[11px] font-medium text-muted-foreground">
              {config.label}
            </p>
          </div>

          <ChevronDown className="hidden h-4 w-4 text-muted-foreground transition-transform duration-200 group-data-[state=open]:rotate-180 md:block" />
        </Button>
      </DropdownMenuTrigger>

      {/* ================= CONTENT ================= */}
      <DropdownMenuContent
        align="end"
        sideOffset={10}
        className="w-72 rounded-2xl p-2 shadow-xl"
      >
        {/* User Header */}
        <DropdownMenuLabel className="p-0">
          <div className="rounded-xl bg-muted/50 p-4">
            <div className="flex items-center gap-3">
              {/* Large Avatar */}
              <Avatar className="h-11 w-11 border-2 border-background shadow-sm">
                <AvatarImage src={image} alt={name} />

                <AvatarFallback className="bg-primary/10 font-bold text-primary">
                  {initials}
                </AvatarFallback>
              </Avatar>

              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold">
                  {name}
                </p>

                <p className="mt-0.5 truncate text-xs font-normal text-muted-foreground">
                  {email}
                </p>

                <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2 py-1 text-[10px] font-semibold text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {config.label}
                </span>
              </div>
            </div>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator className="my-2" />

        {/* ================= MENU ================= */}
        <DropdownMenuGroup>
          {/* Dashboard */}
          <DropdownMenuItem
            asChild
            className="cursor-pointer rounded-xl px-3 py-2.5"
          >
            <Link
              href={config.dashboard}
              className="flex w-full items-center"
            >
              <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <LayoutDashboard className="h-4 w-4" />
              </span>

              <span className="flex-1">
                <span className="block text-sm font-medium">
                  Dashboard
                </span>

                <span className="block text-[10px] text-muted-foreground">
                  Overview & activity
                </span>
              </span>
            </Link>
          </DropdownMenuItem>

          {/* Profile */}
          <DropdownMenuItem
            asChild
            className="cursor-pointer rounded-xl px-3 py-2.5"
          >
            <Link
              href={config.profile}
              className="flex w-full items-center"
            >
              <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                <User className="h-4 w-4" />
              </span>

              <span className="flex-1">
                <span className="block text-sm font-medium">
                  Profile
                </span>

                <span className="block text-[10px] text-muted-foreground">
                  Manage your account
                </span>
              </span>
            </Link>
          </DropdownMenuItem>

          {/* Settings */}
          <DropdownMenuItem
            asChild
            className="cursor-pointer rounded-xl px-3 py-2.5"
          >
            <Link
              href={config.settings}
              className="flex w-full items-center"
            >
              <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                <Settings className="h-4 w-4" />
              </span>

              <span className="flex-1">
                <span className="block text-sm font-medium">
                  Settings
                </span>

                <span className="block text-[10px] text-muted-foreground">
                  Preferences & security
                </span>
              </span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator className="my-2" />

        {/* Logout */}
        <div className="rounded-xl transition-colors hover:bg-destructive/10">
          <LogoutButton variant="ghost"
            className="h-10 w-full justify-start rounded-xl px-3 text-destructive hover:bg-transparent hover:text-destructive"/>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}