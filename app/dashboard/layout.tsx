import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId, has } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  if (!has({ role: "admin" })) {
    redirect("/");
  }

  return <>{children}</>;
}