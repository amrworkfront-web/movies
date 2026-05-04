import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function parseJwt(token: string) {
  try {
    const base64Payload = token.split(".")[1];
    const payload = atob(base64Payload);
    return JSON.parse(payload);
  } catch {
    return null;
  }
}

export function middleware(request: NextRequest) {
  const token = request.cookies.get("jwt_token")?.value;
  const { pathname } = request.nextUrl;

  // ✅ سيب login تعدي
  if (pathname === "/login"|| pathname === "/register") {
    return NextResponse.next();
  }

  // 🔐 حماية admin بس
  if (pathname.startsWith("/admin")) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    const decoded = parseJwt(token);
    if (!decoded) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    // ⏳ check expiration
    if (decoded.exp * 1000 < Date.now()) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    const role =
      decoded[
        "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
      ];

    if (role !== "Admin") {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
}