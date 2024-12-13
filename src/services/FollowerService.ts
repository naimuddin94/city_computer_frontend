/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { apiFetch } from "@/lib/fetch";
import { revalidateTag } from "next/cache";

export const checkFollowedShop = async (shopId: string): Promise<boolean> => {
  try {
    const { data } = await apiFetch(`/followers/is-followed/${shopId}`, {
      cache: "default",
      next: {
        tags: ["is-followed"],
      },
    });

    return data;
  } catch (error: any) {
    return error?.response?.data;
  }
};

export const followShop = async (shopId: string) => {
  try {
    const data = await apiFetch(`/followers/${shopId}`, {
      method: "POST",
    });

    if (data?.success) {
      revalidateTag("is-followed");
    }

    return data?.data;
  } catch (error: any) {
    return error?.response?.data;
  }
};
