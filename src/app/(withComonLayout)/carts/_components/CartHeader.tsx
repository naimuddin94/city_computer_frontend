"use client";

import { Button } from "@/components/ui/button";
import { BsCartX } from "react-icons/bs";

interface CartHeaderProps {
  onClearCart: () => void;
}

function CartHeader({ onClearCart }: CartHeaderProps) {
  return (
    <div className="mb-8 flex justify-between">
      <h1 className="text-2xl font-bold">Your Cart</h1>
      <Button
        onClick={onClearCart}
        variant="outline"
        className="gap-2 items-center"
      >
        <BsCartX size={16} />
        Clear
      </Button>
    </div>
  );
}

export default CartHeader;
