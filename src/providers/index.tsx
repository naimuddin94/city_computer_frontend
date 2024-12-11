"use client";

import { CartProvider } from "@/context/cart.context";
import UserProvider from "@/context/user.context";
import { IChildrenProps } from "@/types";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";

const queryClient = new QueryClient();
export function Providers({ children }: IChildrenProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <UserProvider>
          <Toaster />
          {children}
        </UserProvider>
      </CartProvider>
    </QueryClientProvider>
  );
}
