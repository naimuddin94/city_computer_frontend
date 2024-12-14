/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { apiFetch } from "@/lib/fetch";
import {
  ICategory,
  IFilterOptions,
  IResponse,
  IResponseWithMetadata,
  IShop,
} from "@/types";
import { revalidateTag } from "next/cache";

export const addShop = async (
  payload: FormData
): Promise<IResponse<ICategory>> => {
  try {
    const data = await apiFetch(`/shops`, {
      method: "POST",
      body: payload,
    });

    if (data?.success) {
      revalidateTag("shops");
    }

    return data;
  } catch (error: any) {
    return error?.response?.data;
  }
};

export const getShopInfo = async (
  shopId: string
): Promise<IResponse<IShop>> => {
  try {
    const data = await apiFetch(`/shops/${shopId}`);
    return data;
  } catch (error: any) {
    return error?.response?.data;
  }
};

export const getAllShops = async (
  params: IFilterOptions
): Promise<IResponseWithMetadata<IShop[]>> => {
  let queryParams;

  // Build query string dynamically
  if (Object.keys(params).length > 0) {
    queryParams = new URLSearchParams(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      Object.entries(params).filter(([_, value]) => value !== undefined)
    ).toString();
  }

  try {
    const data = await apiFetch(`/shops?${queryParams}`, {
      cache: "default",
      next: {
        tags: ["shops"],
      },
    });
    return data;
  } catch (error: any) {
    return error?.response?.data;
  }
};

export const changeShopStatus = async (shopId: string, status: string) => {
  try {
    const data = await apiFetch(`/shops/${shopId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status }),
    });

    if (data?.success) {
      revalidateTag("shops");
    }

    return data;
  } catch (error: any) {
    return error?.response?.data;
  }
};
