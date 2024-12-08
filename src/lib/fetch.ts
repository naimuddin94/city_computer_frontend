/* eslint-disable @typescript-eslint/no-explicit-any */

import { envConfig } from "@/config";
import { cookies } from "next/headers";

type FetchOptions = RequestInit & {
  headers?: Record<string, string>;
};

// Custom Fetch Function with Interceptor
export async function apiFetch(endpoint: string, options: FetchOptions = {}) {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  // Request Interceptor: Add headers, auth tokens, etc.
  const modifiedOptions = {
    ...options,
    headers: {
      cookie: `accessToken=${accessToken}`,
      ...options.headers,
    },
  };

  try {
    const response = await fetch(
      `${envConfig.api_host}${endpoint}`,
      modifiedOptions
    );

    // Parse JSON response
    return response.json();
  } catch (error: any) {
    console.error("API Fetch Error:", error);
    throw error;
  }
}
