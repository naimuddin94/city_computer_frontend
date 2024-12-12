"use client";

import Loading from "@/components/shared/Loading";
import { envConfig } from "@/config";
import { getPaymentKey } from "@/services/OrderSrvice";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import CheckoutForm from "./_components/CheckoutForm";

const stripePromise = loadStripe(envConfig.stripe_pk as string);

export default function App() {
  const searchParams = useSearchParams();
  const price = Number(searchParams.get("price"));
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchPaymentKey = async () => {
    setLoading(true);
    try {
      const { data } = await getPaymentKey(price);
      setClientSecret(data);
    } catch {
      toast.error("Something went wrong fetching payment key");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (price > 0) {
      fetchPaymentKey();
    }
  }, []);

  const options = {
    clientSecret,
  };

  if (loading) {
    return <Loading />;
  }

  if (!clientSecret) {
    return (
      <div className="min-h-[60vh] flex justify-center items-center">
        <h1 className="text-3xl text-primary font-black">
          Your stripe key not fetched successfully
        </h1>
      </div>
    );
  }

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm clientSecret={clientSecret} />
    </Elements>
  );
}