import "dotenv/config";
import { PrismaClient } from "../lib/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  const services = [
    {
      title: "Software Development",
      slug: "software-development",
      description:
        "Custom web and mobile applications built to scale with your business.",
      icon: "code",
      order: 1,
    },
    {
      title: "IT Consulting",
      slug: "it-consulting",
      description:
        "Strategic guidance to modernize your tech stack and improve efficiency.",
      icon: "consulting",
      order: 2,
    },
    {
      title: "Cloud Solutions",
      slug: "cloud-solutions",
      description:
        "Reliable, secure cloud infrastructure and deployment services.",
      icon: "cloud",
      order: 3,
    },
  ];

  for (const service of services) {
    await prisma.service.upsert({
      where: { slug: service.slug },
      update: service,
      create: service,
    });
  }

  console.log(`Seeded ${services.length} services`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
