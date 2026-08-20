import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="min-h-screen bg-background">
      {/* Ambient Background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        {/* ================= HEADER ================= */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-3">
            <Skeleton className="h-9 w-60 rounded-xl" />
            <Skeleton className="h-4 w-80 max-w-full rounded-lg" />
          </div>

          <Skeleton className="h-11 w-36 rounded-xl" />
        </div>

        {/* ================= STATS ================= */}
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border bg-card/80 p-5 shadow-sm backdrop-blur-sm"
            >
              {/* Top shimmer */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

              <div className="flex items-start justify-between">
                <div className="space-y-3">
                  <Skeleton className="h-4 w-24 rounded-md" />
                  <Skeleton className="h-8 w-24 rounded-lg" />
                </div>

                <Skeleton className="h-11 w-11 rounded-xl" />
              </div>

              <div className="mt-5 flex items-center gap-2">
                <Skeleton className="h-3 w-14 rounded-md" />
                <Skeleton className="h-3 w-24 rounded-md" />
              </div>
            </div>
          ))}
        </div>

        {/* ================= MAIN GRID ================= */}
        <div className="grid gap-6 xl:grid-cols-3">
          {/* ================= REVENUE / CHART CARD ================= */}
          <div className="overflow-hidden rounded-2xl border bg-card/80 p-6 shadow-sm backdrop-blur-sm xl:col-span-2">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-3">
                <Skeleton className="h-6 w-44 rounded-lg" />
                <Skeleton className="h-4 w-64 max-w-full rounded-md" />
              </div>

              <Skeleton className="h-9 w-24 rounded-lg" />
            </div>

            {/* Chart */}
            <div className="relative mt-8 h-72">
              {/* Horizontal lines */}
              <div className="absolute inset-0 flex flex-col justify-between">
                {Array.from({ length: 5 }).map((_, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3"
                  >
                    <Skeleton className="h-3 w-8 rounded" />
                    <div className="h-px flex-1 bg-border/60" />
                  </div>
                ))}
              </div>

              {/* Bars */}
              <div className="absolute inset-x-12 bottom-0 top-2 flex items-end gap-2 sm:gap-3">
                {[45, 62, 35, 72, 52, 82, 60, 92, 48, 68, 43, 78].map(
                  (height, index) => (
                    <Skeleton
                      key={index}
                      className="flex-1 rounded-t-lg rounded-b-sm"
                      style={{ height: `${height}%` }}
                    />
                  ),
                )}
              </div>
            </div>
          </div>

          {/* ================= RECENT ACTIVITY ================= */}
          <div className="rounded-2xl border bg-card/80 p-6 shadow-sm backdrop-blur-sm">
            <div className="space-y-3">
              <Skeleton className="h-6 w-36 rounded-lg" />
              <Skeleton className="h-4 w-52 rounded-md" />
            </div>

            <div className="mt-7 space-y-5">
              {Array.from({ length: 5 }).map((_, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3"
                >
                  <Skeleton className="h-10 w-10 shrink-0 rounded-xl" />

                  <div className="min-w-0 flex-1 space-y-2">
                    <Skeleton className="h-4 w-28 max-w-full rounded-md" />
                    <Skeleton className="h-3 w-20 rounded-md" />
                  </div>

                  <Skeleton className="h-5 w-14 rounded-full" />
                </div>
              ))}
            </div>

            <Skeleton className="mt-7 h-9 w-full rounded-xl" />
          </div>
        </div>

        {/* ================= BOTTOM TABLE ================= */}
        <div className="overflow-hidden rounded-2xl border bg-card/80 p-6 shadow-sm backdrop-blur-sm">
          {/* Header */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-3">
              <Skeleton className="h-6 w-48 rounded-lg" />
              <Skeleton className="h-4 w-72 max-w-full rounded-md" />
            </div>

            <Skeleton className="h-9 w-24 rounded-lg" />
          </div>

          {/* Table/List */}
          <div className="mt-7 space-y-3">
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="group flex items-center gap-4 rounded-xl border bg-background/50 p-4 transition-colors"
              >
                {/* Avatar */}
                <Skeleton className="h-11 w-11 shrink-0 rounded-xl" />

                {/* Main info */}
                <div className="min-w-0 flex-1 space-y-2">
                  <Skeleton className="h-4 w-44 max-w-[70%] rounded-md" />
                  <Skeleton className="h-3 w-64 max-w-[90%] rounded-md" />
                </div>

                {/* Status */}
                <Skeleton className="hidden h-6 w-20 rounded-full sm:block" />

                {/* Date */}
                <Skeleton className="hidden h-4 w-20 rounded-md md:block" />

                {/* Action */}
                <Skeleton className="h-9 w-16 rounded-lg" />
              </div>
            ))}
          </div>
        </div>

        {/* ================= FOOTER SKELETON ================= */}
        <div className="flex items-center justify-center gap-2 pb-4">
          <Skeleton className="h-3 w-20 rounded" />
          <Skeleton className="h-3 w-3 rounded-full" />
          <Skeleton className="h-3 w-24 rounded" />
        </div>
      </div>
    </main>
  );
}