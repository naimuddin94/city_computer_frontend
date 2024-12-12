"use client";

import { useCart } from "@/context/cart.context";
import { useUser } from "@/context/user.context";
import { IProduct } from "@/types";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

interface IAddToCartProps {
  product: IProduct;
  variant?: "outline" | "default" | "destructive" | "secondary";
}

const AddToCart = ({ product, variant = "outline" }: IAddToCartProps) => {
  const { addToCart } = useCart();
  const router = useRouter();
  const { user } = useUser();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (!user) {
      return router.push("/signin");
    }
    addToCart({
      id: product.productId,
      image: product.image,
      price: product.price,
      stock: product.stock,
      name: product.name,
    });
  };

  return (
    <Button type="button" variant={variant} onClick={handleAddToCart}>
      Add to Cart
    </Button>
  );
};

export default AddToCart;
