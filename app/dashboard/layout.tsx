
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId, orgId, has } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  // Require an active organization and its admin role.
  if (!orgId || !has({ role: "org:admin" })) {
    redirect("/");
  }

  return <>{children}</>;
}
