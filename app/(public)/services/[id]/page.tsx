import Container from "@/components/shared/Container";
import { getServiceById } from "../../_actions/getServiceById";
import ServiceDetails from "../../_components/ServiceDetails";


type Props = {
  params: Promise<{
    id: string;
  }>;
};


export default async function ServiceDetailsPage({
  params,
}: Props) {
  const { id } = await params;
  const service = await getServiceById(id);

  return (
    <Container>
      <section className="container mx-auto py-12">
        <ServiceDetails service={service} />
      </section>
    </Container>
  );
}