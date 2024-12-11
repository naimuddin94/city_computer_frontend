"use client";

import { Button } from "@/components/ui/button";
import { MinusIcon, PlusIcon, Trash2 } from "lucide-react";
import Image from "next/image";

interface CartItemCardProps {
  id: string;
  image: string;
  name: string;
  price: number;
  quantity: number;
  onIncrease: (id: string) => void;
  onDecrease: (id: string) => void;
  onRemove: (id: string) => void;
}

function CartItemCard({
  id,
  image,
  name,
  price,
  quantity,
  onIncrease,
  onDecrease,
  onRemove,
}: CartItemCardProps) {
  return (
    <div className="grid grid-cols-[80px_1fr_auto] items-center gap-4">
      <Image
        src={image}
        alt="Product image"
        width={80}
        height={80}
        className="rounded-lg object-cover aspect-[4/3] hidden md:flex"
      />
      <div className="grid gap-1">
        <h3 className="font-semibold">{name}</h3>
        <div className="flex items-center gap-2">
          <p className="text-muted-foreground text-sm">
            ${price.toFixed(2)} x {quantity}
          </p>
          <button className="p-1 hover:bg-muted rounded-md group">
            <PlusIcon
              onClick={() => onIncrease(id)}
              size={18}
              className="group-hover:text-green-500"
            />
          </button>
          <button
            disabled={quantity < 2}
            className="p-1 hover:bg-muted rounded-md group"
          >
            <MinusIcon
              onClick={() => onDecrease(id)}
              size={18}
              className="group-hover:text-theme"
            />
          </button>
        </div>
      </div>
      <div className="flex items-center gap-1 justify-end">
        <h2 className="text-right font-semibold">
          ${(price * quantity).toFixed(2)}
        </h2>
        <Button variant="ghost" onClick={() => onRemove(id)}>
          <Trash2 size={20} className="text-theme" />
        </Button>
      </div>
    </div>
  );
}

export default CartItemCard;
