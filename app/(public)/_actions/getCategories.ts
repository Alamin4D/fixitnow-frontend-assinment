"use server";


export async function getCategories() {
  const res = await fetch(`${process.env.BACKEND_API_URL}/api/categories`, {
    cache: "no-store",
  });


  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  return res.json();
}