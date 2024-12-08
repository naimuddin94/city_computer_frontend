"use client";

import CTInput from "@/components/Form/CTInput";
import CTSearchSelect from "@/components/Form/CTSearchSelect";
import CTTextarea from "@/components/Form/CTTextarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface IProps {
  categories: { categoryId: string; name: string }[];
}

const ProductInfoForm = ({ categories }: IProps) => {
  const options = categories.map((category) => ({
    label: category.name,
    value: category.categoryId,
  }));
  return (
    <div className="col-span-2 lg:col-span-2">
      <Card>
        <CardHeader>
          <CardTitle className="text-primary">Product Details</CardTitle>
          <CardDescription>
            Fill in the details for your new product.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <CTInput label="Name" name="name" placeholder="Enter your name" />
            <CTTextarea
              name="description"
              label="Description"
              placeholder="Write here product description"
            />
            <div className="grid sm:grid-cols-2 gap-2">
              <CTSearchSelect
                options={options}
                name="category"
                label="Category"
                placeholder="Select category"
              />
              <CTInput
                label="Price"
                name="price"
                placeholder="Enter product price"
              />
              <CTInput
                label="Stock"
                name="stock"
                placeholder="Enter product stock"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductInfoForm;
