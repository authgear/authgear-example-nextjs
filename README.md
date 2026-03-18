# Next.js + Authgear Example

This example demonstrates how to integrate [Authgear](https://www.authgear.com/) authentication into a [Next.js 16](https://nextjs.org) App Router application using the [`@authgear/nextjs`](https://www.npmjs.com/package/@authgear/nextjs) SDK.

## What's inside

- Login and logout via Authgear hosted UI
- Display the authenticated user's ID, email, and phone number
- A protected API route (`/api/me`) that returns current user info — server-side, using the session cookie

## Prerequisites

- An [Authgear](https://portal.authgear.com/) account with a project created
- Node.js 18+

## Getting Started

### 1. Configure Authgear

In the [Authgear Portal](https://portal.authgear.com/), open your project and create an application:

1. Go to **Applications** → **Add Application**
2. Select **OIDC Client Application**
3. Under **Authorized Redirect URIs**, add `http://localhost:3000/api/auth/callback`
4. Note your **Endpoint**, **Client ID**, and **Client Secret**

### 2. Set up environment variables

```bash
cp .env.local.dist .env.local
```

Fill in `.env.local`:

```bash
AUTHGEAR_ENDPOINT=https://your-project.authgear.cloud
AUTHGEAR_CLIENT_ID=your-client-id
AUTHGEAR_CLIENT_SECRET=your-client-secret
AUTHGEAR_REDIRECT_URI=http://localhost:3000/api/auth/callback
SESSION_SECRET=a-random-string-of-at-least-32-characters
```

### 3. Install dependencies and run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── auth/[...authgear]/route.ts   # OAuth route handler (login, callback, logout, …)
│   │   └── me/route.ts                   # Protected API route
│   ├── layout.tsx                        # Root layout with AuthgearProvider
│   ├── page.tsx                          # Home page with login/logout UI
│   └── providers.tsx                     # Client component wrapping AuthgearProvider
└── lib/
    └── authgear.ts                       # Shared Authgear config
```

## Learn More

- [Authgear Next.js Integration Tutorial](https://docs.authgear.com/get-started/regular-web-app/nextjs) — step-by-step guide for this example
- [Authgear Documentation](https://docs.authgear.com/)
- [`@authgear/nextjs` on npm](https://www.npmjs.com/package/@authgear/nextjs)
- [Next.js Documentation](https://nextjs.org/docs)
