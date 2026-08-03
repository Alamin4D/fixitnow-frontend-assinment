"use client";

import { Skeleton } from "@/components/ui/skeleton";

interface BookingLoadingProps {
  rows?: number;
}


export default function BookingLoading({
  rows = 5,
}: BookingLoadingProps) {
  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <Skeleton className="h-10 w-full md:w-80" />

        <div className="flex gap-3">
          <Skeleton className="h-10 w-40" />
          <Skeleton className="h-10 w-40" />
          <Skeleton className="h-10 w-24" />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl border">
        <div className="border-b p-4">
          <div className="grid grid-cols-6 gap-4">
            {Array.from({ length: 6 }).map((_, index) => (
              <Skeleton
                key={index}
                className="h-5 w-full"
              />
            ))}
          </div>
        </div>

        <div className="divide-y">
          {Array.from({ length: rows }).map((_, row) => (
            <div
              key={row}
              className="grid grid-cols-6 items-center gap-4 p-4"
            >
              <Skeleton className="h-5 w-40" />
              <Skeleton className="h-5 w-32" />
              <Skeleton className="h-5 w-32" />
              <Skeleton className="h-5 w-28" />
              <Skeleton className="h-8 w-24 rounded-full" />
              <Skeleton className="ml-auto h-9 w-9 rounded-md" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}