"use client";

import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { useUser } from "@/context/user.context";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Loader2 } from "lucide-react";
import { FormEvent, useState } from "react";
import { toast } from "sonner";
const CheckoutForm = ({ clientSecret }: { clientSecret: string }) => {
  console.log({ clientSecret });
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useUser();

  // Check for location state and navigate back if not present
  //   if (!location?.state) {
  //     navigate(-1);
  //     return;
  //   }

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

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setLoading(false);
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }

    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.userId,
            email: user?.email,
          },
        },
      });

    if (confirmError) {
      setLoading(false);
      toast.error(confirmError.message);
    } else {
      console.log({ paymentIntent });
      if (paymentIntent.status === "succeeded") {
        const ordersData = {
          // here add the order information
          paymentInfo: paymentIntent.id,
        };
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
    </Container>
  );
};

export default CheckoutForm;
