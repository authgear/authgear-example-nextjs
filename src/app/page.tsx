"use client";

import { useState } from "react";
import { useAuthgear, SignInButton, SignOutButton } from "@authgear/nextjs/client";

export default function Home() {
  const { isAuthenticated, user } = useAuthgear();
  const [apiResult, setApiResult] = useState<string | null>(null);

  async function testProtectedApi() {
    const res = await fetch("/api/me");
    const data = await res.json();
    setApiResult(JSON.stringify(data, null, 2));
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-bold">Next.js + Authgear</h1>

      {isAuthenticated ? (
        <>
          <p className="text-gray-600">
            Logged in as: <span className="font-mono">{user?.sub}</span>
          </p>
          <button
            onClick={testProtectedApi}
            className="rounded-md bg-green-600 px-6 py-2 text-white hover:bg-green-700"
          >
            Test Protected API
          </button>
          {apiResult && (
            <pre className="rounded-md bg-gray-100 dark:bg-gray-800 p-4 text-sm">{apiResult}</pre>
          )}
          <SignOutButton className="rounded-md bg-red-600 px-6 py-2 text-white hover:bg-red-700">
            Logout
          </SignOutButton>
        </>
      ) : (
        <SignInButton className="rounded-md bg-blue-600 px-6 py-2 text-white hover:bg-blue-700">
          Login
        </SignInButton>
      )}
    </main>
  );
}
