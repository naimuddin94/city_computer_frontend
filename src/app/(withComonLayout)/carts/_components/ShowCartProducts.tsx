"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/context/cart.context";
import { getProductsByIds } from "@/services/ProductService";
import { IProduct } from "@/types";
import Link from "next/link";
import { useEffect, useState } from "react";
import CartProductCard from "./CartProductCard";

const ShowCartProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const { cart, totalAmount } = useCart();

  const fetchProducts = async () => {
    const products = await getProductsByIds(cart.map((p) => p.id));
    setProducts(products);
  };

  useEffect(() => {
    fetchProducts();
  }, [cart]);

  const total = products.reduce((total, product) => total + product.price, 0);

  return (
    <>
      <div className="grid gap-6 self-start">
        {products.length > 0 &&
          products?.map((product) => (
            <CartProductCard key={product.productId} product={product} />
          ))}
      </div>
      <div className="bg-muted/40 rounded-lg p-6 grid gap-4 max-h-80">
        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <span>Subtotal</span>
            <span>${totalAmount}</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Discount</span>
            <span className="text-green-500">-$0</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Tax</span>
            <span>$100</span>
          </div>
        </div>
        <Separator />
        <div className="flex items-center justify-between font-semibold">
          <span>Total</span>
          <span>${total}</span>
        </div>
        <Link href="/dashboard/checkout">
          <Button size="lg" className="w-full">
            Proceed to Checkout
          </Button>
        </Link>
      </div>
    </>
  );
};

export default ShowCartProducts;
