import Link from "next/link";
import { prisma } from "@/lib/prisma";
import ContactForm from "./contact-form";

export default async function Home() {
  const services = await prisma.service.findMany({
    where: { published: true },
    orderBy: { order: "asc" },
  });

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 md:px-8 py-5 border-b border-slate-700">
        <Link href="/" className="text-2xl font-bold text-blue-400">
          Wilcom Systems Limited
        </Link>
        <ul className="hidden md:flex gap-8 text-sm">
          <li><Link href="#home" className="hover:text-blue-400">Home</Link></li>
          <li><Link href="#services" className="hover:text-blue-400">Services</Link></li>
          <li><Link href="#about" className="hover:text-blue-400">About</Link></li>
          <li><Link href="#contact" className="hover:text-blue-400">Contact</Link></li>
        </ul>
      </nav>

      {/* Hero */}
      <section id="home" className="flex flex-col items-center justify-center text-center px-6 py-32">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          Welcome to{" "}
          <span className="text-blue-400">Wilcom Systems Limited</span>
        </h1>
        <p className="max-w-2xl text-lg text-slate-300 mb-10">
          Delivering innovative technology solutions that power your business
          forward. From software development to IT consulting, we&apos;ve got you
          covered.
        </p>
        <Link
          href="#services"
          className="bg-blue-500 hover:bg-blue-600 transition px-8 py-3 rounded-lg font-semibold"
        >
          Explore Our Services
        </Link>
      </section>

      {/* Services (from database) */}
      <section id="services" className="px-6 py-20 max-w-6xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Services
        </h2>
        {services.length === 0 ? (
          <p className="text-center text-slate-400">
            Services coming soon.
          </p>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s) => (
              <div
                key={s.id}
                className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-blue-400 transition"
              >
                <h3 className="text-xl font-semibold mb-3 text-blue-400">
                  {s.title}
                </h3>
                <p className="text-slate-300">{s.description}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* About */}
      <section id="about" className="px-6 py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Us</h2>
          <p className="text-slate-300 text-lg">
            Wilcom Systems Limited is a technology company committed to
            delivering world-class digital solutions. We combine expertise,
            innovation, and reliability to help businesses thrive in a digital
            world.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-20 max-w-3xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Get In Touch
        </h2>
        <p className="text-slate-300 text-center mb-10">
          Ready to start your next project? Send us a message and we&apos;ll get
          back to you shortly.
        </p>
        <ContactForm />
      </section>

      {/* Footer */}
      <footer className="text-center py-8 border-t border-slate-700 text-slate-400 text-sm">
        © {new Date().getFullYear()} Wilcom Systems Limited. All rights reserved.
      </footer>
    </main>
  );
}