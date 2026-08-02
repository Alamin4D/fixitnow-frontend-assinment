"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const categorySchema = z.object({
  name: z
    .string()
    .min(2, "Category name must be at least 2 characters"),

  description: z
    .string()
    .min(5, "Description must be at least 5 characters"),

  icon: z.string().min(1, "Icon is required"),
});

export type CategoryFormValues = z.infer<
  typeof categorySchema
>;

interface CategoryFormProps {
  defaultValues?: CategoryFormValues;
  isSubmitting?: boolean;
  onSubmit: (
    values: CategoryFormValues
  ) => void | Promise<void>;
}

const CategoryForm = ({
  defaultValues,
  isSubmitting,
  onSubmit,
}: CategoryFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CategoryFormValues>({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      name: "",
      description: "",
      icon: "",
    },
  });

  useEffect(() => {
    if (defaultValues) {
      reset(defaultValues);
    }
  }, [defaultValues, reset]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      {/* Name */}
      <div className="space-y-2">
        <label className="text-sm font-medium">
          Category Name
        </label>

        <Input
          placeholder="Electrical"
          {...register("name")}
        />

        {errors.name && (
          <p className="text-sm text-destructive">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Description */}
      <div className="space-y-2">
        <label className="text-sm font-medium">
          Description
        </label>

        <Textarea
          placeholder="Electrical repair, wiring"
          {...register("description")}
        />

        {errors.description && (
          <p className="text-sm text-destructive">
            {errors.description.message}
          </p>
        )}
      </div>

      {/* Icon */}
      <div className="space-y-2">
        <label className="text-sm font-medium">
          Icon
        </label>

        <Input
          placeholder="⚡"
          {...register("icon")}
        />

        {errors.icon && (
          <p className="text-sm text-destructive">
            {errors.icon.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting
          ? "Saving..."
          : defaultValues
            ? "Update Category"
            : "Create Category"}
      </Button>
    </form>
  );
};

export default CategoryForm;