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
import CategoryActions from "./category-actions";

type Category = {
  id: string;
  name: string;
  description: string;
  image: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  _count: {
    services: number;
  };
};

interface CategoriesTableProps {
  categories: Category[];
  onEdit?: (category: Category) => void;
  onDelete?: (id: string) => Promise<{
    success: boolean;
    message: string;
  }>;
}

export default function CategoriesTable({
  categories,
}: CategoriesTableProps) {
  return (
    <div className="rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Image</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Services</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {categories.length ? (
            categories.map((category) => (
              <TableRow key={category.id}>
                {/* Image */}
                <TableCell>
                  <div className="h-14 w-14 overflow-hidden rounded-lg border bg-muted">
                    {category.image ? (
                      <img
                        src={category.image}
                        alt={category.name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-xs text-muted-foreground">
                        No Image
                      </div>
                    )}
                  </div>
                </TableCell>

                <TableCell className="font-medium">
                  {category.name}
                </TableCell>

                <TableCell>{category.description}</TableCell>

                <TableCell>
                  {category._count.services}
                </TableCell>

                <TableCell>
                  <Badge
                    variant={
                      category.isActive
                        ? "default"
                        : "secondary"
                    }
                  >
                    {category.isActive
                      ? "Active"
                      : "Inactive"}
                  </Badge>
                </TableCell>

                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <CategoryActions category={category} />
                  </div>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={6}
                className="py-8 text-center"
              >
                No categories found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}