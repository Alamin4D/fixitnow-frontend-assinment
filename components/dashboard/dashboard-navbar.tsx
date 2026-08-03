"use client";

import Link from "next/link";
import { Bell, Menu, Search } from "lucide-react";


import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import LogoutButton from "./logout-button";
import UserDropdown from "./user-dropdown";

interface DashboardNavbarProps {
    name?: string;
    email?: string;
    role?: "CUSTOMER" | "TECHNICIAN" | "ADMIN";
    onMenuClick?: () => void;
}

export default function DashboardNavbar({
    name = "John Doe",
    email = "john@example.com",
    role = "CUSTOMER",
    onMenuClick,
}: DashboardNavbarProps) {
    return (
        <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60 lg:px-6">
            {/* Left */}
            <div className="flex items-center gap-3">
                <Button
                    variant="ghost"
                    size="icon"
                    className="lg:hidden"
                    onClick={onMenuClick}
                >
                    <Menu className="h-5 w-5" />
                </Button>

                <div className="hidden md:flex items-center relative w-72">
                    <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />

                    <Input
                        placeholder="Search..."
                        className="pl-9"
                    />
                </div>
            </div>

            {/* Right */}
            <div className="flex items-center gap-3">
                {/* Notification */}
                <Button
                    variant="ghost"
                    size="icon"
                    className="relative"
                >
                    <Bell className="h-5 w-5" />

                    <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
                </Button>

                {/* User */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <UserDropdown
                            name={name}
                            email={email}
                            role={role}
                        />
                    </DropdownMenuTrigger>

                    <DropdownMenuContent
                        align="end"
                        className="w-60"
                    >
                        <div className="px-2 py-1.5">
                            <p className="font-medium">{name}</p>

                            <p className="text-xs text-muted-foreground">
                                {email}
                            </p>
                        </div>

                        <DropdownMenuSeparator />

                        <DropdownMenuItem asChild>
                            <Link href="/dashboard/profile">
                                Profile
                            </Link>
                        </DropdownMenuItem>

                        <DropdownMenuItem asChild>
                            <Link href="/dashboard/settings">
                                Settings
                            </Link>
                        </DropdownMenuItem>

                        <DropdownMenuSeparator />

                        <DropdownMenuItem className="text-red-600 focus:text-red-600">
                            <LogoutButton />
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    );
}