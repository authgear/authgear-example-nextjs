import type { AuthgearConfig } from "@authgear/nextjs";

export const authgearConfig: AuthgearConfig = {
  endpoint: process.env.AUTHGEAR_ENDPOINT!,
  clientID: process.env.AUTHGEAR_CLIENT_ID!,
  redirectURI: process.env.AUTHGEAR_REDIRECT_URI!,
  sessionSecret: process.env.SESSION_SECRET!,
};
