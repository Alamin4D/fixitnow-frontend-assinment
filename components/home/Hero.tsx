import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import Container from "../shared/Container";

export default function Hero() {
    return (
        <Container>
            <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
                <div className="container mx-auto px-4 py-16 lg:py-24">
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        {/* Left Content */}
                        <div>
                            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600">
                                Trusted Home Services
                            </span>

                            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
                                Find Trusted Home
                                <span className="block text-blue-600">
                                    Service Professionals
                                </span>
                            </h1>

                            <p className="mt-6 max-w-xl text-lg text-slate-600">
                                Book verified electricians, plumbers, cleaners, painters and more
                                within minutes. Fast, secure and reliable home services at your
                                fingertips.
                            </p>

                            {/* Search */}
                            <div className="mt-8 flex flex-col gap-3 rounded-xl bg-white p-3 shadow-lg md:flex-row">
                                <div className="relative flex-1">
                                    <Search className="absolute left-3 top-1/2 size-5 -translate-y-1/2 text-slate-400" />

                                    <input
                                        type="text"
                                        placeholder="Search services..."
                                        className="h-12 w-full rounded-lg border border-slate-200 pl-10 pr-4 outline-none focus:border-blue-500"
                                    />
                                </div>

                                <button className="h-12 rounded-lg bg-blue-600 px-8 font-semibold text-white transition hover:bg-blue-700">
                                    Search
                                </button>
                            </div>

                            {/* Buttons */}
                            <div className="mt-8 flex flex-wrap gap-4">
                                <Link
                                    href="/services"
                                    className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
                                >
                                    Explore Services
                                </Link>

                                <Link
                                    href="/auth/register"
                                    className="rounded-lg border border-slate-300 px-6 py-3 font-semibold transition hover:bg-slate-100"
                                >
                                    Become a Technician
                                </Link>
                            </div>

                            {/* Stats */}
                            <div className="mt-12 grid grid-cols-3 gap-6">
                                <div>
                                    <h3 className="text-3xl font-bold text-blue-600">500+</h3>
                                    <p className="text-slate-600">Professionals</p>
                                </div>

                                <div>
                                    <h3 className="text-3xl font-bold text-blue-600">5K+</h3>
                                    <p className="text-slate-600">Bookings</p>
                                </div>

                                <div>
                                    <h3 className="text-3xl font-bold text-blue-600">4.9★</h3>
                                    <p className="text-slate-600">Customer Rating</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="relative">
                            <Image
                                src="https://www.echostar.com/content/echostar/us/en/home/careers/hiring-process/candidate-advice/your-ticket-to-a-field-technician-interview/_jcr_content/root/container/flexcontainer/row1/column0/image.coreimg.png/1758836574619/hero-your-ticket-to-a-field-technician-interview.png"
                                unoptimized
                                alt="Home Service Technician"
                                width={700}
                                height={700}
                                priority
                                className="mx-auto w-full max-w-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </Container>
    );
}