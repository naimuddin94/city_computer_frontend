"use client";

import Hover from "@/components/shared/Hover";
import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { IOrderItem, TOrderStatus } from "@/types";
import Image from "next/image";
import { useState } from "react";
import { BsStarFill } from "react-icons/bs";
import RatingModal from "./RatingModal";

type TOrderRowProps = {
  item: IOrderItem;
  status: TOrderStatus;
};
const OrderProductRow = ({ item, status }: TOrderRowProps) => {
  const { price, product, quantity } = item;
  const [showModel, setShowModel] = useState(false);

  return (
    <TableRow>
      <TableCell className="flex">
        <div className="font-medium flex items-center gap-2">
          <div>
            <Image
              src={product.image}
              alt={product.name}
              width={40}
              height={40}
            />
          </div>
          <h3>{product.name}</h3>
        </div>
        <div>
          {status === "delivered" && (
            <>
              <Hover
                image={product.shop.logo}
                heading="Provide your feedback !"
                description="Your feedback is very helpful for us to improve our product and management system."
              >
                <Button
                  onClick={() => setShowModel(true)}
                  disabled={status !== "delivered"}
                  variant="ghost"
                  size="sm"
                  className=""
                >
                  <BsStarFill size={18} className="text-primary" />
                </Button>
              </Hover>
              <RatingModal
                open={showModel}
                setShowModel={setShowModel}
                productId={product.productId}
              />
            </>
          )}
        </div>
      </TableCell>
      <TableCell>
        <div>
          <h3>{product.shop.name}</h3>
          <p className="text-xs text-slate-600">{product.shop.address}</p>
        </div>
      </TableCell>
      <TableCell className="hidden sm:table-cell text-center">
        <div>{quantity}</div>
      </TableCell>
      <TableCell className="hidden sm:table-cell text-center">
        {product.price}
      </TableCell>
      <TableCell className="hidden sm:table-cell text-center">
        {(product.price * quantity - price).toFixed(2)}
      </TableCell>
      <TableCell className="text-right">{price.toFixed(2)}</TableCell>
    </TableRow>
  );
};

export default OrderProductRow;
