"use client";

import { useCart } from "@/context/cart.context";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

interface IProps {
  screenY: number;
}

const CartButton = ({ screenY }: IProps) => {
  const pathname = usePathname();
  const { cart } = useCart();

  return (
    <Link href="/carts">
      <div
        className={`relative ${
          screenY < 500 && pathname === "/" && "text-white hover:text-slate-800"
        } `}
      >
        <Button variant="ghost">
          <ShoppingCart size={20} />
        </Button>
        <span
          className={`absolute cursor-auto ${
            cart?.length > 9 ? "right-0" : "right-1"
          }`}
        >
          {cart?.length}
        </span>
      </div>
    </Link>
  );
};

export default CartButton;
