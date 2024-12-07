/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import axiosInstance from "@/lib/axiosInstance";
import { FieldValues } from "react-hook-form";

export const saveProduct = async (productData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/products", productData);
    return data;
  } catch (error: any) {
    return error?.response?.data;
  }
};
