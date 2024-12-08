"use client";

import CTForm from "@/components/Form/CTForm";
import CTImageForm from "@/components/Form/CTImageForm";
import { Button } from "@/components/ui/button";
import { ProductSchema } from "@/schema/product.schema";
import { saveProduct } from "@/services/ProductService";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import ProductInfoForm from "./ProductInfoForm";

interface IProps {
  categories: { categoryId: string; name: string }[];
}
const ProductForm = ({ categories }: IProps) => {
  // Save a new product to the database
  const onSubmit = async (data: FieldValues) => {
    const formData = new FormData();

    // Append form fields except the file
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value as string);
    });

    try {
      const res = await saveProduct(formData);
      console.log(res);
      if (res?.success) {
        toast.success(res.message);
      } else if (!res?.success) {
        toast.error(res.message);
      }
    } catch {
      toast.error("Something went wrong during save product!");
    }
  };

  return (
    <CTForm onSubmit={onSubmit} resolver={ProductSchema.createSchema}>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <CTImageForm
          name="image"
          label="Product Image"
          placeholder="Upload an image for your product."
        />
        <ProductInfoForm categories={categories} />
      </div>
      <div className="flex justify-end mt-5">
        <Button type="submit" className="min-w-28">
          Save Product
        </Button>
      </div>
    </CTForm>
  );
};

export default ProductForm;
