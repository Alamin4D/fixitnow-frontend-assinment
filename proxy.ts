import { NextRequest, NextResponse } from "next/server";

const PUBLIC_ROUTES = [
  "/",
  "/services",
  "/technicians",
  "/login",
  "/register",
];

const AUTH_ROUTES = ["/login", "/register"];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const token = request.cookies.get("accessToken")?.value;
  const role = request.cookies.get("role")?.value;

  // Allow public routes
  const isPublicRoute =
    PUBLIC_ROUTES.includes(pathname) ||
    pathname.startsWith("/services/") ||
    pathname.startsWith("/technicians/");

  if (isPublicRoute) {
    return NextResponse.next();
  }

  // Prevent logged in users from auth pages
  if (AUTH_ROUTES.includes(pathname) && token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Require authentication
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Customer Routes
  if (pathname.startsWith("/customer-dashboard")) {
    if (role !== "CUSTOMER") {
      return NextResponse.redirect(new URL("/unauthorized", request.url));
    }
  }

  // Technician Routes
  if (pathname.startsWith("/technician-dashboard")) {
    if (role !== "TECHNICIAN") {
      return NextResponse.redirect(new URL("/unauthorized", request.url));
    }
  }

  // Admin Routes
  if (pathname.startsWith("/admin-dashboard")) {
    if (role !== "ADMIN") {
      return NextResponse.redirect(new URL("/unauthorized", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Skip:
     * - API Routes
     * - Next.js internals
     * - Static files
     * - Images
     * - Favicon
     */
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)",
  ],
};