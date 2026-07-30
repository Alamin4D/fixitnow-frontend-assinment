import { ITechnician } from "@/types/technician";


export async function getTopTechnicians() {
  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/technicians?sort=rating&limit=4`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch technicians");
  }

  const data = await res.json();

  return data.data as ITechnician[];
}