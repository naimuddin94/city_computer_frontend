/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Confirmation from "@/components/shared/Confirmation";
import PaginationComponent from "@/components/shared/PaginationComponent";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ICategory, IMeta } from "@/types";
import { Trash2 } from "lucide-react";

interface IProps {
  categories: ICategory[];
  meta: IMeta | null;
  onPageChange: (value: number) => void;
  handleDeleteCategory: (value: string) => void;
}

const Categories = ({
  categories,
  meta,
  onPageChange,
  handleDeleteCategory,
}: IProps) => {
  return (
    <div className="p-6 max-w-sm">
      <h2 className="text-2xl font-bold mb-4 text-primary">
        Existing Categories
      </h2>
      <Table className="mb-8">
        <TableHeader>
          <TableRow>
            <TableHead>#</TableHead>
            <TableHead>Name</TableHead>
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {categories.length > 0 &&
            categories.map((category, idx) => (
              <TableRow key={category.categoryId}>
                <TableCell>{idx + 1}</TableCell>
                <TableCell>{category.name}</TableCell>
                <TableCell className="flex justify-center">
                  <Confirmation
                    onConfirm={() => handleDeleteCategory(category.categoryId)}
                  >
                    <Trash2
                      size={16}
                      className="text-red-900 cursor-pointer hover:text-primary"
                    />
                  </Confirmation>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <div className="text-center opacity-50">
        {categories.length === 0 && "No categories available"}
      </div>
      {meta && meta?.totalPages > 1 && (
        <PaginationComponent meta={meta} onPageChange={onPageChange} />
      )}
    </div>
  );
};

export default Categories;
