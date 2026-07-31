"use client";

import { useTransition } from "react";
import { LogOut, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { logoutAction } from "@/app/(auth)/_actions/logoutAction";


interface LogoutButtonProps {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  className?: string;
}

export default function LogoutButton({
  variant = "ghost",
  className,
}: LogoutButtonProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleLogout = () => {
    startTransition(async () => {
      const result = await logoutAction();

      // if (result.success) {
      //   router.replace("/login");
      //   router.refresh();
      // }
    });
  };

  return (
    <Button
      variant={variant}
      className={className}
      onClick={handleLogout}
      disabled={isPending}
    >
      {isPending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Logging out...
        </>
      ) : (
        <>
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </>
      )}
    </Button>
  );
}