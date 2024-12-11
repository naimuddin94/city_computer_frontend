"use client";

import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cart.context";
import { IProduct } from "@/types";
import { MinusIcon, PlusIcon, Trash2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface IProps {
  product: IProduct;
}

const CartProductCard = ({ product }: IProps) => {
  const [productQuantity, setProductQuantity] = useState(1);

  const { removeFromCart } = useCart();

  const total = product.price * productQuantity;

  const handleAddProduct = () => {
    setProductQuantity((prev) => prev++);
  };

  return (
    <div className="grid grid-cols-[80px_1fr_auto] items-center gap-4">
      <Image
        src={product.image}
        alt={product.name}
        width={80}
        height={80}
        className="rounded-lg object-cover aspect-[4/3] hidden md:flex"
      />
      <div className="grid gap-1">
        <h3 className="font-semibold">{product.name}</h3>
        <div className="flex items-center gap-2">
          <p className="text-muted-foreground text-sm">
            ${product.price?.toFixed(2)} x {productQuantity}
          </p>
          <button className="p-1 hover:bg-muted rounded-md group">
            <PlusIcon
              size={18}
              className="group-hover:text-green-500"
              onClick={handleAddProduct}
            />
          </button>
          <button className="p-1 hover:bg-muted rounded-md group">
            <MinusIcon size={18} className="group-hover:text-theme" />
          </button>
        </div>
      </div>
      <div className="flex items-center gap-1 justify-end">
        <h2 className="text-right font-semibold">${total}</h2>
        <div className="flex gap-8 ">
          <Button
            variant="ghost"
            onClick={() => removeFromCart(product.productId)}
          >
            <Trash2 size={20} className="text-theme" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartProductCard;
