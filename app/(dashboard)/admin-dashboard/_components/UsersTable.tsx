"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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
  phone: string;
  address: string;
  createdAt: string;
  updatedAt: string;
  technicianProfile?: {
    id: string;
    location: string;
    rating: number;
    totalReviews: number;
    isAvailable: boolean;
  };
}


interface UsersTableProps {
  users: User[];
  onBan: (id: string) => void;
  onUnban: (id: string) => void;
}

export default function UsersTable({
  users,
  onBan,
  onUnban,
}: UsersTableProps) {
  if (!users.length) {
    return (
      <div className="flex h-40 items-center justify-center rounded-lg border">
        <p className="text-muted-foreground">
          No users found.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-lg border bg-background">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>User</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Joined</TableHead>
            <TableHead className="w-[60px]" />
          </TableRow>
        </TableHeader>

        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">
                {user.name}
              </TableCell>

              <TableCell>
                {user.email}
              </TableCell>

              <TableCell>
                <Badge variant="secondary">
                  {user.role}
                </Badge>
              </TableCell>

              <TableCell>
                {user.status === "BANNED" ? (
                  <Badge variant="destructive">
                    Banned
                  </Badge>
                ) : (
                  <Badge>
                    Active
                  </Badge>
                )}
              </TableCell>

              <TableCell>
                {new Date(
                  user.createdAt
                ).toLocaleDateString()}
              </TableCell>


              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      size="icon"
                      variant="ghost"
                    >
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent align="end">
                    {user.status === "BANNED" ? (
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
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}