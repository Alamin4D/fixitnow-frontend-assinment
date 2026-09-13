import { Spinner } from "@/components/ui/spinner";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-9999 flex min-h-screen items-center justify-center bg-background/95 backdrop-blur-sm">
      <div className="flex flex-col items-center">

        {/* Premium Spinner */}
        <div className="relative flex h-20 w-20 items-center justify-center">
          {/* Glow */}
          <div className="absolute inset-0 rounded-full bg-primary/10 blur-xl" />

          {/* Outer Ring */}
          <div className="absolute inset-0 rounded-full border border-primary/20" />

          {/* Spinner */}
          <Spinner className="relative size-9 text-primary" />
        </div>

        {/* Brand */}
        <h2 className="mt-5 text-xl font-bold tracking-tight text-foreground">
          FixIt<span className="text-primary">Now</span>
        </h2>

        {/* Loading Text */}
        <p className="mt-1 text-sm text-muted-foreground">
          Preparing your experience...
        </p>

        {/* Loading Dots */}
        <div className="mt-4 flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary [animation-delay:-0.3s]" />
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary [animation-delay:-0.15s]" />
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary" />
        </div>

      </div>
    </div>
  );
};

export default Loading;