"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock } from "lucide-react";

interface Availability {
  id: string;
  day: string;
  startTime: string;
  endTime: string;
  isAvailable: boolean;
}


interface TechnicianAvailabilityCardProps {
  availability: Availability[];
}

export default function TechnicianAvailabilityCard({
  availability,
}: TechnicianAvailabilityCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Availability Schedule</CardTitle>
      </CardHeader>

      <CardContent>
        {availability.length === 0 ? (
          <div className="py-8 text-center text-sm text-muted-foreground">
            No availability schedule found.
          </div>
        ) : (
          <div className="space-y-4">
            {availability.map((slot) => (
              <div
                key={slot.id}
                className="flex items-center justify-between rounded-lg border p-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2 font-medium">
                    <CalendarDays className="h-4 w-4 text-primary" />
                    <span>{slot.day}</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>
                      {slot.startTime} - {slot.endTime}
                    </span>
                  </div>
                </div>

                <Badge
                  variant={slot.isAvailable ? "default" : "destructive"}
                >
                  {slot.isAvailable ? "Available" : "Unavailable"}
                </Badge>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}