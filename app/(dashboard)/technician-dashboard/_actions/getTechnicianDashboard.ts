import { cookies } from "next/headers";

const getTechnicianDashboard = async () => {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  if (!accessToken) {
    throw new Error("Access token not found");
  }

  const response = await fetch(
    `${process.env.BACKEND_API_URL}/api/technician/dashboard`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }
  );

  if (!response.ok) {
    const errorText = await response.text();

    console.error(
      "Dashboard API Error:",
      response.status,
      errorText
    );

    throw new Error(
      `Failed to fetch technician dashboard: ${response.status}`
    );
  }

  const result = await response.json();

  return result.data;
};

export default getTechnicianDashboard;