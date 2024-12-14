"use client";

import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { changeShopStatus } from "@/services/ShopService";
import { IShop } from "@/types";
import { BadgeCheck, BadgeX, ShieldAlert } from "lucide-react";
import moment from "moment";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";

interface IProps {
  shop: IShop;
  index: number;
}

const ShopRow = ({ shop, index }: IProps) => {
  const [status, setStatus] = useState(shop.status);

  const handleStatus = async () => {
    const changeStatus = status === "active" ? "blocked" : "active";
    const data = await changeShopStatus(shop.shopId, changeStatus);
    if (data?.success) {
      setStatus(data?.data?.status);
      toast.success(data.message);
    }
  };

  return (
    <TableRow key={shop.shopId}>
      <TableCell className="font-medium">{index + 1}</TableCell>
      <TableCell className="flex gap-2 items-center justify-center">
        <Image src={shop.logo} alt={shop.name} width={40} height={40} />
        <div>
          <h3>{shop.name}</h3>
          <p className="text-slate-700 text-xs">{shop.address}</p>
        </div>
      </TableCell>
      <TableCell
        className={`text-center ${status === "blocked" && "text-red-500"}`}
      >
        {status}
      </TableCell>
      <TableCell>
        <div className="flex justify-center">
          {shop.isVerified ? (
            <BadgeCheck size={20} strokeWidth={1} className="text-blue-600" />
          ) : (
            <BadgeX size={20} strokeWidth={1} className="text-destructive" />
          )}
        </div>
      </TableCell>
      <TableCell className="text-center">
        {moment(shop.createdAt).subtract(10, "days").calendar()}
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <Button size="icon" variant="outline" onClick={handleStatus}>
            <ShieldAlert className="h-4 w-4 text-primary" />
          </Button>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default ShopRow;
