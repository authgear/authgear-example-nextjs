"use server";

import { getOpenURL, Page } from "@authgear/nextjs/server";
import { authgearConfig } from "@/lib/authgear";

export async function getSettingsURLAction(): Promise<string> {
  return getOpenURL(Page.Settings, authgearConfig);
}
