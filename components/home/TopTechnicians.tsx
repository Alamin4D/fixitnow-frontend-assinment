import Link from "next/link";
import TechnicianCard from "./TechnicianCard";
import Container from "../shared/Container";
import { getTopTechnicians } from "@/app/(public)/_actions/getTopTechnicians";


export default async function TopTechnicians() {
    const technicians = await getTopTechnicians();

    return (
        <Container>
            <section className="bg-slate-50 py-20">
                <div className="container mx-auto px-4">
                    <div className="mb-10 flex items-center justify-between">
                        <div>
                            <h2 className="text-4xl font-bold">
                                Top Rated Technicians
                            </h2>

                            <p className="mt-2 text-slate-600">
                                Trusted professionals with excellent customer ratings.
                            </p>
                        </div>

                        <Link
                            href="/technicians"
                            className="font-semibold text-blue-600 hover:underline"
                        >
                            View All →
                        </Link>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
                        {technicians.map((technician: any) => (
                            <TechnicianCard
                                key={technician.id}
                                technician={technician}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </Container>
    );
}