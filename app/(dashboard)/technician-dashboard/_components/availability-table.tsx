"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";


export type Availability = {
  id: string;
  day: string;
  startTime: string;
  endTime: string;
  isAvailable: boolean;
};

type Props = {
  availabilities: Availability[];
  onEdit?: (availability: Availability) => void;
  onDelete?: (id: string) => void;
};

const AvailabilityTable = ({
  availabilities,
  onEdit,
  onDelete,
}: Props) => {
  if (availabilities.length === 0) {
    return (
      <div className="rounded-lg border border-dashed p-10 text-center text-muted-foreground">
        No availability schedule found.
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Day</TableHead>
            <TableHead>Start Time</TableHead>
            <TableHead>End Time</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {availabilities.map((availability) => (
            <TableRow key={availability.id}>
              <TableCell className="font-medium">
                {availability.day}
              </TableCell>

              <TableCell>{availability.startTime}</TableCell>

              <TableCell>{availability.endTime}</TableCell>

              <TableCell>
                <Badge
                  variant={
                    availability.isAvailable ? "default" : "secondary"
                  }
                >
                  {availability.isAvailable
                    ? "Available"
                    : "Unavailable"}
                </Badge>
              </TableCell>

              <TableCell className="text-right space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onEdit?.(availability)}
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
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AvailabilityTable;