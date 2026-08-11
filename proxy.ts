import { NextRequest, NextResponse } from "next/server";

const PUBLIC_ROUTES = [
  "/",
  "/services",
  "/technicians",
  "/login",
  "/register",
  "/about",
  "/contract"
];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const token = request.cookies.get("accessToken")?.value;
  const role = request.cookies.get("role")?.value;


  const isPublic =
    PUBLIC_ROUTES.includes(pathname) ||
    pathname.startsWith("/services/") ||
    pathname.startsWith("/technicians/");


  // Public route
  if (isPublic) {
    return NextResponse.next();
  }


  // No login
  if (!token) {
    const loginUrl = new URL(
      "/login",
      request.url
    );


    loginUrl.searchParams.set(
      "redirect",
      pathname
    );


    return NextResponse.redirect(loginUrl);
  }



  // Customer
  if (
    pathname.startsWith("/customer-dashboard")
  ) {
    if (role !== "CUSTOMER") {
      return NextResponse.redirect(
        new URL("/unauthorized", request.url)
      );
    }
  }


  return NextResponse.next();
}



export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)",
  ],
};