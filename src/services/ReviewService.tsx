/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { apiFetch } from "@/lib/fetch";
import {
  IFilterOptions,
  IResponse,
  IResponseWithMetadata,
  IReview,
} from "@/types";
import { revalidateTag } from "next/cache";

interface IReviewData {
  productId: string;
  rating: string;
  comment: string;
}

export const createReview = async (payload: IReviewData) => {
  try {
    const data = await apiFetch("/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (data?.success) {
      revalidateTag("user-review");
    }

    return data;
  } catch (error: any) {
    return error?.response?.data;
  }
};

export const fetchProductReviews = async (
  productId: string,
  params: IFilterOptions
): Promise<IResponseWithMetadata<IReview[]>> => {
  // Build query string dynamically
  const queryParams = new URLSearchParams(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Object.entries(params).filter(([_, value]) => value !== undefined)
  ).toString();
  try {
    const data = await apiFetch(`/reviews/${productId}?${queryParams}`, {
      cache: "default",
      next: {
        tags: ["user-review"],
      },
    });

    console.log(data);

    return data;
  } catch (error: any) {
    return error?.response?.data;
  }
};

export const fetchReviewByProductId = async (
  productId: string
): Promise<IResponse<IReview>> => {
  try {
    const data = await apiFetch(`/reviews/user-review/${productId}`, {
      cache: "default",
      next: {
        tags: ["user-review"],
      },
    });

    return data;
  } catch (error: any) {
    return error?.response?.data;
  }
};
