"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";

import UserProvider from "@/context/user.provider";
import { IChildrenProps } from "@/types";

const queryClient = new QueryClient();

export function Providers({ children }: IChildrenProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <Toaster />
        {children}
      </UserProvider>
    </QueryClientProvider>
  );
}
