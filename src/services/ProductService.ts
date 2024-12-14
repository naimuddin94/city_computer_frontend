/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { apiFetch } from "@/lib/fetch";
import {
  IFilterOptions,
  IProduct,
  IResponse,
  IResponseWithMetadata,
} from "@/types";
import { revalidateTag } from "next/cache";

export const getProducts = async (
  params: IFilterOptions
): Promise<IResponseWithMetadata<IProduct[]>> => {
  try {
    // Build query string dynamically
    const queryParams = new URLSearchParams(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      Object.entries(params).filter(([_, value]) => value !== undefined)
    ).toString();

    const data = await apiFetch(`/products?${queryParams}`, {
      cache: "default",
      next: {
        tags: ["products"],
      },
    });

    return data;
  } catch (error: any) {
    return error?.response?.data;
  }
};

export const getShopProducts = async (
  params: IFilterOptions
): Promise<IResponseWithMetadata<IProduct[]>> => {
  try {
    // Build query string dynamically
    const queryParams = new URLSearchParams(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      Object.entries(params).filter(([_, value]) => value !== undefined)
    ).toString();

    const data = await apiFetch(
      `/products/fetch-product/shop-owner?${queryParams}`,
      {
        cache: "default",
        next: {
          tags: ["shop-products"],
        },
      }
    );

    return data;
  } catch (error: any) {
    return error?.response?.data;
  }
};

export const getProductsByIds = async (productIds: string[]) => {
  try {
    // Map over the productIds and create an array of fetch promises
    const productPromises = productIds.map((id) =>
      apiFetch(`/products/${id}`, {
        cache: "force-cache",
        next: {
          tags: ["cart-products"],
        },
      })
    );

    const productResponses = await Promise.all(productPromises);

    // Extract the data for each product from the response
    const products = productResponses
      .map((response) => {
        if (response.success) {
          return response.data;
        }
        return null;
      })
      .filter((product) => product !== null);

    return products;
  } catch (error: any) {
    return error?.response?.data;
  }
};

export const getProductById = async (
  productId: string
): Promise<IResponse<IProduct>> => {
  try {
    const data = await apiFetch(`/products/${productId}`, {
      cache: "no-store",
    });

    return data;
  } catch (error: any) {
    return error?.response?.data;
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

export const updateProduct = async (
  productId: string,
  productData: FormData
) => {
  try {
    const data = await apiFetch(`/products/${productId}`, {
      method: "PATCH",
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

export const getProductsFromMeli = async (searchTerm: string) => {
  try {
    const data = await apiFetch(`/meilisearch?searchTerm=${searchTerm}`);
    return data?.data?.hits;
  } catch (error: any) {
    return error?.response?.data;
  }
};

export const deleteProduct = async (
  productId: string
): Promise<IResponse<IProduct>> => {
  try {
    const data = await apiFetch(`/products/${productId}`, {
      method: "DELETE",
    });

    if (data?.success) {
      revalidateTag("products");
      revalidateTag("shop-products");
    }

    return data;
  } catch (error: any) {
    return error?.response?.data;
  }
};
