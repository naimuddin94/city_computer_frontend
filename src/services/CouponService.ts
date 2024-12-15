/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { apiFetch } from "@/lib/fetch";
import {
  ICoupon,
  IFilterOptions,
  IResponse,
  IResponseWithMetadata,
} from "@/types";
import { revalidateTag } from "next/cache";
import { FieldValues } from "react-hook-form";

export const createCoupon = async (
  coupon: FieldValues
): Promise<IResponse<ICoupon>> => {
  try {
    const res = await apiFetch("/coupons", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(coupon),
    });

    if (res?.success) {
      revalidateTag("coupons");
    }

    return res;
  } catch (error: any) {
    return error?.response?.data;
  }
};

export const getCouponsByShopId = async (
  shopId: string
): Promise<IResponse<ICoupon[]>> => {
  try {
    const res = await apiFetch(`/coupons/shop/available/${shopId}`, {
      cache: "default",
      next: {
        tags: ["coupons"],
      },
    });

    return res;
  } catch (error: any) {
    return error?.response?.data;
  }
};

export const getShopCoupons = async (
  params: IFilterOptions
): Promise<IResponseWithMetadata<ICoupon[]>> => {
  try {
    // Build query string dynamically
    const queryParams = new URLSearchParams(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      Object.entries(params).filter(([_, value]) => value !== undefined)
    ).toString();

    const res = await apiFetch(`/coupons?${queryParams}`, {
      cache: "default",
      next: {
        tags: ["coupons"],
      },
    });

    if (res?.success) {
      revalidateTag("coupons");
    }

    return res;
  } catch (error: any) {
    return error?.response?.data;
  }
};

export const deleteCoupon = async (
  code: string
): Promise<IResponse<ICoupon[]>> => {
  try {
    const res = await apiFetch(`/coupons${code}`, {
      method: "DELETE",
    });

    if (res?.success) {
      revalidateTag("coupons");
    }

    return res;
  } catch (error: any) {
    return error?.response?.data;
  }
};

export const updateCoupon = async (
  code: string,
  updateData: Partial<ICoupon>
): Promise<IResponse<ICoupon[]>> => {
  try {
    const res = await apiFetch(`/coupons${code}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateData),
    });

    if (res?.success) {
      revalidateTag("coupons");
    }

    return res;
  } catch (error: any) {
    return error?.response?.data;
  }
};
