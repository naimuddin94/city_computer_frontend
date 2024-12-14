"use client";

import CTForm from "@/components/Form/CTForm";
import CTImageForm from "@/components/Form/CTImageForm";
import { Button } from "@/components/ui/button";
import { ProductSchema } from "@/schema/product.schema";
import { saveProduct, updateProduct } from "@/services/ProductService";
import { IProduct } from "@/types";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import ProductInfoForm from "./ProductInfoForm";

interface IProps {
  categories: { categoryId: string; name: string }[];
  product: IProduct | null;
}
const ProductForm = ({ categories, product }: IProps) => {
  const router = useRouter();
  const defaultValues: Record<string, unknown> = {};
  let image = null;
  let category;

  if (product) {
    image = product.image;
    category = product.category.categoryId;
    defaultValues["name"] = product.name;
    defaultValues["description"] = product.description;
    defaultValues["price"] = product.price.toString();
    defaultValues["stock"] = product.stock.toString();
    defaultValues["category"] = product.category.categoryId;
  }

  // Save a new product to the database
  const onSubmit = async (data: FieldValues) => {
    const formData = new FormData();

    console.log("from Product form: ", data);

    // Append form fields except the file
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value as string);
    });

    if (product) {
      try {
        const res = await updateProduct(product.productId, formData);
        if (res?.success) {
          toast.success(res.message);
          router.back();
        } else if (!res?.success) {
          toast.error(res.message);
        }
      } catch {
        toast.error("Something went wrong during update product!");
      }
    } else {
      try {
        const res = await saveProduct(formData);
        if (res?.success) {
          toast.success(res.message);
        } else if (!res?.success) {
          toast.error(res.message);
        }
      } catch {
        toast.error("Something went wrong during save product!");
      }
    }
  };

  return (
    <CTForm
      onSubmit={onSubmit}
      resolver={
        product ? ProductSchema.updateSchema : ProductSchema.createSchema
      }
      defaultValues={defaultValues}
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <CTImageForm
          name="image"
          label="Product Image"
          defaultValue={image}
          placeholder="Upload an image for your product."
        />
        <ProductInfoForm categories={categories} category={category} />
      </div>
      <div className="flex justify-end mt-5">
        <Button type="submit" className="min-w-28">
          {product ? "Update product" : "Save Product"}
        </Button>
      </div>
    </CTForm>
  );
};

export default ProductForm;
