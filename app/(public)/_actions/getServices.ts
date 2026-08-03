interface GetServicesParams {
  search?: string;
  categoryId?: string;
  minPrice?: string;
  maxPrice?: string;
  location?: string;
}


export const getServices = async ({
  search,
  categoryId,
  minPrice,
  maxPrice,
  location,
}: GetServicesParams = {}) => {
  const params = new URLSearchParams();

  if (search) params.set("search", search);
  if (categoryId) params.set("categoryId", categoryId);
  if (minPrice) params.set("minPrice", minPrice);
  if (maxPrice) params.set("maxPrice", maxPrice);
  if (location) params.set("location", location);

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/services?${params.toString()}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch services");
  }

  const result = await res.json();

  return result.data;
};