"use client";

import { Badge } from "@/components/ui/badge";

export type BookingStatus =
  | "REQUESTED"
  | "ACCEPTED"
  | "DECLINED"
  | "PAID"
  | "IN_PROGRESS"
  | "COMPLETED"
  | "CANCELLED";

interface BookingStatusBadgeProps {
  status: BookingStatus;
}

export default function BookingStatusBadge({
  status,
}: BookingStatusBadgeProps) {
  const getVariant = (
    status: BookingStatus
  ): "default" | "secondary" | "destructive" | "outline" => {
    switch (status) {
      case "COMPLETED":
        return "default";

      case "REQUESTED":
      case "PAID":
      case "IN_PROGRESS":
        return "secondary";

      case "DECLINED":
      case "CANCELLED":
        return "destructive";

      case "ACCEPTED":
      default:
        return "outline";
    }
  };

  const formatStatus = (status: BookingStatus) =>
    status
      .toLowerCase()
      .replace(/_/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <Badge variant={getVariant(status)}>
      {formatStatus(status)}
    </Badge>
  );
}