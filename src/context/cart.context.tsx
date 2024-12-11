"use client";

import { IChildrenProps } from "@/types";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "sonner";

interface AddCartItemData {
  id: string;
  image: string;
  name: string;
  stock: number;
  price: number;
}

export interface CartItem extends AddCartItemData {
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  totalAmount: number;
  addToCart: (value: AddCartItemData) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  increaseProduct: (id: string) => void;
  decreaseProduct: (id: string) => void;
}

// Create Context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Hook to access cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }: IChildrenProps) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [totalAmount, setTotalAmount] = useState(0);

  // Load cart from localStorage on initial load
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart) as CartItem[];
      setCart(parsedCart);

      // Calculate total amount after setting the cart
      const calculatedTotalAmount = parsedCart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      setTotalAmount(calculatedTotalAmount);
    }
  }, []);

  // Save cart to localStorage when cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add product to cart
  const addToCart = (product: AddCartItemData) => {
    setCart((prev) => {
      toast.success("Product added to cart");
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        if (exists?.quantity >= exists?.stock) {
          toast.error("Insufficient quantity");
          return prev;
        }
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });

    setTotalAmount((prev) => prev + product.price);
  };

  // Remove product from cart
  const removeFromCart = (productId: string) => {
    const exists = cart.find((item) => item.id === productId);
    if (exists) {
      setCart((prev) => {
        const updatedCart = prev.filter((item) => item.id !== productId);
        // Recalculate the total amount after removing the product
        const newTotalAmount = updatedCart.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
        setTotalAmount(newTotalAmount); // Update total amount
        return updatedCart;
      });
      toast.success("Product removed from cart");
    }
  };

  // Decrease product quantity
  const decreaseProduct = (id: string) => {
    const exists = cart.find((c) => c.id === id);
    if (exists && exists.quantity <= 1) {
      return;
    }
    if (exists) {
      setCart((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, quantity: --item.quantity } : item
        )
      );
      setTotalAmount((prev) => prev - exists.price);
      toast.success("Decrease product from cart");
    }
  };

  // Decrease product quantity
  const increaseProduct = (id: string) => {
    const exists = cart.find((c) => c.id === id);
    if (exists) {
      if (exists?.quantity >= exists?.stock) {
        return toast.error("Insufficient quantity");
      }
      setCart((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, quantity: ++item.quantity } : item
        )
      );
      setTotalAmount((prev) => prev + exists.price);
      toast.success("Increase product to cart");
    }
  };

  // Clear entire cart
  const clearCart = () => {
    setCart([]);
    setTotalAmount(0);
    toast.success("Cart cleared");
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        totalAmount,
        increaseProduct,
        decreaseProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
