"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface UserStatusBadgeProps {
  status: "ACTIVE" | "BANNED";
}

export default function UserStatusBadge({
  status,
}: UserStatusBadgeProps) {
  const isActive = status === "ACTIVE";

  
  return (
    <Badge
      className={cn(
        isActive
          ? "bg-green-100 text-green-700 hover:bg-green-100 dark:bg-green-900 dark:text-green-300"
          : "bg-red-100 text-red-700 hover:bg-red-100 dark:bg-red-900 dark:text-red-300"
      )}
    >
      {isActive ? "Active" : "Banned"}
    </Badge>
  );
}