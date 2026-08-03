"use server";

export async function getTechnicians() {
  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/technicians`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch technicians");
  }

  const result = await res.json();
  return result.data;
}