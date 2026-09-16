"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, MapPin, DollarSign, SlidersHorizontal } from "lucide-react";

interface Category {
  id: string;
  name: string;
}

interface ServiceFiltersProps {
  search: string;
  categoryId: string;
  minPrice?: string;
  maxPrice?: string;
  location: string;
  categories: Category[];
}

export default function ServiceFilters({
  search: initialSearch,
  categoryId: initialCategory,
  minPrice: initialMinPrice,
  maxPrice: initialMaxPrice,
  location: initialLocation,
  categories,
}: ServiceFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();


  const [search, setSearch] = useState(initialSearch);
  const [category, setCategory] = useState(initialCategory);
  const [minPrice, setMinPrice] = useState(initialMinPrice ?? "");
  const [maxPrice, setMaxPrice] = useState(initialMaxPrice ?? "");
  const [location, setLocation] = useState(initialLocation);


  const handleFilterChange = (updates: Record<string, string>) => {
    const params = new URLSearchParams(searchParams.toString());
    
    Object.entries(updates).forEach(([key, value]) => {
      if (value && value !== "all") {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    });

    startTransition(() => {
      router.push(`/services?${params.toString()}`);
    });
  };

 
  const handleReset = () => {
    setSearch("");
    setCategory("all");
    setMinPrice("");
    setMaxPrice("");
    setLocation("");
    router.push("/services");
  };

  return (
    <div className="flex flex-col gap-5 pt-2">
      
 
      <div className="space-y-1.5">
        <label className="text-xs font-bold text-foreground/80 tracking-wide">Search Service</label>
        <div className="relative flex items-center">
          <Search className="absolute left-3 h-4 w-4 text-muted-foreground/70" />
          <Input
            placeholder="Type to search..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              handleFilterChange({ search: e.target.value });
            }}
            className="pl-9 h-9 text-xs rounded-xl border-border/60 bg-background/50 focus-visible:ring-primary/20"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-xs font-bold text-foreground/80 tracking-wide">Category</label>
        <select
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            handleFilterChange({ categoryId: e.target.value });
          }}
          className="flex h-9 w-full rounded-xl border border-border/60 bg-background/50 px-3 py-1 text-xs shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
        >
          <option value="all">All Categories</option>
          {categories?.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>


      <div className="space-y-1.5">
        <label className="text-xs font-bold text-foreground/80 tracking-wide">Location</label>
        <div className="relative flex items-center">
          <MapPin className="absolute left-3 h-4 w-4 text-muted-foreground/70" />
          <Input
            placeholder="e.g. Mirpur, Dhaka"
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
              handleFilterChange({ location: e.target.value });
            }}
            className="pl-9 h-9 text-xs rounded-xl border-border/60 bg-background/50 focus-visible:ring-primary/20"
          />
        </div>
      </div>


      <div className="space-y-1.5">
        <label className="text-xs font-bold text-foreground/80 tracking-wide">Price Range</label>
        <div className="grid grid-cols-2 gap-2">
          <div className="relative flex items-center">
            <DollarSign className="absolute left-2.5 h-3.5 w-3.5 text-muted-foreground/60" />
            <Input
              type="number"
              placeholder="Min"
              value={minPrice}
              onChange={(e) => {
                setMinPrice(e.target.value);
                handleFilterChange({ minPrice: e.target.value });
              }}
              className="pl-7 h-9 text-xs rounded-xl border-border/60 bg-background/50"
            />
          </div>
          <div className="relative flex items-center">
            <DollarSign className="absolute left-2.5 h-3.5 w-3.5 text-muted-foreground/60" />
            <Input
              type="number"
              placeholder="Max"
              value={maxPrice}
              onChange={(e) => {
                setMaxPrice(e.target.value);
                handleFilterChange({ maxPrice: e.target.value });
              }}
              className="pl-7 h-9 text-xs rounded-xl border-border/60 bg-background/50"
            />
          </div>
        </div>
      </div>


      <div className="pt-2 border-t border-border/40 mt-1 flex flex-col gap-2">
        <Button
          onClick={handleReset}
          variant="outline"
          className="w-full h-9 rounded-xl text-xs font-semibold border-border/60 hover:bg-accent"
        >
          Reset Filters
        </Button>
      </div>

    </div>
  );
}
