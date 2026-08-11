import Link from "next/link";
import { Wrench } from "lucide-react";

import RegisterForm from "../_components/RegisterForm";

export default function RegisterPage() {
return ( <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4 py-10 sm:px-6">
{/* Background glow */} <div className="pointer-events-none absolute inset-0 overflow-hidden"> <div className="absolute left-1/2 top-[-180px] h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

    <div className="absolute bottom-[-160px] left-[-120px] h-[350px] w-[350px] rounded-full bg-blue-500/10 blur-3xl" />

    <div className="absolute right-[-120px] top-1/3 h-[320px] w-[320px] rounded-full bg-violet-500/10 blur-3xl" />
  </div>

  {/* Grid */}
  <div
    className="pointer-events-none absolute inset-0 opacity-[0.025]"
    style={{
      backgroundImage:
        "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
      backgroundSize: "40px 40px",
    }}
  />

  <div className="relative z-10 w-full max-w-2xl">

    <RegisterForm />
  </div>
</main>
);
}
