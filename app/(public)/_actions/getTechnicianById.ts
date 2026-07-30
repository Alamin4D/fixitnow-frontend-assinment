"use server";

export async function getTechnicianById(id: string) {
  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/technicians/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch technician");
  }

  const result = await res.json();

  return result.data;
}