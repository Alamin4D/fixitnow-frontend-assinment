"use server";

// import { BACKEND_API_URL } from "@/lib/constants";

export async function getCategories() {
  const res = await fetch(`${process.env.BACKEND_API_URL}/api/categories`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  return res.json();
}