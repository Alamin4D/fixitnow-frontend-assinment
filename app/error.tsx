"use client";

export default function Error({
  reset,
}: {
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-5">
      <h2 className="text-3xl font-bold">
        Something went wrong
      </h2>

      <button
        onClick={() => reset()}
        className="rounded bg-primary px-5 py-2 text-white"
      >
        Try Again
      </button>
    </div>
  );
}