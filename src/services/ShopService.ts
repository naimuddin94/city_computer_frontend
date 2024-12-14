/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { apiFetch } from "@/lib/fetch";
import { ICategory, IResponse, IShop } from "@/types";
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

export const getAllShops = async (): Promise<IResponse<IShop[]>> => {
  try {
    const data = await apiFetch("/shops");
    return data;
  } catch (error: any) {
    return error?.response?.data;
  }
};
