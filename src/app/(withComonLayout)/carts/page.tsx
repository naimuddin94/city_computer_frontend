"use client";

import Container from "@/components/shared/Container";
import { useCart } from "@/context/cart.context";
import CartHeader from "./_components/CartHeader";
import CartItemCard from "./_components/CartItemCard";
import CartSummary from "./_components/CartSummary";

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
        <CartHeader onClearCart={clearCart} />

        <div className="grid md:grid-cols-[1fr_300px] gap-8">
          <div className="grid gap-6 self-start">
            {cart.map((item) => (
              <CartItemCard
                key={item.id}
                {...item}
                onIncrease={increaseProduct}
                onDecrease={decreaseProduct}
                onRemove={removeFromCart}
              />
            ))}
          </div>

          <CartSummary
            totalAmount={totalAmount}
            discount={discount}
            tax={tax}
            total={total}
          />
        </div>
      </div>
    </Container>
  );
}

export default CartPage;
