"use server";

export async function getServiceById(id: string) {
  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/services/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch service");
  }

  const result = await res.json();

  return result.data;
}