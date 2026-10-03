import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

/**
 * Routes that require an authenticated user with the "admin" role.
 * Add more matchers here as you build out the admin area.
 */
const isAdminRoute = createRouteMatcher([
    "/dashboard(.*)",
    "/admin(.*)",
]);

/**
 * Routes that require authentication but not necessarily admin.
 * (Public marketing pages are NOT listed here.)
 */
const isProtectedRoute = createRouteMatcher([
    "/account(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
    // Admin-only routes: enforce the "admin" role from the session claim.
    if (isAdminRoute(req)) {
        await auth.protect({ role: "admin" });
        return;
    }

    // Logged-in-only routes: just require a valid session.
    if (isProtectedRoute(req)) {
        await auth.protect();
    }
});

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
        // Always run for API routes
        "/(api|trpc)(.*)",
    ],
};