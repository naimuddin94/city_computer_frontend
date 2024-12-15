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
import { ICoupon, IMeta } from "@/types";
import { Trash2 } from "lucide-react";
import moment from "moment";

interface IProps {
  coupons: ICoupon[];
  meta: IMeta | null;
  onPageChange: (value: number) => void;
  handleDeleteCoupon: (value: string) => void;
}

const Coupons = ({
  coupons,
  meta,
  onPageChange,
  handleDeleteCoupon,
}: IProps) => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-primary">Existing Coupons</h2>
      <Table className="mb-8">
        <TableHeader>
          <TableRow>
            <TableHead>#</TableHead>
            <TableHead>Code</TableHead>
            <TableHead>Discount</TableHead>
            <TableHead>Expiry</TableHead>
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {coupons &&
            coupons?.length > 0 &&
            coupons.map((coupon, idx) => (
              <TableRow
                key={`${coupon.code}${coupon.shopId}`}
                className="text-slate-600"
              >
                <TableCell>{idx + 1}</TableCell>
                <TableCell>{coupon.code}</TableCell>
                <TableCell>{coupon.discount}%</TableCell>
                <TableCell>{moment(coupon.expiryDate).format("LL")}</TableCell>
                <TableCell className="flex justify-center">
                  <Confirmation
                    onConfirm={() => handleDeleteCoupon(coupon.code)}
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
        {coupons?.length === 0 && "No categories available"}
      </div>
      {meta && meta?.totalPages > 1 && (
        <PaginationComponent meta={meta} onPageChange={onPageChange} />
      )}
    </div>
  );
};

export default Coupons;
