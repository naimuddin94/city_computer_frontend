/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cart.context";
import { useUser } from "@/context/user.context";
import { createOrder } from "@/services/OrderService";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Loader2 } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";
import { toast } from "sonner";
import SuccessDialog from "./SuccessDialog";
const CheckoutForm = ({ clientSecret }: { clientSecret: string }) => {
  const [orderDetails, setOrderDetails] = useState<any>(null);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useUser();
  const { cart, clearCart } = useCart();

  // shipping information
  const searchParams = useSearchParams();
  const address = searchParams.get("address");
  const phone = searchParams.get("phone");
  const coupon = searchParams.get("coupon");

  const handleSubmit = async (e: FormEvent) => {
    setLoading(true);
    e.preventDefault();
    if (!stripe || !elements) {
      setLoading(false);
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      setLoading(false);
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setLoading(false);
      console.log("[error]", error);
    }

    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.name,
            email: user?.email,
          },
        },
      });

    if (confirmError) {
      setLoading(false);
      toast.error(confirmError.message);
    } else {
      if (paymentIntent.status === "succeeded") {
        const ordersData = {
          orderItems: cart.map((item) => ({
            productId: item.id,
            quantity: item.quantity,
            coupon: coupon || undefined,
          })),
          paymentInfo: paymentIntent.id,
          payAmount: paymentIntent.amount / 100,
          address: address || "",
          phone: phone || "",
        };

        const data = await createOrder(ordersData);

        console.log(data);
        if (data?.success) {
          toast.success("Thanks for your order");
          clearCart();
          setOrderDetails(data.data);
        } else {
          toast.error("Error creating order");
        }
      }
    }

    setLoading(false);
  };

  return (
    <Container className="my-8 md:my-16">
      <div className="max-w-[30rem] mx-auto bg-muted dark:bg-white/90 border-2 border-theme p-6 rounded-lg">
        <form onSubmit={handleSubmit} className="flex flex-col justify-end">
          <CardElement />
          <Button variant="outline" className="mt-8" disabled={loading}>
            {loading ? <Loader2 className="animate-spin" /> : "Pay"}
          </Button>
        </form>
      </div>

      <SuccessDialog
        open={!!orderDetails}
        onClose={() => {
          setOrderDetails(null);
          router.push("/");
        }}
        orderDetails={orderDetails}
      />
    </Container>
  );
};

export default CheckoutForm;
