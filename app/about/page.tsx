import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | Wilcom Systems Limited",
    description:
        "Wilcom Systems Limited — established in 2008, delivering ICT infrastructure, POS solutions, security systems, and software development across Kenya.",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-linear-to-b from-slate-900 to-slate-800 text-white">
            {/* Header */}
            <section className="px-6 py-20 text-center max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
                    About <span className="text-blue-400">Wilcom Systems</span>
                </h1>
                <p className="text-lg text-slate-300 leading-relaxed">
                    Wilcom Systems Limited is a limited liability company established in
                    2008 by experienced and knowledgeable professionals with an intensive
                    background in the ICT industry. Our intention is to grow into a large
                    firm with international relationships.
                </p>
            </section>

            {/* Who We Are / What We Do */}
            <section className="px-6 py-16 max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-10">
                    <div className="bg-white	dark:bg-ink-900/60 p-8 rounded-xl border border-slate-700">
                        <h2 className="text-2xl font-bold text-blue-400 mb-4">Who We Are</h2>
                        <p className="text-slate-300 leading-relaxed">
                            Wilcom Systems was established in 2008 by experienced and
                            knowledgeable professionals with intensive background in the ICT
                            industry. We are a Kenyan-registered limited liability company
                            committed to growing into a large firm with international
                            relationships.
                        </p>
                    </div>
                    <div className="bg-white	dark:bg-ink-900/60 p-8 rounded-xl border border-slate-700">
                        <h2 className="text-2xl font-bold text-blue-400 mb-4">What We Do</h2>
                        <p className="text-slate-300 leading-relaxed">
                            Our portfolio supports clients across ICT infrastructure (LAN,
                            Servers, PCs), CCTV and Security Surveillance Systems, Biometric
                            and Access Control Systems, Retail and Hospitality Automation,
                            e-Government, ICT Consulting, and Software Development.
                        </p>
                    </div>
                </div>
            </section>

            {/* Vision / Mission / Quality Policy */}
            <section className="px-6 py-16 bg-ink-50	dark:bg-ink-9500/60">
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
                    <div className="bg-white	dark:bg-ink-900 p-8 rounded-xl border border-slate-700">
                        <h3 className="text-xl font-bold text-blue-400 mb-4">Our Vision</h3>
                        <p className="text-slate-300 leading-relaxed">
                            To be the leading distributor and reseller of computer
                            electronics, achieving recognition as a provider of ICT solutions
                            to clients by leveraging our core strengths.
                        </p>
                    </div>
                    <div className="bg-white	dark:bg-ink-900 p-8 rounded-xl border border-slate-700">
                        <h3 className="text-xl font-bold text-blue-400 mb-4">Our Mission</h3>
                        <p className="text-slate-300 leading-relaxed">
                            Supply and maintenance of high quality Point of Sale hardware,
                            software and computer electronics products, coupled with efficient
                            after-sales services. We thrive to achieve customer satisfaction
                            by providing state-of-the-art solutions to our clients and
                            partners.
                        </p>
                    </div>
                    <div className="bg-white	dark:bg-ink-900 p-8 rounded-xl border border-slate-700">
                        <h3 className="text-xl font-bold text-blue-400 mb-4">Quality Policy</h3>
                        <p className="text-slate-300 leading-relaxed italic">
                            &ldquo;We will provide reliable, scalable and robust solutions,
                            products and services to our customers, on time, each time. We
                            will continuously improve our processes in order to achieve the
                            highest industry standards.&rdquo;
                        </p>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="px-6 py-16 max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    Our Core Values
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        "Maintain a very high level of ethics with all our clients",
                        "Passionate about seeing clients most satisfied with our installations & our professionalism",
                        "Maintain a high level of integrity with our clients and suppliers",
                        "Offer the right solutions to our clients' needs with a high level of professionalism",
                        "Highly efficient after-sales services",
                        "Customer satisfaction at every step",
                    ].map((value) => (
                        <div
                            key={value}
                            className="bg-white	dark:bg-ink-900/60 p-6 rounded-xl border border-slate-700 hover:border-blue-400 transition flex items-start gap-3"
                        >
                            <span className="text-blue-400 text-xl mt-0.5">✓</span>
                            <p className="text-slate-300">{value}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Products & Solutions */}
            <section className="px-6 py-16 bg-ink-50	dark:bg-ink-9500/60">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                        Products &amp; Solutions
                    </h2>
                    <p className="text-center text-slate-400 mb-12">
                        A complete portfolio of ICT products and enterprise solutions
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            "Networking",
                            "Security Surveillance – CCTV",
                            "Biometric & Access Control",
                            "Servers, PCs, Laptops, Printers",
                            "Retail POS Software",
                            "Retail POS Hardware",
                            "Technology Consulting",
                            "Software Development",
                            "HR & Payroll Solution",
                            "e-Government Solution",
                            "Hotel & Restaurant Management",
                            "Banking & Payment Integration",
                            "ETRs (Electronic Tax Registers)",
                            "ICT Support & Maintenance",
                            "Retail Automation",
                        ].map((item) => (
                            <div
                                key={item}
                                className="bg-white	dark:bg-ink-900 p-5 rounded-lg border border-slate-700 hover:border-blue-400 transition"
                            >
                                <p className="text-slate-200 font-medium">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Networking & CCTV Deep Dive */}
            <section className="px-6 py-16 max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
                <div>
                    <h3 className="text-2xl font-bold text-blue-400 mb-4">Networking</h3>
                    <p className="text-slate-300 mb-4 leading-relaxed">
                        We have a team of well-trained and experienced professionals with
                        capacity to design and implement complex Local Area Networks (LAN)
                        that support both Data, Voice and Video. Our design methodology
                        ensures efficient use of materials, minimal business interruption
                        and maximum return on investment.
                    </p>
                    <ul className="space-y-2 text-slate-300">
                        {[
                            "Structured cabling – Voice and Data",
                            "Fiber optics",
                            "IP Telephony",
                            "Clean Power Systems",
                            "Supply and Installation of Switches, Routers",
                            "Equipment and Server cabinets",
                            "Trunking",
                            "Firewalls",
                        ].map((item) => (
                            <li key={item} className="flex items-start gap-2">
                                <span className="text-blue-400 mt-1">•</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-blue-400 mb-4">
                        CCTV &amp; Surveillance
                    </h3>
                    <p className="text-slate-300 mb-4 leading-relaxed">
                        Digital surveillance systems ranging from cost-effective 20fps to
                        leading 480fps models, with choices ranging from BNC to D-Sub,
                        built-in to standalone I/O modules.
                    </p>
                    <ul className="space-y-2 text-slate-300">
                        {[
                            "IP surveillance product line",
                            "Integration of IT technology into surveillance systems",
                            "Video analysis features for surveillance systems",
                            "Digital Surveillance Systems with expandable support to POS & Central Monitoring",
                            "License Plate Recognition System",
                            "Complete line of security accessories",
                        ].map((item) => (
                            <li key={item} className="flex items-start gap-2">
                                <span className="text-blue-400 mt-1">•</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Retail Automation */}
            <section className="px-6 py-16 bg-ink-50	dark:bg-ink-9500/60">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                        Retail Automation
                    </h2>
                    <p className="text-center text-slate-400 mb-12 max-w-3xl mx-auto">
                        As your retail Point of Sale System Partner, Wilcom offers a
                        complete retail POS system solution starting with initial
                        consultation with our Retail Technology Specialists.
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            "Retail POS Software",
                            "Retail Hardened POS Computer Hardware",
                            "Retail Hardened POS Peripherals",
                            "Software Customizations & Plug-Ins",
                            "Professional Set-Up & Installation",
                            "Training by Retail Experienced Staff",
                            "Ongoing Help, Support & Maintenance",
                            "County Management System (MuniLogic)",
                        ].map((item) => (
                            <div
                                key={item}
                                className="bg-white	dark:bg-ink-900 p-5 rounded-lg border border-slate-700"
                            >
                                <p className="text-slate-200 font-medium">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Wilcom */}
            <section className="px-6 py-16 max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    Why Choose Wilcom
                </h2>
                <div className="space-y-4 max-w-4xl mx-auto">
                    {[
                        "Wilcom's experience on the web and now on mobile helps us understand complex back-ends and create connected mobile applications across all smartphone platforms.",
                        "Flexibility to work and provide various engagement models — including fixed bids and long-term engagements.",
                        "Extensive experience in creating Enterprise consumer-facing web applications.",
                        "Innovative approach with specific strategies that assure ROI and increased customer engagement.",
                    ].map((item) => (
                        <div
                            key={item}
                            className="bg-white	dark:bg-ink-900/60 p-6 rounded-xl border border-slate-700 flex items-start gap-3"
                        >
                            <span className="text-blue-400 text-xl mt-0.5">→</span>
                            <p className="text-slate-300">{item}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact Info */}
            <section className="px-6 py-16 bg-ink-50	dark:bg-ink-9500/60">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
                    <div className="bg-white	dark:bg-ink-900 p-8 rounded-xl border border-slate-700 space-y-3 text-slate-300">
                        <p className="font-semibold text-white text-lg">
                            WilCom Systems Limited
                        </p>
                        <p>2nd Floor, Elyzee Plaza, Kilimani Road</p>
                        <p>P.O Box 102678-00101 Nairobi</p>
                        <p>
                            <span className="text-slate-500">Tel1:</span> 254 020 2396916/7
                        </p>
                        <p>
                            <span className="text-slate-500">Tel2:</span> 254 020 5288878
                        </p>
                        <p>
                            <span className="text-slate-500">Email:</span>{" "}
                            <a href="mailto:sales@wilcom.co.ke" className="text-blue-400 hover:underline">
                                sales@wilcom.co.ke
                            </a>{" "}
                            /{" "}
                            <a href="mailto:info@wilcom.co.ke" className="text-blue-400 hover:underline">
                                info@wilcom.co.ke
                            </a>
                        </p>
                        <p>
                            <span className="text-slate-500">Website:</span>{" "}
                            <a href="https://www.wilcom.co.ke" className="text-blue-400 hover:underline">
                                www.wilcom.co.ke
                            </a>
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}