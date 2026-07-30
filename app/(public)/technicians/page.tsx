import Container from "@/components/shared/Container";
import { getTechnicians } from "../_actions/getTechnicians";
import TechnicianList from "../_components/TechnicianList";



export default async function TechniciansPage() {
    const technicians = await getTechnicians();

    return (
        <Container>
            <section className="container mx-auto py-12">
                <div className="mb-10 text-center">
                    <h1 className="text-4xl font-bold">
                        Our Technicians
                    </h1>

                    <p className="mt-3 text-muted-foreground">
                        Meet our experienced and trusted professionals.
                    </p>
                </div>

                <TechnicianList technicians={technicians} />
            </section>
        </Container>
    );
}