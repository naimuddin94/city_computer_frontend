"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IMyOrder } from "@/types";
import { PackageIcon } from "lucide-react";
import OrderProductRow from "./OrderProductRow";

type TOderCardProps = {
  order: IMyOrder;
  index: number;
};

const MyOrderCard = ({ order, index }: TOderCardProps) => {
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
              {order?.orderItems.map((item) => (
                <OrderProductRow
                  key={item.orderItemId}
                  item={item}
                  status={order.status}
                />
              ))}
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
