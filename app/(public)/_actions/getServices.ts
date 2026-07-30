"use server";

export async function getServices() {
  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/services`,
    {
      cache: "no-store",
    }
  );

  const result = await res.json();

  return result.data;
}