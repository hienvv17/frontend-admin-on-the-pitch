import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { ACCESS_TOKEN } from "./utility/constant";

const authUrls = ["/login"];

export default function middleware(request: NextRequest) {
  const url = new URL(request.url);
  const cookies = request.headers.get('cookie');
  const accessToken = cookies?.split('; ').find((cookie) => cookie.startsWith(`${ACCESS_TOKEN}=`))?.split('=')[1];
  if (!accessToken && !authUrls.includes(url.pathname)) {
    return NextResponse.redirect(`${url.origin}/login`);
  }
  if (accessToken && url.pathname === "/login") {
    return NextResponse.redirect(`${url.origin}/`);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};

