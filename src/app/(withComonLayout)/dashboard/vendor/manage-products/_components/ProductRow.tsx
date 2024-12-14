"use client";

import Confirmation from "@/components/shared/Confirmation";
import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { deleteProduct } from "@/services/ProductService";
import { IProduct } from "@/types";
import { FilePenLineIcon, Trash2 } from "lucide-react";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";

interface IProps {
  product: IProduct;
  index: number;
}

const ProductRow = ({ product, index }: IProps) => {
  const handleDeleteProduct = async () => {
    try {
      const res = await deleteProduct(product.productId);
      if (res?.success) {
        toast.success(res.message);
      } else if (!res?.success) {
        toast.error(res.message);
      }
    } catch {
      toast.error("Something went wrong during delete product!");
    }
  };

  return (
    <TableRow key={product.productId}>
      <TableCell className="font-medium">{index + 1}</TableCell>
      <TableCell className="flex justify-center">
        <Image src={product.image} alt={product.name} width={40} height={40} />
      </TableCell>
      <TableCell className="text-center">
        <h3>{product.name}</h3>
        <p className="text-slate-700 text-xs">{product.category.name}</p>
      </TableCell>
      <TableCell className="text-center">{product.stock}</TableCell>
      <TableCell className="text-center">{product.price}</TableCell>
      <TableCell className="text-center">
        {moment(product.createdAt).subtract(10, "days").calendar()}
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <Link
            href={`/dashboard/vendor/add-product?product=${product.productId}`}
          >
            <Button size="icon" variant="outline">
              <FilePenLineIcon className="h-4 w-4 text-slate-700" />
            </Button>
          </Link>
          <Confirmation onConfirm={handleDeleteProduct}>
            <Trash2
              size={16}
              className="text-red-900 cursor-pointer hover:text-primary"
            />
          </Confirmation>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default ProductRow;
