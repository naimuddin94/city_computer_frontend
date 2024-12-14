"use client"

import AddToCart from "@/components/shared/AddToCart";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { IProduct } from "@/types";
import { truncate } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { MouseEvent } from "react";

function ProductCard({ product }: { product: IProduct }) {
  const { productId, name, image, description, price, category, shop } =
    product;

  const handleShopDetails = (e: MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    return redirect(`/shop/${shop.shopId}`);
  };

  return (
    <Link href={`/products/${productId}`} className="flex flex-col h-full">
      <Card className="w-full flex flex-col justify-between max-w-md hover:shadow hover:shadow-theme/50 duration-500 flex-grow">
        <div className="p-4 flex-1">
          <Image
            height={400}
            width={400}
            src={image}
            alt="Mechanical Keyboard"
            className="rounded-t-lg object-cover w-full aspect-[4/3]"
          />
        </div>
        <CardContent className="p-6 space-y-4 flex-1 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="flex items-center justify-end gap-3">
              <Badge variant="outline">{category.name}</Badge>
            </div>
            <CardTitle className="text-xl font-bold">{name}</CardTitle>
            <CardDescription className="text-muted-foreground text-justify">
              {truncate(description, 7)}
            </CardDescription>
            <CardTitle
              onClick={handleShopDetails}
              className="text-md font-semibold hover:underline"
            >
              {shop.name}
            </CardTitle>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold">${price}</span>
            <AddToCart product={product} />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

export default ProductCard;
