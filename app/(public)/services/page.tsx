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
    <div className="py-12 bg-background min-h-screen">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <aside className="lg:col-span-3 lg:sticky lg:top-24 bg-card p-5 rounded-2xl border border-border/50 shadow-[0_2px_8px_rgba(0,0,0,0.01)]">
            <div className="space-y-4">
              <div className="pb-3 border-b border-border/40">
                <h2 className="text-sm font-bold tracking-tight text-foreground uppercase">
                  Filters
                </h2>
                <p className="text-[11px] text-muted-foreground mt-0.5">
                  Narrow down your search results
                </p>
              </div>
              
              <ServiceFilters
                search={params.search ?? ""}
                categoryId={params.categoryId ?? "all"}
                minPrice={params.minPrice}
                maxPrice={params.maxPrice}
                location={params.location ?? ""}
                categories={categories.data}
              />
            </div>
          </aside>

          
          <main className="lg:col-span-9 space-y-6">
            <div className="flex items-center justify-between bg-muted/30 border border-border/40 px-5 py-3 rounded-xl">
              <p className="text-xs font-semibold text-muted-foreground">
                Showing <span className="text-foreground font-bold">{services?.length ?? 0}</span> services found
              </p>
            </div>

            <ServiceList services={services} />
          </main>

        </div>
        {/* <div className="text-center mt-10">
          pagination
        </div> */}
      </Container>
    </div>
  );
}
