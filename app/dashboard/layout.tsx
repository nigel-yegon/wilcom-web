import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId, sessionClaims } = await auth();

  // Not signed in
  if (!userId) {
    redirect("/sign-in");
  }

  // Only users with publicMetadata.role === "admin"
  // can access the dashboard
  const userRole = (sessionClaims?.publicMetadata as { role?: string } | undefined)?.role;

  if (userRole !== "admin") {
    redirect("/");
  }

  return <>{children}</>;
}