import { Skeleton } from "@/components/ui/skeleton";

const PaymentSkeleton = () => {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {/* Payment Summary */}
      <div className="lg:col-span-2 rounded-xl border bg-card p-6 shadow-sm">
        <Skeleton className="mb-6 h-7 w-48" />

        <div className="space-y-5">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="flex items-center justify-between"
            >
              <Skeleton className="h-5 w-28" />
              <Skeleton className="h-5 w-40" />
            </div>
          ))}

          <div className="border-t pt-5">
            <div className="flex items-center justify-between">
              <Skeleton className="h-6 w-24" />
              <Skeleton className="h-8 w-24" />
            </div>
          </div>
        </div>
      </div>

      {/* Payment Method */}
      <div className="rounded-xl border bg-card p-6 shadow-sm">
        <Skeleton className="mb-6 h-7 w-40" />

        <div className="space-y-4 rounded-lg border p-4">
          <Skeleton className="h-12 w-12 rounded-lg" />
          <Skeleton className="h-5 w-36" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-2/3" />
        </div>

        <Skeleton className="mt-6 h-11 w-full rounded-md" />
      </div>
    </div>
  );
};

export default PaymentSkeleton;