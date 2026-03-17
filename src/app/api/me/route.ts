import { auth } from "@authgear/nextjs/server";
import { authgearConfig } from "@/lib/authgear";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await auth(authgearConfig);

  if (session.state !== "AUTHENTICATED" || !session.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  return NextResponse.json({ user: session.user });
}
