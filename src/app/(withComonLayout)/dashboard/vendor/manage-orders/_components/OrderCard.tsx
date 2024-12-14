"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { changeOrderStatus } from "@/services/OrderService";
import { IShopOrder, TOrderStatus } from "@/types";
import { PackageIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type TOderCardProps = {
  order: IShopOrder;
  index: number;
};

const cartStatus = ["pending", "processing", "shipped", "delivered"];

const OrderCard = ({ order, index }: TOderCardProps) => {
  const [status, setStatus] = useState(order.status);

  // Handle status change when user selects a new option
  const handleChangeStatus = async (newStatus: TOrderStatus) => {
    if (newStatus !== status) {
      setStatus(newStatus);
      await changeOrderStatus(order.orderId, newStatus);
    }
  };
  return (
    <>
      <Card key={order.orderId}>
        <div className="flex items-center justify-between p-5">
          <Badge
            variant={
              order.status === "delivered"
                ? "secondary"
                : order.status === "processing"
                ? "outline"
                : "default"
            }
            className="text-xs"
          >
            {order.status}
          </Badge>
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center gap-2">
              <PackageIcon className="h-5 w-5 text-muted-foreground" />
              <span className="font-medium">Order # {index + 1}</span>
            </div>
            <span className="text-sm text-muted-foreground">
              {new Date(order.createdAt).toLocaleDateString()}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Select
              onValueChange={(value) =>
                handleChangeStatus(value as TOrderStatus)
              }
              value={status}
            >
              <SelectTrigger className="border-primary h-8">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent className="text-xs">
                {cartStatus.map((status) => (
                  <SelectItem key={status} value={status}>
                    {status}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Discount</TableHead>
                <TableHead>Total</TableHead>
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
                            alt={product?.name}
                            width={40}
                            height={40}
                          />
                        </div>
                        <h3>{product?.name}</h3>
                      </div>
                    </TableCell>

                    <TableCell>
                      <div>{quantity}</div>
                    </TableCell>
                    <TableCell>{product.price}</TableCell>
                    <TableCell>
                      {(product.price * quantity - price).toFixed(2)}
                    </TableCell>
                    <TableCell>{price.toFixed(2)}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <div>
            <h3 className="text-primary">
              Total: ${order.totalAmount.toFixed(2)}
            </h3>
            <Separator className="opacity-30 mb-1" />
            <p className="text-slate-700 text-xs">
              Transition Id: {order.paymentId.slice(3)}
            </p>
            <p className="text-slate-700 text-xs">
              Payment status: {order.paymentStatus}
            </p>
          </div>
          <div>
            <h2 className="text-primary">Shipping Information</h2>
            <Separator className="opacity-30 mb-1" />
            <p className="text-slate-700 text-xs">{order.user.name}</p>
            <p className="text-slate-700 text-xs">{order.user.email}</p>
            <p className="text-slate-700 text-xs">{order.address}</p>
            <p className="text-slate-700 text-xs">{order.phone}</p>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default OrderCard;
