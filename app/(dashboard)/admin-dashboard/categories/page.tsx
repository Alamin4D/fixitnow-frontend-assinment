import { getCategories } from "./_actions/getCategories";

import CategoriesTable from "./_components/categories-table";
import CreateCategoryDialog from "./_components/create-category-dialog";

import { createCategory } from "./_actions/createCategory";
// import { updateCategory } from "./_actions/updateCategory";
import { deleteCategory } from "./_actions/deleteCategory";

const CategoriesPage = async () => {
  const result = await getCategories();

  const categories = result.success
    ? result.data
    : [];

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            Categories
          </h1>

          <p className="text-muted-foreground">
            Manage service categories.
          </p>
        </div>

        <CreateCategoryDialog
          onCreate={createCategory}
        />
      </div>

      <CategoriesTable
        categories={categories}
        // onUpdate={updateCategory}
        onDelete={deleteCategory}
      />
    </div>
  );
};

export default CategoriesPage;