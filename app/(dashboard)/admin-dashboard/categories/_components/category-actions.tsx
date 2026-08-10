"use client";


import DeleteCategoryDialog from "./delete-category-dialog";
import EditCategoryDialog from "./edit-category-dialog";

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  isActive: boolean;
}

interface CategoryActionsProps {
  category: Category;
}

const CategoryActions = ({
  category,
}: CategoryActionsProps) => {
  return (
    <div className="flex items-center justify-end gap-2">
      <EditCategoryDialog
        category={category}
      />

      <DeleteCategoryDialog
        categoryId={category.id}
        categoryName={category.name}
      />
    </div>
  );
};

export default CategoryActions;