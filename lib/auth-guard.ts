import { auth } from "@clerk/nextjs/server";

export async function requireAdmin() {
    const { userId, sessionClaims } = await auth();

    if (!userId) {
        throw new Error("Unauthorized");
    }

    const role = (sessionClaims?.metadata as { role?: string } | undefined)?.role;
    if (role !== "admin") {
        throw new Error("Forbidden: admin role required");
    }

    return userId;
}

export function slugify(input: string) {
    return (
        input
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-+|-+$/g, "")
            .slice(0, 80) || "item"
    );
}