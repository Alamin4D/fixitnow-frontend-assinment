import Link from "next/link";

import Container from "../shared/Container";
import ServiceCard from "./ServiceCard";
import AnimatedServicesGrid from "./AnimatedServicesGrid";
import { getServices } from "@/app/(public)/_actions/getServices";

export default async function FeaturedServices() {
  const services = await getServices();

  return (
    <section className="py-20">
      <Container>
        {/* Section Header */}
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
              Our Services
            </p>

            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Featured Services
            </h2>

            <p className="mt-2 text-muted-foreground">
              Discover our most popular home services.
            </p>
          </div>

          <Link
            href="/services"
            className="group inline-flex items-center font-semibold text-primary"
          >
            View All
            <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        {/* Animated Services */}
        <AnimatedServicesGrid services={services.slice(0, 6)} />
      </Container>
    </section>
  );
}