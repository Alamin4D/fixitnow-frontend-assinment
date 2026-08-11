import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto space-y-8 px-4 py-8 sm:px-6 lg:py-10">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-3">
            <Skeleton className="h-9 w-64 rounded-lg" />
            <Skeleton className="h-4 w-80 max-w-full rounded-md" />
          </div>

          <Skeleton className="h-10 w-32 rounded-lg" />
        </div>

        {/* Stats */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="rounded-xl border bg-card p-5 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <Skeleton className="h-4 w-24 rounded-md" />
                <Skeleton className="h-9 w-9 rounded-lg" />
              </div>

              <Skeleton className="mt-5 h-8 w-20 rounded-md" />
              <Skeleton className="mt-2 h-3 w-28 rounded-md" />
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main Card */}
          <div className="rounded-2xl border bg-card p-6 shadow-sm lg:col-span-2">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <Skeleton className="h-6 w-40 rounded-md" />
                <Skeleton className="h-4 w-56 rounded-md" />
              </div>

              <Skeleton className="h-9 w-24 rounded-lg" />
            </div>

            {/* Chart / Content */}
            <div className="mt-8 flex h-72 items-end gap-3">
              {[45, 65, 35, 75, 55, 85, 60, 90, 50, 70, 45, 80].map(
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

          {/* Side Card */}
          <div className="rounded-2xl border bg-card p-6 shadow-sm">
            <div className="space-y-2">
              <Skeleton className="h-6 w-36 rounded-md" />
              <Skeleton className="h-4 w-48 rounded-md" />
            </div>

            <div className="mt-6 space-y-5">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Skeleton className="h-10 w-10 shrink-0 rounded-full" />

                  <div className="flex-1 space-y-2">
                    <Skeleton className="h-4 w-28 rounded-md" />
                    <Skeleton className="h-3 w-20 rounded-md" />
                  </div>

                  <Skeleton className="h-5 w-14 rounded-md" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="rounded-2xl border bg-card p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <Skeleton className="h-6 w-44 rounded-md" />
              <Skeleton className="h-4 w-64 rounded-md" />
            </div>

            <Skeleton className="h-9 w-20 rounded-lg" />
          </div>

          <div className="mt-6 space-y-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="flex items-center gap-4 rounded-xl border p-4"
              >
                <Skeleton className="h-11 w-11 shrink-0 rounded-lg" />

                <div className="flex-1 space-y-2">
                  <Skeleton className="h-4 w-40 max-w-full rounded-md" />
                  <Skeleton className="h-3 w-56 max-w-full rounded-md" />
                </div>

                <Skeleton className="hidden h-6 w-20 rounded-full sm:block" />

                <Skeleton className="h-8 w-16 rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}