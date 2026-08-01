"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";

interface UsersLoadingProps {
  rows?: number;
}

export default function UsersLoading({
  rows = 5,
}: UsersLoadingProps) {
  return (
    <div className="overflow-hidden rounded-lg border bg-background">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>User</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Joined</TableHead>
            <TableHead className="w-[60px]" />
          </TableRow>
        </TableHeader>

        <TableBody>
          {Array.from({ length: rows }).map((_, index) => (
            <TableRow key={index}>
              <TableCell>
                <Skeleton className="h-5 w-32" />
              </TableCell>

              <TableCell>
                <Skeleton className="h-5 w-48" />
              </TableCell>

              <TableCell>
                <Skeleton className="h-6 w-24 rounded-full" />
              </TableCell>

              <TableCell>
                <Skeleton className="h-6 w-20 rounded-full" />
              </TableCell>

              <TableCell>
                <Skeleton className="h-5 w-28" />
              </TableCell>

              <TableCell>
                <Skeleton className="h-8 w-8 rounded-md" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}