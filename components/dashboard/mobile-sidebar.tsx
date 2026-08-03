"use client";

import DashboardSidebar from "./dashboard-sidebar";

import {
  Sheet,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";

type Role = "CUSTOMER" | "TECHNICIAN" | "ADMIN";

interface MobileSidebarProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  role: Role;
}


export default function MobileSidebar({
  open,
  onOpenChange,
  role,
}: MobileSidebarProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="left"
        className="w-72 p-0"
      >
        {/* Hidden title for accessibility */}
        <SheetTitle className="sr-only">
          Dashboard Navigation
        </SheetTitle>

        <DashboardSidebar role={role} />
      </SheetContent>
    </Sheet>
  );
}