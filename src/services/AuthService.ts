/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { envConfig } from "@/config";
import axiosInstance from "@/lib/axiosInstance";
import jwt, { JwtPayload } from "jsonwebtoken";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

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
    try {
      decodedToken = jwt.verify(
        accessToken,
        envConfig.access_token_secret as string
      ) as JwtPayload;

      return {
        userId: decodedToken.id as string,
        email: decodedToken.email as string,
        image: decodedToken.image as string,
        role: decodedToken.role as string,
      };
    } catch {
      toast.error("Something went wrong decoding access token");
      return null;
    }
  }

  return decodedToken;
};
