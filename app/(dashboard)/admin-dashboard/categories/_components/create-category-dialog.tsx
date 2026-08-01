"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

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
import { toast } from "sonner";


interface CreateCategoryDialogProps {
  onCreate: (
    values: { name: string }
  ) => Promise<{
    success: boolean;
    data?: any;
    message: string;
  }>;
}

const CreateCategoryDialog = ({
  onCreate,
}: CreateCategoryDialogProps) => {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (values: { name: string }) => {
  const result = await onCreate(values);

  if (result.success) {
    toast.success(result.message);
  } else {
    toast.error(result.message);
  }
};

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Category
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Category</DialogTitle>
        </DialogHeader>

        <CategoryForm
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
        />
      </DialogContent>
    </Dialog>
  );
};

export default CreateCategoryDialog;