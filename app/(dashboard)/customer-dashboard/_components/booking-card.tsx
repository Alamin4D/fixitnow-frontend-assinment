"use client";

import Link from "next/link";
import { Calendar, DollarSign, Eye, User, Wrench } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export type BookingStatus =
  | "PENDING"
  | "ACCEPTED"
  | "COMPLETED"
  | "CANCELLED";

export interface BookingCardProps {
  id: string;
  serviceName: string;
  customerName?: string;
  technicianName?: string;
  bookingDate: string;
  totalPrice: number;
  status: BookingStatus;
  showCustomer?: boolean;
  showTechnician?: boolean;
}


const getStatusVariant = (status: BookingStatus) => {
  switch (status) {
    case "COMPLETED":
      return "default";

    case "ACCEPTED":
      return "secondary";

    case "CANCELLED":
      return "destructive";

    default:
      return "outline";
  }
};

export default function BookingCard({
  id,
  serviceName,
  customerName,
  technicianName,
  bookingDate,
  totalPrice,
  status,
  showCustomer = false,
  showTechnician = true,
}: BookingCardProps) {
  return (
    <Card className="transition-shadow hover:shadow-md">
      <CardContent className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold">{serviceName}</h3>

            <p className="text-sm text-muted-foreground">
              Booking #{id.slice(0, 8)}
            </p>
          </div>

          <Badge variant={getStatusVariant(status)}>{status}</Badge>
        </div>

        <div className="space-y-3 text-sm">
          {showCustomer && customerName && (
            <div className="flex items-center gap-2 text-muted-foreground">
              <User className="h-4 w-4" />
              <span>{customerName}</span>
            </div>
          )}

          {showTechnician && technicianName && (
            <div className="flex items-center gap-2 text-muted-foreground">
              <Wrench className="h-4 w-4" />
              <span>{technicianName}</span>
            </div>
          )}

          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>
              {new Date(bookingDate).toLocaleDateString()}
            </span>
          </div>

          <div className="flex items-center gap-2 font-medium">
            <DollarSign className="h-4 w-4" />
            <span>${totalPrice}</span>
          </div>
        </div>

        <Button asChild className="w-full">
          <Link href={`/dashboard/bookings/${id}`}>
            <Eye className="mr-2 h-4 w-4" />
            View Details
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}