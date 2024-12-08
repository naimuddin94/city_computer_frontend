/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { apiFetch } from "@/lib/fetch";
import {
  ICategory,
  IGetCategoriesProps,
  IResponse,
  IResponseWithMetadata,
} from "@/types";
import { revalidateTag } from "next/cache";
import { FieldValues } from "react-hook-form";

export const getCategories = async ({
  page,
  limit = 10,
}: IGetCategoriesProps): Promise<IResponseWithMetadata<ICategory[]>> => {
  try {
    const data = await apiFetch(
      `/categories?sort=name&page=${page}&limit=${limit}`,
      {
        cache: "default",
        next: {
          tags: ["categories"],
        },
      }
    );

    return data;
  } catch (error: any) {
    return error?.response?.data;
  }
};

export const addCategory = async (
  payload: FieldValues
): Promise<IResponse<ICategory>> => {
  try {
    const data = await apiFetch(`/categories`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (data?.success) {
      revalidateTag("categories");
    }

    return data;
  } catch (error: any) {
    return error?.response?.data;
  }
};

export const deleteCategory = async (
  categoryId: string
): Promise<IResponse<ICategory>> => {
  try {
    const data = await apiFetch(`/categories/${categoryId}`, {
      method: "DELETE",
    });

    if (data?.success) {
      revalidateTag("categories");
    }

    return data;
  } catch (error: any) {
    return error?.response?.data;
  }
};
