"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";


export interface User {
  id: string;
  name: string;
  email: string;
  role: "CUSTOMER" | "TECHNICIAN" | "ADMIN";
  status: "ACTIVE" | "BANNED";
  createdAt: string;
}

interface UserRowProps {
  user: User;
  onBan: (id: string) => void;
  onUnban: (id: string) => void;
}

export default function UserRow({
  user,
  onBan,
  onUnban,
}: UserRowProps) {
  const isBanned = user.status === "BANNED";

  return (
    <>
      <td className="px-4 py-3 font-medium">
        {user.name}
      </td>

      <td className="px-4 py-3">
        {user.email}
      </td>

      <td className="px-4 py-3">
        <Badge variant="secondary">
          {user.role}
        </Badge>
      </td>

      <td className="px-4 py-3">
        {isBanned ? (
          <Badge variant="destructive">
            Banned
          </Badge>
        ) : (
          <Badge>
            Active
          </Badge>
        )}
      </td>

      <td className="px-4 py-3">
        {new Date(user.createdAt).toLocaleDateString()}
      </td>

      <td className="px-4 py-3 text-right">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            {isBanned ? (
              <DropdownMenuItem
                onClick={() => onUnban(user.id)}
              >
                Unban User
              </DropdownMenuItem>
            ) : (
              <DropdownMenuItem
                className="text-red-600"
                onClick={() => onBan(user.id)}
              >
                Ban User
              </DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </td>
    </>
  );
}