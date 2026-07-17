import { auth } from "@authgear/nextjs/server";
import { authgearConfig } from "@/lib/authgear";
import { NextResponse } from "next/server";

// Demonstrates reading the current session's tokens on the server via `auth()`.
// Unlike `currentUser()` (which returns only the profile), `auth()` returns the
// full Session and automatically refreshes the access token when it has expired,
// so `session.accessToken` is always valid while the user is authenticated.
export async function GET() {
  const session = await auth(authgearConfig);

  if (!session.accessToken) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // The access token is what you forward to a downstream API as a Bearer token:
  //
  //   await fetch("https://api.example.com/resource", {
  //     headers: { Authorization: `Bearer ${session.accessToken}` },
  //   });
  //
  // The refresh token is also available on the server as `session.refreshToken`,
  // but it is a long-lived credential — keep it server-side and never send it to
  // the browser. Here we only report whether one is present.
  return NextResponse.json({
    accessToken: session.accessToken,
    expiresAt: session.expiresAt,
    hasRefreshToken: session.refreshToken !== null,
  });
}
