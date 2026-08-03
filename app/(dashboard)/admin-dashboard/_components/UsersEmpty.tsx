"use client";

import { Users } from "lucide-react";
import { Button } from "@/components/ui/button";

interface UsersEmptyProps {
  message?: string;
  onReset?: () => void;
}


export default function UsersEmpty({
  message = "There are no users available.",
  onReset,
}: UsersEmptyProps) {
  return (
    <div className="flex min-h-[300px] flex-col items-center justify-center rounded-lg border bg-background text-center">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-muted">
        <Users className="h-6 w-6 text-muted-foreground" />
      </div>

      <h3 className="text-lg font-semibold">
        No Users Found
      </h3>

      <p className="mt-2 max-w-sm text-sm text-muted-foreground">
        {message}
      </p>

      {onReset && (
        <Button
          onClick={onReset}
          variant="outline"
          className="mt-5"
        >
          Reset Filters
        </Button>
      )}
    </div>
  );
}