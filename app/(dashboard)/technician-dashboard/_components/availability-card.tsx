"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar } from "lucide-react";

type Availability = {
  id: string;
  day: string;
  startTime: string;
  endTime: string;
  isAvailable: boolean;
};


type Props = {
  availability: Availability;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
};

const AvailabilityCard = ({
  availability,
  onEdit,
  onDelete,
}: Props) => {
  return (
    <Card>
      <CardContent className="flex flex-col gap-4 p-5 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Calendar className="size-4 text-primary" />
            <span className="font-semibold">{availability.day}</span>
          </div>

          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="size-4" />
            <span>
              {availability.startTime} - {availability.endTime}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Badge
            variant={availability.isAvailable ? "default" : "secondary"}
          >
            {availability.isAvailable ? "Available" : "Unavailable"}
          </Badge>

          <Button
            variant="outline"
            size="sm"
            onClick={() => onEdit?.(availability.id)}
          >
            Edit
          </Button>

          <Button
            variant="destructive"
            size="sm"
            onClick={() => onDelete?.(availability.id)}
          >
            Delete
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AvailabilityCard;