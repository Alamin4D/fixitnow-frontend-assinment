import Link from "next/link";

import Container from "../shared/Container";
import ServiceCard from "./ServiceCard";
import { getServices } from "@/app/(public)/_actions/getServices";

export default async function FeaturedServices() {
    const services = await getServices();

    return (
        <section className="py-20">
            <Container>
                <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h2 className="text-4xl font-bold">
                            Featured Services
                        </h2>

                        <p className="mt-2 text-muted-foreground">
                            Discover our most popular home services.
                        </p>
                    </div>

                    <Link
                        href="/services"
                        className="font-semibold text-primary transition hover:underline"
                    >
                        View All →
                    </Link>
                </div>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {services.slice(0, 6).map((service: any) => (
                        <ServiceCard
                            key={service.id}
                            service={service}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
}