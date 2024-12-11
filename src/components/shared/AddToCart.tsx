"use client";

import { useCart } from "@/context/cart.context";
import { IProduct } from "@/types";
import { Button } from "../ui/button";

const AddToCart = ({ product }: { product: IProduct }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    addToCart({
      id: product.productId,
      image: product.image,
      price: product.price,
      stock: product.stock,
      name: product.name,
    });
  };

  return (
    <Button type="button" variant="outline" onClick={handleAddToCart}>
      Add to Cart
    </Button>
  );
};

export default AddToCart;
