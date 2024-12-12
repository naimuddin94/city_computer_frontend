/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { apiFetch } from "@/lib/fetch";

interface IOrderItemType {
  productId: string;
  quantity: number;
  coupon?: string;
}

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
