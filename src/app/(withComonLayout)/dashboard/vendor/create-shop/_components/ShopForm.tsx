"use client";

import CTForm from "@/components/Form/CTForm";
import CTImageForm from "@/components/Form/CTImageForm";
import { Button } from "@/components/ui/button";
import { ShopSchema } from "@/schema/shop.schema";
import { addShop } from "@/services/ShopService";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import ShopInfoForm from "./ShopInfoForm";

const ShopForm = () => {
  const router = useRouter();
  // Save a new product to the database
  const onSubmit = async (data: FieldValues) => {
    const formData = new FormData();

    // Append form fields except the file
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value as string);
    });

    try {
      const res = await addShop(formData);
      if (res?.success) {
        toast.success(res.message);
        router.push("/dashboard/vendor/create-shop");
      } else if (!res?.success) {
        toast.error(res.message);
      }
    } catch {
      toast.error("Something went wrong during save shop info!");
    }
  };

  return (
    <CTForm onSubmit={onSubmit} resolver={ShopSchema.createSchema}>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <ShopInfoForm />
        <CTImageForm
          name="logo"
          label="Shop Image"
          placeholder="Upload an image for your product."
        />
      </div>
      <div className="flex justify-end">
        <Button type="submit" size="lg">
          Create
        </Button>
      </div>
    </CTForm>
  );
};

export default ShopForm;
