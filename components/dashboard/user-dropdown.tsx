"use client";

import Link from "next/link";
import {
    ChevronDown,
    LogOut,
    Settings,
    User,
    LayoutDashboard,
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
    onLogout?: () => void;
}

export default function UserDropdown({
    name = "John Doe",
    email = "john@example.com",
    image,
    role,
    onLogout,
}: UserDropdownProps) {
    const initials = name
        .split(" ")
        .map((item) => item[0])
        .join("")
        .toUpperCase();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className="h-auto gap-2 px-2 hover:bg-accent"
                >
                    <Avatar className="h-9 w-9">
                        <AvatarImage src={image} alt={name} />
                        <AvatarFallback>{initials}</AvatarFallback>
                    </Avatar>

                    <div className="hidden text-left md:block">
                        <p className="text-sm font-semibold leading-none">
                            {name}
                        </p>

                        <p className="mt-1 text-xs text-muted-foreground">
                            {role}
                        </p>
                    </div>

                    <ChevronDown className="hidden h-4 w-4 text-muted-foreground md:block" />
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
                align="end"
                className="w-64"
            >
                <DropdownMenuLabel>
                    <div className="space-y-1">
                        <p className="font-medium">{name}</p>

                        <p className="text-xs text-muted-foreground">
                            {email}
                        </p>
                    </div>
                </DropdownMenuLabel>

                <DropdownMenuSeparator />

                <DropdownMenuGroup>
                    <DropdownMenuItem asChild>
                        <Link
                            href={`/dashboard/${role.toLowerCase()}`}
                            className="flex w-full items-center"
                        >
                            <LayoutDashboard className="mr-2 h-4 w-4" />
                            Dashboard
                        </Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem asChild>
                        <Link
                            href={`/dashboard/${role.toLowerCase()}/profile`}
                            className="flex w-full items-center"
                        >
                            <User className="mr-2 h-4 w-4" />
                            Profile
                        </Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem asChild>
                        <Link
                            href={`/dashboard/${role.toLowerCase()}/settings`}
                            className="flex w-full items-center"
                        >
                            <Settings className="mr-2 h-4 w-4" />
                            Settings
                        </Link>
                    </DropdownMenuItem>
                </DropdownMenuGroup>

                <DropdownMenuSeparator />

                <DropdownMenuItem asChild>
                    <LogoutButton
                        variant="ghost"
                        className="w-full justify-start"
                    />
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}