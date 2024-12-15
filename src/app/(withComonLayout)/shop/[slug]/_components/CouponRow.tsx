"use client";

import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { ICoupon } from "@/types";
import { ClipboardCheckIcon } from "lucide-react";
import moment from "moment";
import { toast } from "sonner";

interface IProps {
  coupon: ICoupon;
}

const CouponRow = ({ coupon }: IProps) => {
  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    toast.success("Coupon copied successfully");
  };
  return (
    <TableRow key={`${coupon.code}${coupon.shopId}`} className="text-slate-600">
      <TableCell>{coupon.code}</TableCell>
      <TableCell>{coupon.discount}%</TableCell>
      <TableCell>{moment(coupon.expiryDate).format("LL")}</TableCell>
      <TableCell>
        <Button
          variant="outline"
          size="icon"
          onClick={() => handleCopy(coupon.code)}
        >
          <ClipboardCheckIcon />
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default CouponRow;
