import Container from "@/components/shared/Container";
import { getServices } from "../_actions/getServices";
import ServiceList from "../_components/ServiceList";
import ServiceFilters from "./_components/ServiceFilters";
import { getCategories } from "../_actions/getCategories";

interface ServicesPageProps {
  searchParams: Promise<{
    search?: string;
    categoryId?: string;
    minPrice?: string;
    maxPrice?: string;
    location?: string;
  }>;
}

export default async function ServicesPage({
  searchParams,
}: ServicesPageProps) {
  const params = await searchParams;

  const services = await getServices({
    search: params.search,
    categoryId: params.categoryId,
    minPrice: params.minPrice,
    maxPrice: params.maxPrice,
    location: params.location,
  });

  const categories = await getCategories();

  return (
    <div className="py-10">
      <Container>
        <div className="mb-10">
          <ServiceFilters
            search={params.search ?? ""}
            categoryId={params.categoryId ?? "all"}
            minPrice={params.minPrice}
            maxPrice={params.maxPrice}
            location={params.location ?? ""}
            categories={categories.data}
          />
        </div>

        <ServiceList services={services} />
      </Container>
    </div>
  );
}