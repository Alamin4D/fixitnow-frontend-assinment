
import Container from "@/components/shared/Container";
import { getTechnicianById } from "../../_actions/getTechnicianById";
import TechnicianProfile from "../../_components/TechnicianProfile";

type Props = {
    params: Promise<{
        id: string;
    }>;
};


export default async function TechnicianPage({
    params,
}: Props) {
    const { id } = await params;
    const technician = await getTechnicianById(id);

    return (
        <Container>
            <section className="container mx-auto py-10">
                <TechnicianProfile technician={technician} />
            </section>
        </Container>
    );
}