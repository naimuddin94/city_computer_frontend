"use client";

import {
  addCategory,
  deleteCategory,
  getCategories,
} from "@/services/CategoryService";
import { ICategory, IMeta } from "@/types";
import { useEffect, useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import Categories from "./Categories";
import CategoryForm from "./CategoryForm";

const AddCategory = () => {
  const [page, setPage] = useState(1);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [meta, setMeta] = useState<IMeta | null>(null);

  const onPageChange = (page: number) => {
    setPage(page);
  };

  const fetchCategories = async () => {
    const { data, meta } = await getCategories({ page, limit: 5 });
    setCategories(data);
    setMeta(meta);
  };

  useEffect(() => {
    fetchCategories();
  }, [page]);

  const handleAddCategory = async (data: FieldValues) => {
    try {
      const res = await addCategory(data);

      if (res?.success) {
        toast.success(res.message);
        fetchCategories();
      } else if (!res?.success) {
        toast.error(res.message);
      }
    } catch {
      toast.error("Something went wrong during add category!");
    }
  };

  const handleDeleteCategory = async (categoryId: string) => {
    try {
      const res = await deleteCategory(categoryId);

      if (res?.success) {
        toast.success(res.message);
        fetchCategories();
      } else if (!res?.success) {
        toast.error(res.message);
      }
    } catch {
      toast.error("Something went wrong during delete category!");
    }
  };

  return (
    <>
      <CategoryForm handleAddCategory={handleAddCategory} />
      <Categories
        categories={categories}
        meta={meta}
        onPageChange={onPageChange}
        handleDeleteCategory={handleDeleteCategory}
      />
    </>
  );
};

export default AddCategory;
