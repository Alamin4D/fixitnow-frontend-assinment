"use client";

import { Search, SlidersHorizontal } from "lucide-react";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export type BookingStatus =
  | "ALL"
  | "PENDING"
  | "ACCEPTED"
  | "IN_PROGRESS"
  | "COMPLETED"
  | "CANCELLED";

  
interface BookingFiltersProps {
  search: string;
  status: BookingStatus;
  sort: string;

  onSearchChange: (value: string) => void;
  onStatusChange: (value: BookingStatus) => void;
  onSortChange: (value: string) => void;
  onReset?: () => void;
}

export default function BookingFilters({
  search,
  status,
  sort,
  onSearchChange,
  onStatusChange,
  onSortChange,
  onReset,
}: BookingFiltersProps) {
  return (
    <div className="flex flex-col gap-4 rounded-xl border bg-background p-4 md:flex-row md:items-center md:justify-between">
      {/* Search */}
      <div className="relative w-full md:max-w-sm">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

        <Input
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search bookings..."
          className="pl-10"
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        {/* Status */}
        <Select
          value={status}
          onValueChange={(value) =>
            onStatusChange(value as BookingStatus)
          }
        >
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="ALL">All Status</SelectItem>
            <SelectItem value="PENDING">Pending</SelectItem>
            <SelectItem value="ACCEPTED">Accepted</SelectItem>
            <SelectItem value="IN_PROGRESS">
              In Progress
            </SelectItem>
            <SelectItem value="COMPLETED">
              Completed
            </SelectItem>
            <SelectItem value="CANCELLED">
              Cancelled
            </SelectItem>
          </SelectContent>
        </Select>

        {/* Sort */}
        <Select value={sort} onValueChange={onSortChange}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SlidersHorizontal className="mr-2 h-4 w-4" />
            <SelectValue />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="newest">
              Newest First
            </SelectItem>

            <SelectItem value="oldest">
              Oldest First
            </SelectItem>

            <SelectItem value="price-high">
              Price: High → Low
            </SelectItem>

            <SelectItem value="price-low">
              Price: Low → High
            </SelectItem>
          </SelectContent>
        </Select>

        {onReset && (
          <Button
            variant="outline"
            onClick={onReset}
          >
            Reset
          </Button>
        )}
      </div>
    </div>
  );
}