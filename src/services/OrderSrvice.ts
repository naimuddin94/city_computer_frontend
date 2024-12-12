/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { apiFetch } from "@/lib/fetch";
import { IMyOrders, IOrderData, IOrderItemType, IResponse } from "@/types";
import { revalidateTag } from "next/cache";

export const getPaymentKey = async (price: number) => {
  try {
    const data = await apiFetch("/payments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price }),
    });

    return data;
  } catch (error: any) {
    return error?.response?.data;
  }
};

export const calculateAmount = async (orderItems: IOrderItemType[]) => {
  try {
    const data = await apiFetch("/orders/calculate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ orderItems }),
    });

    return data;
  } catch (error: any) {
    return error?.response?.data;
  }
};

export const createOrder = async (orderData: IOrderData) => {
  try {
    const data = await apiFetch("/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    });

    if (data?.success) {
      revalidateTag("my-orders");
    }

    return data;
  } catch (error: any) {
    return error?.response?.data;
  }
};

export const getMyOrders = async (): Promise<IResponse<IMyOrders[]>> => {
  try {
    const data = await apiFetch("/orders", {
      cache: "force-cache",
      next: {
        tags: ["my-orders"],
      },
    });

    return data;
  } catch (error: any) {
    return error?.response?.data;
  }
};
