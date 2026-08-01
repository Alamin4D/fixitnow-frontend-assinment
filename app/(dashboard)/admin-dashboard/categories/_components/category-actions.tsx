"use client";

import EditCategoryDialog from "./edit-category-dialog";
import DeleteCategoryDialog from "./delete-category-dialog";
import { CategoryFormValues } from "./category-form";

export interface Category {
  id: string;
  name: string;
}

interface CategoryActionsProps {
  category: Category;
  onUpdate: (
    id: string,
    values: CategoryFormValues
  ) => Promise<void> | void;
  onDelete: (id: string) => Promise<void> | void;
}

const CategoryActions = ({
  category,
  onUpdate,
  onDelete,
}: CategoryActionsProps) => {
  return (
    <div className="flex items-center justify-end gap-2">
      <EditCategoryDialog
        category={category}
        onUpdate={onUpdate}
      />

      <DeleteCategoryDialog
        categoryId={category.id}
        categoryName={category.name}
        onDelete={onDelete}
      />
    </div>
  );
};

export default CategoryActions;