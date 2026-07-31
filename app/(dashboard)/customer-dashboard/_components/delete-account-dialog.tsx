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
import { Loader2, Trash2 } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface DeleteAccountDialogProps {
  onDelete?: () => Promise<void>;
}

export function DeleteAccountDialog({
  onDelete,
}: DeleteAccountDialogProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    try {
      setLoading(true);

      if (onDelete) {
        await onDelete();
      } else {
        // TODO:
        // await deleteAccountAction();

        await new Promise((resolve) => setTimeout(resolve, 1500));
      }

      toast.success("Your account has been deleted.");

      router.push("/");
      router.refresh();
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete account.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">
          <Trash2 className="mr-2 h-4 w-4" />
          Delete Account
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Delete your account?
          </AlertDialogTitle>

          <AlertDialogDescription>
            This action cannot be undone. Your profile, bookings,
            reviews, and all associated data will be permanently
            removed from the platform.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel disabled={loading}>
            Cancel
          </AlertDialogCancel>

          <AlertDialogAction
            onClick={(e) => {
              e.preventDefault();
              handleDelete();
            }}
            disabled={loading}
            className="bg-destructive hover:bg-destructive/90"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Deleting...
              </>
            ) : (
              <>
                <Trash2 className="mr-2 h-4 w-4" />
                Delete Account
              </>
            )}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}