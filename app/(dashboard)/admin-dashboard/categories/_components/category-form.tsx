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

  image: z
    .string()
    .min(1, "Image is required"),
});

export type CategoryFormValues = z.infer<typeof categorySchema>;

interface CategoryFormProps {
  defaultValues?: CategoryFormValues;
  isSubmitting?: boolean;
  onSubmit: (
    values: CategoryFormValues
  ) => void | Promise<void>;
}

const CategoryForm = ({
  defaultValues,
  isSubmitting = false,
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
      image: "",
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
      className="space-y-5"
    >
      {/* Name */}
      <div className="space-y-2">
        <label
          htmlFor="name"
          className="text-sm font-medium"
        >
          Category Name
        </label>

        <Input
          id="name"
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
        <label
          htmlFor="description"
          className="text-sm font-medium"
        >
          Description
        </label>

        <Textarea
          id="description"
          placeholder="Electrical repair, wiring, installation..."
          {...register("description")}
        />

        {errors.description && (
          <p className="text-sm text-destructive">
            {errors.description.message}
          </p>
        )}
      </div>

      {/* Image */}
      <div className="space-y-2">
        <label
          htmlFor="image"
          className="text-sm font-medium"
        >
          Image
        </label>

        <Input
          id="image"
          placeholder="https://example.com/electrical.png"
          {...register("image")}
        />

        {errors.image && (
          <p className="text-sm text-destructive">
            {errors.image.message}
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