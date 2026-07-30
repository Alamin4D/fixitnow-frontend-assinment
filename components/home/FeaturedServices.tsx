import Link from "next/link";
import { getServices } from "@/app/(public)/_actions/getServices";
import ServiceCard from "./ServiceCard";
import Container from "../shared/Container";

export default async function FeaturedServices() {
    const services = await getServices();

    return (
        <Container>
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="mb-10 flex items-center justify-between">
                        <div>
                            <h2 className="text-4xl font-bold">
                                Featured Services
                            </h2>

                            <p className="mt-2 text-slate-600">
                                Discover our most popular home services.
                            </p>
                        </div>

                        <Link
                            href="/services"
                            className="font-semibold text-blue-600 hover:underline"
                        >
                            View All →
                        </Link>
                    </div>

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {services.slice(0, 8).map((service: any) => (
                            <ServiceCard
                                key={service.id}
                                service={service}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </Container>
    );
}