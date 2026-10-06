import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId, has } = await auth();

  // User must be signed in
  if (!userId) {
    redirect("/sign-in");
  }

  // User must have the Clerk "admin" role
  if (!has({ role: "admin" })) {
    redirect("/");
  }

  // Only authenticated admins reach the dashboard
  return <>{children}</>;
}