"use client";

import CTForm from "@/components/Form/CTForm";
import CTInput from "@/components/Form/CTInput";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CategorySchema } from "@/schema/category.schema";
import { FieldValues } from "react-hook-form";

interface IProps {
  handleAddCategory: (data: FieldValues) => Promise<void>;
}

const CategoryForm = ({ handleAddCategory }: IProps) => {
  return (
    <div className="p-6 flex flex-col md:items-end">
      <h2 className="text-2xl font-bold mb-4 text-primary">Add Category</h2>
      <Card className="p-5 w-10/12">
        <CardContent>
          <CTForm
            onSubmit={handleAddCategory}
            resolver={CategorySchema.createSchema}
          >
            <CTInput
              name="name"
              label="Name"
              placeholder="Enter category name"
            />
            <Button type="submit" className="mt-4">
              Add Category
            </Button>
          </CTForm>
        </CardContent>
      </Card>
    </div>
  );
};

export default CategoryForm;
