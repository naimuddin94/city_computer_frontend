/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { apiFetch } from "@/lib/fetch";
import { IFilterOptions } from "@/types";
import { revalidateTag } from "next/cache";

export const getProducts = async (params: IFilterOptions) => {
  try {
    // Build query string dynamically
    const queryParams = new URLSearchParams(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      Object.entries(params).filter(([_, value]) => value !== undefined)
    ).toString();

    const { data } = await apiFetch(`/products?${queryParams}`, {
      cache: "force-cache",
      next: {
        tags: ["products"],
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const saveProduct = async (productData: FormData) => {
  try {
    const data = await apiFetch("/products", {
      method: "POST",
      body: productData,
    });

    if (data?.success) {
      revalidateTag("products");
    }

    return data;
  } catch (error: any) {
    return error?.response?.data;
  }
};
