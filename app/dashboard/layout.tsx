import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId, has } = await auth();

  // Not signed in
  if (!userId) {
    redirect("/sign-in");
  }

  // Signed in, but not an admin
  if (!has({ role: "admin" })) {
    redirect("/");
  }

  // Signed in + admin
  return <>{children}</>;
}