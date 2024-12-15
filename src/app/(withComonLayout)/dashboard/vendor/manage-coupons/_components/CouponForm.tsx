"use client";

import CTDatePicker from "@/components/Form/CTDatePicker";
import CTForm from "@/components/Form/CTForm";
import CTInput from "@/components/Form/CTInput";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShopValidation } from "@/schema/coupon.schema";
import { FieldValues } from "react-hook-form";

interface IProps {
  handleAddCoupon: (data: FieldValues) => Promise<void>;
}

const CouponForm = ({ handleAddCoupon }: IProps) => {
  return (
    <div className="p-6 flex flex-col md:items-end">
      <h2 className="text-2xl font-bold mb-4 text-primary">Add Coupon</h2>
      <Card className="p-5">
        <CardContent>
          <CTForm
            onSubmit={handleAddCoupon}
            resolver={ShopValidation.createSchema}
          >
            <CTInput name="code" label="Code" placeholder="Enter code here" />
            <div className="flex items-center gap-2 pt-2">
              <CTInput name="discount" label="Discount" placeholder="Percent" />
              <CTDatePicker name="expiryDate" label="Expiry Date" />
            </div>

            <Button type="submit" className="mt-4">
              Create
            </Button>
          </CTForm>
        </CardContent>
      </Card>
    </div>
  );
};

export default CouponForm;
