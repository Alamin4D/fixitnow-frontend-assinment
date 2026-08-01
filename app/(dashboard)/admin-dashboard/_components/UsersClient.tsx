"use client";

import { useRouter } from "next/navigation";
import UsersTable, { User } from "./UsersTable";
import { banUser } from "../_actions/banUser";
import { unbanUser } from "../_actions/unbanUser";
import { toast } from "sonner";
import { useState } from "react";

interface UsersClientProps {
  users: User[];
}

export default function UsersClient({
  users,
}: UsersClientProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleBan = async (id: string) => {
    try {
      setLoading(true);

      const result = await banUser(id);

      if (result.success) {
        toast.success(result.message);
        router.refresh();
      } else {
        toast.error(result.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleUnban = async (id: string) => {
    try {
      setLoading(true);

      const result = await unbanUser(id);

      if (result.success) {
        toast.success(result.message);
        router.refresh();
      } else {
        toast.error(result.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <UsersTable
      users={users}
      onBan={handleBan}
      onUnban={handleUnban}
    />
  );
}