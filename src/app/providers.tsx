"use client";

import { AuthgearProvider } from "@authgear/nextjs/client";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <AuthgearProvider>{children}</AuthgearProvider>;
}
