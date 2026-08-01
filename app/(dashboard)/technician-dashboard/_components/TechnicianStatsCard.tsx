"use client";

import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface TechnicianStatsCardProps {
  title: string;
  value: number | string;
  icon: LucideIcon;
  description?: string;
}

export default function TechnicianStatsCard({
  title,
  value,
  icon: Icon,
  description,
}: TechnicianStatsCardProps) {
  return (
    <Card>
      <CardContent className="flex items-center justify-between p-6">
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">{title}</p>

          <h2 className="text-3xl font-bold">{value}</h2>

          {description && (
            <p className="text-xs text-muted-foreground">
              {description}
            </p>
          )}
        </div>

        <div className="rounded-full bg-primary/10 p-3">
          <Icon className="h-7 w-7 text-primary" />
        </div>
      </CardContent>
    </Card>
  );
}