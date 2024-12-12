/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import CTForm from "@/components/Form/CTForm";
import CTInput from "@/components/Form/CTInput";
import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/context/cart.context";
import { useUser } from "@/context/user.context";
import { calculateAmount } from "@/services/OrderSrvice";
import { Loader } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";
import CartItemCard from "../carts/_components/CartItemCard";

function CheckoutPage() {
  const router = useRouter();
  const {
    cart,
    totalAmount: initialTotalAmount,
    decreaseProduct,
    removeFromCart,
    increaseProduct,
  } = useCart();

  const [coupon, setCoupon] = useState("");
  const [couponLoading, setCouponLoading] = useState(false);

  const [calculatedValues, setCalculatedValues] = useState({
    totalAmount: initialTotalAmount,
    totalDiscount: 0,
  });

  const { user } = useUser();

  const { register, handleSubmit, watch } = useForm();

  const discount = 0;
  const tax = 0;
  const subTotal = initialTotalAmount + tax - discount;

  const calculateTotalAmount = async () => {
    setCouponLoading(true);
    try {
      const { data } = await calculateAmount(
        cart.map((item) => ({
          productId: item.id,
          quantity: item.quantity,
          coupon,
        }))
      );

      setCalculatedValues({
        totalAmount: data?.totalAmount,
        totalDiscount: data?.totalDiscount,
      });
    } catch (error: any) {
      console.log(error);
    } finally {
      setCouponLoading(false);
    }
  };

  useEffect(() => {
    calculateTotalAmount();
  }, [cart, coupon]);

  const handlePayment = (
    price: number,
    shippingInfo: { address: string; phone: string }
  ) => {
    router.push(
      `/payment?price=${price}&coupon=${coupon}&address=${shippingInfo.address}&phone=${shippingInfo.phone}`
    );
  };

  const onSubmit = async (data: FieldValues) => {
    if (!data?.phone?.length || !data?.address?.length) {
      return toast.error("Please add shipping information");
    }

    handlePayment(calculatedValues.totalAmount, {
      address: data?.address,
      phone: data?.phone,
    });
  };

  const handleCoupon = async (data: FieldValues) => {
    if (data?.code?.trim().length > 0) {
      setCoupon(data?.code);
    }
  };

  return (
    <Container className="my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
          <div className="divide-y">
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
          <div className="mt-4">
            <div className="flex justify-between items-center">
              <label htmlFor="promo-code" className="font-medium">
                Promo Code
              </label>
              <CTForm onSubmit={handleCoupon}>
                <div className="flex items-center gap-2">
                  <CTInput
                    name="code"
                    label="Coupon"
                    withoutLabel
                    placeholder="Enter promo code"
                    className="border-gray-300 rounded-md px-3 py-2 mr-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                  <Button size="sm">
                    {couponLoading ? (
                      <Loader className="animate-spin" />
                    ) : (
                      "Apply"
                    )}
                  </Button>
                </div>
              </CTForm>
            </div>
          </div>
          <Separator className="mt-4" />
          <div className="mt-6">
            <div className="flex justify-between items-center">
              <span>Subtotal</span>
              <span>${subTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Discount</span>
              <span>${calculatedValues.totalDiscount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Tax</span>
              <span>${tax}</span>
            </div>
            <div className="flex justify-between items-center font-bold text-lg">
              <span>Total</span>
              <span>${calculatedValues.totalAmount.toFixed(2)}</span>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="border rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Shipping Information</h2>
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="col-span-2">
                  <label htmlFor="address" className="block font-medium mb-1">
                    Address
                  </label>
                  <Input
                    {...register("address")}
                    id="address"
                    type="text"
                    placeholder="Enter your address"
                    className="border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block font-medium mb-1">
                    Phone
                  </label>
                  <Input
                    {...register("phone")}
                    id="phone"
                    type="text"
                    placeholder="Enter your name"
                    className="border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <div>
                  <label htmlFor="city" className="block font-medium mb-1">
                    City
                  </label>
                  <Input
                    {...register("city")}
                    id="city"
                    type="text"
                    placeholder="Enter your city"
                    className="border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <div>
                  <label htmlFor="state" className="block font-medium mb-1">
                    State
                  </label>
                  <Input
                    {...register("state")}
                    id="state"
                    type="text"
                    placeholder="Enter your state"
                    className="border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <div>
                  <label htmlFor="zip" className="block font-medium mb-1">
                    Zip Code
                  </label>
                  <Input
                    {...register("zip")}
                    id="zip"
                    type="text"
                    placeholder="Enter your zip code"
                    className="border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="border rounded-lg shadow-md p-6 col-span-1 md:col-span-2 mt-8">
            <h2 className="text-2xl font-bold mb-4">Review and Place Order</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium mb-2">Shipping Address</h3>
                <p>{user?.email}</p>
                <p>{watch("phone")}</p>
                <p>{watch("address")}</p>
                <p>{watch("city")}</p>
                <p>
                  {watch("state")} {watch("zip")}
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Payment Method</h3>
                <p className="text-green-500">Visa / Mastercard</p>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex justify-between items-center">
                <span>Subtotal</span>
                <span>${initialTotalAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Discount</span>
                <span>${calculatedValues.totalDiscount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Tax</span>
                <span>${tax}</span>
              </div>
              <div className="flex justify-between items-center font-bold text-lg">
                <span>Total</span>
                <span>${calculatedValues.totalAmount.toFixed(2)}</span>
              </div>
            </div>
            <div className="mt-6">
              <Checkbox id="terms" className="mr-2 focus:ring-primary-500" />
              <Label htmlFor="terms" className="text-gray-500">
                I agree to the
                <Link href="#" className="text-primary-500 underline">
                  terms and conditions
                </Link>
              </Label>
            </div>
            <div className="mt-6">
              <Button size="lg" type="submit" className="w-full">
                Make Payment
              </Button>
            </div>
          </div>
        </form>
      </div>
    </Container>
  );
}

export default CheckoutPage;
