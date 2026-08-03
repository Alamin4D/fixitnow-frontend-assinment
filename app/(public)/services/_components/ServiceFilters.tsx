"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Category {
  id: string;
  name: string;
}


interface Props {
  search: string;
  categoryId: string;
  minPrice?: string;
  maxPrice?: string;
  location: string;
  categories: Category[];
}

export default function ServiceFilters({
  search,
  categoryId,
  minPrice,
  maxPrice,
  location,
  categories,
}: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Determine selected price option from URL params
  const price =
    minPrice === "0" && maxPrice === "500"
      ? "low"
      : minPrice === "501" && maxPrice === "1000"
      ? "medium"
      : minPrice === "1001"
      ? "high"
      : "all";

  const updateQuery = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (!value || value === "all") {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    router.push(`/services?${params.toString()}`);
  };

  const updatePriceQuery = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    params.delete("minPrice");
    params.delete("maxPrice");

    switch (value) {
      case "low":
        params.set("minPrice", "0");
        params.set("maxPrice", "500");
        break;

      case "medium":
        params.set("minPrice", "501");
        params.set("maxPrice", "1000");
        break;

      case "high":
        params.set("minPrice", "1001");
        break;

      case "all":
      default:
        break;
    }

    router.push(`/services?${params.toString()}`);
  };

  return (
    <div className="grid gap-4 rounded-xl border p-5 md:grid-cols-4">
      <Input
        defaultValue={search}
        placeholder="Search services..."
        onChange={(e) => updateQuery("search", e.target.value)}
      />

      <Select
        value={categoryId || "all"}
        onValueChange={(value) => updateQuery("categoryId", value)}
      >
        <SelectTrigger>
          <SelectValue placeholder="Category" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="all">All Categories</SelectItem>

          {categories.map((category) => (
            <SelectItem key={category.id} value={category.id}>
              {category.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={price} onValueChange={updatePriceQuery}>
        <SelectTrigger>
          <SelectValue placeholder="Price" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="all">All Prices</SelectItem>
          <SelectItem value="low">Low (0 - 500)</SelectItem>
          <SelectItem value="medium">Medium (501 - 1000)</SelectItem>
          <SelectItem value="high">High (1001+)</SelectItem>
        </SelectContent>
      </Select>

      <Input
        defaultValue={location}
        placeholder="Location"
        onChange={(e) => updateQuery("location", e.target.value)}
      />
    </div>
  );
}