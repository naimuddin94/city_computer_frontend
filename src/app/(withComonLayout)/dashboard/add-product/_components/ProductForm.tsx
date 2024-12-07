"use client";

import CTForm from "@/components/Form/CTForm";
import { Button } from "@/components/ui/button";
import { ProductSchema } from "@/schema/product.schema";
import { saveProduct } from "@/services/ProductService";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import ProductImageForm from "./ProductImageForm";
import ProductInfoForm from "./ProductInfoForm";

interface IProps {
  categories: { categoryId: string; name: string }[];
}
const ProductForm = ({ categories }: IProps) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [category, setCategory] = useState<string>("");

  // Save a new product to the database
  const onSubmit = async (data: FieldValues) => {
    const productData = {
      ...data,
      category,
    };

    const formData = new FormData();

    // Append form fields except the file
    Object.entries(productData).forEach(([key, value]) => {
      formData.append(key, value as string);
    });

    // Append the image if available
    if (selectedImage) {
      formData.append("image", selectedImage);
    }

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
        <ProductImageForm setSelectedImage={setSelectedImage} />
        <ProductInfoForm
          category={category}
          setCategory={setCategory}
          categories={categories}
        />
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
