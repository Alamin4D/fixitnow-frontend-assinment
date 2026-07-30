import Container from "@/components/shared/Container";
import { getServices } from "../_actions/getServices";
import ServiceList from "../_components/ServiceList";



export default async function ServicesPage() {
  const services = await getServices();

  return (
    <Container>
      <section className="container mx-auto py-12">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold">
            Our Services
          </h1>

          <p className="mt-3 text-muted-foreground">
            Find trusted professionals for all your home service needs.
          </p>
        </div>

        <ServiceList services={services} />
      </section>
    </Container>
  );
}