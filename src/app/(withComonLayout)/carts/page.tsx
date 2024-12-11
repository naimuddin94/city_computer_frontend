"use client";

import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/context/cart.context";
import { MinusIcon, PlusIcon, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BsCartX } from "react-icons/bs";

function CartPage() {
  const {
    cart,
    totalAmount,
    decreaseProduct,
    removeFromCart,
    increaseProduct,
    clearCart,
  } = useCart();

  const discount = 0;
  const tax = 0;
  const total = totalAmount + tax - discount;

  return (
    <Container>
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="mb-8 flex justify-between">
          <h1 className="text-2xl font-bold">Your Cart</h1>
          <Button
            onClick={() => clearCart()}
            variant="outline"
            className="gap-2 items-center"
          >
            <BsCartX size={16} />
            Clear
          </Button>
        </div>
        <div className="grid md:grid-cols-[1fr_300px] gap-8">
          <div className="grid gap-6 self-start">
            {cart.length > 0 &&
              cart?.map((item) => {
                const { id, image, price, name, quantity } = item;
                return (
                  <div
                    key={id}
                    className="grid grid-cols-[80px_1fr_auto] items-center gap-4"
                  >
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
                            onClick={() => increaseProduct(id)}
                            size={18}
                            className="group-hover:text-green-500"
                          />
                        </button>
                        <button
                          disabled={quantity < 2}
                          className="p-1 hover:bg-muted rounded-md group"
                        >
                          <MinusIcon
                            onClick={() => decreaseProduct(id)}
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
                      <div className="flex gap-8 ">
                        <Button
                          variant="ghost"
                          onClick={() => removeFromCart(id)}
                        >
                          <Trash2 size={20} className="text-theme" />
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
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
            <Link href="/dashboard/checkout">
              <Button size="lg" className="w-full">
                Proceed to Checkout
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default CartPage;
