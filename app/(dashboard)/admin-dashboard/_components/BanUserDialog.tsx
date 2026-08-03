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

interface BanUserDialogProps {
  userId: string;
  userName: string;
  onConfirm: (id: string) => Promise<void>;
}

export default function BanUserDialog({
  userId,
  userName,
  onConfirm,
}: BanUserDialogProps) {
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
        <Button
          variant="ghost"
          className="text-red-600 hover:text-red-700"
        >
          Ban User
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Ban this user?
          </AlertDialogTitle>

          <AlertDialogDescription>
            Are you sure you want to ban{" "}
            <span className="font-semibold">
              {userName}
            </span>
            ? This user will no longer be able to access
            the platform.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel disabled={loading}>
            Cancel
          </AlertDialogCancel>

          <AlertDialogAction
            disabled={loading}
            className="bg-red-600 hover:bg-red-700"
            onClick={handleConfirm}
          >
            {loading ? "Banning..." : "Ban User"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}