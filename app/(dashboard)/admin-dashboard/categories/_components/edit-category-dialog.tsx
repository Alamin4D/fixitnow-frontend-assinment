"use client";

import { useState } from "react";
import { Pencil } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import CategoryForm, {
  CategoryFormValues,
} from "./category-form";

import { updateCategory } from "../_actions/updateCategory";

interface EditCategoryDialogProps {
  category: {
    id: string;
    name: string;
    description: string;
    image: string;
  };
}

const EditCategoryDialog = ({
  category,
}: EditCategoryDialogProps) => {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (
    values: CategoryFormValues
  ) => {
    try {
      setIsSubmitting(true);

      const result = await updateCategory(
        category.id,
        values
      );

      if (result.success) {
        toast.success(result.message);
        setOpen(false);
      } else {
        toast.error(result.message);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >
      <DialogTrigger asChild>
        <Button
          size="icon"
          variant="outline"
        >
          <Pencil className="h-4 w-4" />
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Edit Category
          </DialogTitle>
        </DialogHeader>

        <CategoryForm
          defaultValues={{
            name: category.name,
            description: category.description,
            image: category.image,
          }}
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
        />
      </DialogContent>
    </Dialog>
  );
};

export default EditCategoryDialog;