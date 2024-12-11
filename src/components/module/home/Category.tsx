import { categoryData } from "@/lib/bannerData";
import React from "react";
import CategoryCard from "./features/CategoryCard";

const Category = () => {
  return (
    <div className="flex flex-wrap items-center justify-between px-4 py-5 gap-8 relative overflow-hidden bg-gradient-to-t from-yellow-400 to-primary">
      {categoryData?.map((category) => (
        <CategoryCard key={category.category} category={category} />
      ))}
    </div>
  );
};

export default Category;
