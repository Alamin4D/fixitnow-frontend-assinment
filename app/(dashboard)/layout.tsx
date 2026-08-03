import { cookies } from "next/headers";
import DashboardShell from "@/components/dashboard/dashboard-shell";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();

  const role = cookieStore.get("role")?.value as
    | "CUSTOMER"
    | "TECHNICIAN"
    | "ADMIN";

  const name = cookieStore.get("name")?.value ?? "";
  const email = cookieStore.get("email")?.value ?? "";

  
  return (
    <DashboardShell
      role={role}
      name={name}
      email={email}
    >
      {children}
    </DashboardShell>
  );
}