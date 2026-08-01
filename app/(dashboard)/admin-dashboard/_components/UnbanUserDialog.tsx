"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface UnbanUserDialogProps {
  userId: string;
  userName: string;
  onConfirm: (id: string) => Promise<void>;
}

export default function UnbanUserDialog({
  userId,
  userName,
  onConfirm,
}: UnbanUserDialogProps) {
  const [loading, setLoading] = useState(false);

  const handleConfirm = async () => {
    try {
      setLoading(true);
      await onConfirm(userId);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="ghost">
          Unban User
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Unban this user?
          </AlertDialogTitle>

          <AlertDialogDescription>
            Are you sure you want to unban{" "}
            <span className="font-semibold">
              {userName}
            </span>
            ? This user will regain access to the platform.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel disabled={loading}>
            Cancel
          </AlertDialogCancel>

          <AlertDialogAction
            disabled={loading}
            className="bg-green-600 hover:bg-green-700"
            onClick={handleConfirm}
          >
            {loading ? "Unbanning..." : "Unban User"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}