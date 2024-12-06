/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

import { signinUser, signupUser } from "../services/AuthService";

export const useUserSignup = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_SIGNUP"],
    mutationFn: async (userData) => await signupUser(userData),
    onSuccess: (data) => {
      toast.success(data?.message);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useUserSignin = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_SIGNIN"],
    mutationFn: async (userData) => await signinUser(userData),
    onSuccess: (data) => {
      toast.success(data?.message);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
