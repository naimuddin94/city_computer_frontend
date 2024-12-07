"use client";

import { Toaster } from "sonner";

import UserProvider from "@/context/user.provider";
import { IChildrenProps } from "@/types";

export function Providers({ children }: IChildrenProps) {
  return (
    <UserProvider>
      <Toaster />
      {children}
    </UserProvider>
  );
}
