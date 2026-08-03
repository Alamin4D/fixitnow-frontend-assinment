"use client";

import { ArrowDown, ArrowUp } from "lucide-react";
import { LucideIcon } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  description?: string;

  trend?: {
    value: string;
    positive: boolean;
  };

  className?: string;
}

export default function StatsCard({
  title,
  value,
  icon: Icon,
  description,
  trend,
  className,
}: StatsCardProps) {
  return (
    <Card
      className={cn(
        "transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
        className
      )}
    >
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground">
              {title}
            </p>

            <h2 className="text-3xl font-bold tracking-tight">
              {value}
            </h2>

            {description && (
              <p className="text-sm text-muted-foreground">
                {description}
              </p>
            )}
          </div>

          <div className="rounded-xl bg-primary/10 p-3">
            <Icon className="h-6 w-6 text-primary" />
          </div>
        </div>

        {trend && (
          <div className="mt-5 flex items-center gap-2">
            <div
              className={cn(
                "flex items-center rounded-full px-2 py-1 text-xs font-semibold",
                trend.positive
                  ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                  : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
              )}
            >
              {trend.positive ? (
                <ArrowUp className="mr-1 h-3 w-3" />
              ) : (
                <ArrowDown className="mr-1 h-3 w-3" />
              )}

              {trend.value}
            </div>

            <span className="text-xs text-muted-foreground">
              vs last month
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}