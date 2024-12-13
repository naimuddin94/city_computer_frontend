"use client";

import Hover from "@/components/shared/Hover";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IMyOrder } from "@/types";
import { PackageIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { BsStarFill } from "react-icons/bs";

type TOderCardProps = {
  order: IMyOrder;
  index: number;
};

const MyOrderCard = ({ order, index }: TOderCardProps) => {
  const [showModel, setShowModel] = useState(false);
  const [productId, setProductId] = useState("");
  return (
    <>
      <Card key={order.orderId}>
        <CardHeader className="flex items-center justify-between relative">
          <div className="flex items-center gap-2">
            <PackageIcon className="h-5 w-5 text-muted-foreground" />
            <span className="font-medium">Order # {index + 1}</span>
          </div>
          <span className="text-sm text-muted-foreground">
            {new Date(order.createdAt).toLocaleDateString()}
          </span>
          <Badge
            variant={
              order.status === "delivered"
                ? "secondary"
                : order.status === "processing"
                ? "outline"
                : "default"
            }
            className="text-xs absolute left-6"
          >
            {order.status}
          </Badge>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead className="pl-16">Shop</TableHead>
                <TableHead className="hidden sm:table-cell text-center">
                  Quantity
                </TableHead>
                <TableHead className="hidden sm:table-cell text-center">
                  Price
                </TableHead>
                <TableHead className="hidden sm:table-cell text-center">
                  Discount
                </TableHead>
                <TableHead className="text-right">Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {order?.orderItems.map((item) => {
                const { orderItemId, price, product, quantity } = item;
                return (
                  <TableRow key={orderItemId}>
                    <TableCell>
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
                    </TableCell>
                    <TableCell className="flex">
                      <div>
                        {order.status === "delivered" && (
                          <>
                            <Hover
                              image={product.shop.logo}
                              heading="Follow shop!"
                              description="Follow the shop for improve customer service and get notification from new product from this shop!"
                            >
                              <Button
                                onClick={() => {
                                  setShowModel(true);
                                  setProductId(product.productId);
                                }}
                                disabled={order.status !== "delivered"}
                                variant="ghost"
                                size="sm"
                                className=""
                              >
                                <BsStarFill
                                  size={18}
                                  className="text-primary"
                                />
                              </Button>
                            </Hover>
                          </>
                        )}
                      </div>
                      <div>
                        <h3>{product.shop.name}</h3>
                        <p className="text-xs text-slate-600">
                          {product.shop.address}
                        </p>
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
                    <TableCell className="text-right">
                      {price.toFixed(2)}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="flex justify-end">
          <div className="text-muted-foreground">
            Total: ${order.totalAmount.toFixed(2)}
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default MyOrderCard;
