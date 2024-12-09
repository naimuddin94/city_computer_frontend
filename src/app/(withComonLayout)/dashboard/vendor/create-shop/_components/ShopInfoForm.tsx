"use client";

import CTInput from "@/components/Form/CTInput";
import CTTextarea from "@/components/Form/CTTextarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ShopInfoForm = () => {
  return (
    <div className="col-span-2 lg:col-span-2">
      <Card>
        <CardHeader>
          <CardTitle className="text-primary">Shop Details</CardTitle>
          <CardDescription>Fill in the details for your shop.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <CTInput label="Name" name="name" placeholder="Enter your name" />
            <CTInput
              name="address"
              label="Address"
              placeholder="Enter shop address"
            />
            <CTTextarea
              name="description"
              label="Description"
              placeholder="Write here shop details..."
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ShopInfoForm;
