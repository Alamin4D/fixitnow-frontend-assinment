"use client";

import { banUser } from "../_actions/banUser";
import { unbanUser } from "../_actions/unbanUser";
import { toast } from "sonner";
import BanUserDialog from "./BanUserDialog";
import UnbanUserDialog from "./UnbanUserDialog";

interface UserActionsProps {
  userId: string;
  userName: string;
  isBlocked: boolean;
}

export default function UserActions({
  userId,
  userName,
  isBlocked,
}: UserActionsProps) {

  const handleBan = async (id: string) => {
    const result = await banUser(id);

    if (result.success) {
      toast.success(result.message);
    } else {
      toast.error(result.message);
    }
  };

  const handleUnban = async (id: string) => {
    const result = await unbanUser(id);

    if (result.success) {
      toast.success(result.message);
    } else {
      toast.error(result.message);
    }
  };

  return (
    <>
      {isBlocked ? (
        <UnbanUserDialog
          userId={userId}
          userName={userName}
          onConfirm={handleUnban}
        />
      ) : (
        <BanUserDialog
          userId={userId}
          userName={userName}
          onConfirm={handleBan}
        />
      )}
    </>
  );
}