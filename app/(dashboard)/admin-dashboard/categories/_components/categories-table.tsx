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
import { Pencil } from "lucide-react";
import DeleteCategoryDialog from "./delete-category-dialog";
import CategoryActions from "./category-actions";

type Category = {
  id: string;
  name: string;
  description: string;
  icon: string;
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
  onEdit,
  onDelete,
}: CategoriesTableProps) {
  return (
    <div className="rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Icon</TableHead>
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
                <TableCell>{category.icon}</TableCell>

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