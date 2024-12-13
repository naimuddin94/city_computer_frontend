"use client";

import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TableCell, TableRow } from "@/components/ui/table";
import { IShopOrder, TOrderStatus } from "@/types";
import { useState } from "react";

interface IProps {
  order: IShopOrder;
}

const orderStatus = ["pending", "processing", "shipped", "delivered"];

const OrdersTableRow = ({ order }: IProps) => {
  const [status, setStatus] = useState(order?.status);

  const handleChangeStatus = (newStatus: TOrderStatus) => {
    setStatus(newStatus);
  };

  return (
    <TableRow key={order.orderId}>
      <TableCell className="font-medium">{order.user.name}</TableCell>

      <TableCell>{order?.address}</TableCell>
      <TableCell>{order?.phone}</TableCell>
      <TableCell>${order.totalAmount}</TableCell>
      <TableCell>
        <Badge variant={status === "processing" ? "default" : "destructive"}>
          {status}
        </Badge>
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <Select
            onValueChange={(value) => handleChangeStatus(value as TOrderStatus)}
            value={status}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              {orderStatus.map((status, index) => (
                <SelectItem key={index} value={status}>
                  {status}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default OrdersTableRow;
