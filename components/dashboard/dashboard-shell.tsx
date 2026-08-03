"use client";

import { useState } from "react";
import { X } from "lucide-react";

import DashboardNavbar from "./dashboard-navbar";
import DashboardSidebar from "./dashboard-sidebar";
import { Button } from "@/components/ui/button";

type Role = "CUSTOMER" | "TECHNICIAN" | "ADMIN";

interface DashboardShellProps {
  children: React.ReactNode;
  role: Role;
  name?: string;
  email?: string;
}


export default function DashboardShell({
  children,
  role,
  name,
  email,
}: DashboardShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="flex">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block">
          <DashboardSidebar role={role} />
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`fixed left-0 top-0 z-50 h-screen transform transition-transform duration-300 lg:hidden ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="relative h-full">
            <DashboardSidebar role={role} />

            <Button
              size="icon"
              variant="ghost"
              className="absolute right-3 top-3"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="flex min-h-screen flex-1 flex-col">
          <DashboardNavbar
            name={name}
            email={email}
            role={role}
            onMenuClick={() => setSidebarOpen(true)}
          />

          <main className="flex-1 p-4 md:p-6 lg:p-8">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}