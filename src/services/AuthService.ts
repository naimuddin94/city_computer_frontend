/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import axiosInstance from "@/lib/axiosInstance";
import { ITokenUser } from "@/types";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

export const signupUser = async (userData: FieldValues) => {
  try {
    const cookieStore = await cookies();
    const { data } = await axiosInstance.post("/auth/signup", userData);

    if (data?.success) {
      cookieStore.set("accessToken", data?.data?.accessToken);
      cookieStore.set("refreshToken", data?.data?.refreshToken);
    }

    return data;
  } catch (error: any) {
    return error?.response?.data;
  }
};

export const signinUser = async (userData: FieldValues) => {
  try {
    const cookieStore = await cookies();
    const { data } = await axiosInstance.post("/auth/signin", userData);

    if (data?.success) {
      cookieStore.set("accessToken", data?.data?.accessToken);
      cookieStore.set("refreshToken", data?.data?.refreshToken);
    }

    return data;
  } catch (error: any) {
    return error?.response?.data;
  }
};

export const signout = async () => {
  try {
    const cookieStore = await cookies();
    cookieStore.delete("accessToken");
    cookieStore.delete("refreshToken");

    const { data } = await axiosInstance.post("/auth/signout");

    return data;
  } catch (error: any) {
    return error?.response?.data;
  }
};

export const getCurrentUser = async () => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  let decodedToken = null;

  if (accessToken) {
    decodedToken = (await jwtDecode(accessToken)) as ITokenUser;

    const { data } = await axiosInstance.get(
      `/auth/get-role/${decodedToken.userId}`
    );

    return {
      userId: decodedToken.userId as string,
      email: decodedToken.email as string,
      image: decodedToken.image as string,
      role: data.data.role as string,
    };
  }

  return decodedToken;
};
