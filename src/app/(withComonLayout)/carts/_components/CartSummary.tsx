"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@radix-ui/react-separator";
import Link from "next/link";

interface CartSummaryProps {
  totalAmount: number;
  discount: number;
  tax: number;
  total: number;
}

function CartSummary({ totalAmount, discount, tax, total }: CartSummaryProps) {
  return (
    <div className="bg-muted/40 rounded-lg p-6 grid gap-4 max-h-80">
      <div className="grid gap-2">
        <div className="flex items-center justify-between">
          <span>Subtotal</span>
          <span>${totalAmount.toFixed(2)}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Discount</span>
          <span className="text-green-500">-${discount.toFixed(2)}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>
      </div>
      <Separator />
      <div className="flex items-center justify-between font-semibold">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>
      <Link href="/checkout">
        <Button size="lg" className="w-full">
          Proceed to Checkout
        </Button>
      </Link>
    </div>
  );
}

export default CartSummary;
