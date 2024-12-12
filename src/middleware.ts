import { NextRequest, NextResponse } from "next/server";

import { getCurrentUser } from "./services/AuthService";

const AuthRoutes = ["/signin", "/signup"];

type Role = keyof typeof roleBasedRoutes;

const roleBasedRoutes = {
  user: [/^\/dashboard\/user/],
  vendor: [/^\/dashboard\/vendor/],
  admin: [/^\/dashboard\/admin/],
};

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const user = await getCurrentUser();

  // If the user is not signed in
  if (!user) {
    if (AuthRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(
        new URL(`/signin?redirect=${pathname}`, request.url)
      );
    }
  }

  // Allow all authenticated users to access these routes
  const publicAuthRoutes = ["/carts", "/checkout", "/payment"];
  if (publicAuthRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  // Role-based route access
  if (user?.role && roleBasedRoutes[user?.role as Role]) {
    const routes = roleBasedRoutes[user?.role as Role];

    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }

  return NextResponse.redirect(new URL("/", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/profile/:page*",
    "/dashboard/:page*",
    "/signin",
    "/signup",
    "/carts",
    "/checkout",
    "/payment",
  ],
};
