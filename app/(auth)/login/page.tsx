

import LoginForm from "../_components/LoginForm";

export default function LoginPage() {
  return (<main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4 py-8 sm:px-6">
    {/* Background decoration */} <div className="pointer-events-none absolute inset-0 overflow-hidden"> <div className="absolute left-1/2 top-[-180px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="absolute bottom-[-180px] left-[-120px] h-[360px] w-[360px] rounded-full bg-blue-500/10 blur-3xl" />

      <div className="absolute right-[-120px] top-[25%] h-[320px] w-[320px] rounded-full bg-violet-500/10 blur-3xl" />
    </div>

    {/* Subtle grid */}
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.025]"
      style={{
        backgroundImage:
          "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }}
    />

    <div className="relative z-10 w-full max-w-md">
      {/* Brand */}

      {/* Login form */}
      <LoginForm />
    </div>
  </main>

  );
}
