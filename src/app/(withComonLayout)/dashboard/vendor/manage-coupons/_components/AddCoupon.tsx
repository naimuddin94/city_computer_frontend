"use client";

import {
  createCoupon,
  deleteCoupon,
  getShopCoupons,
} from "@/services/CouponService";
import { ICoupon, IMeta } from "@/types";
import { useEffect, useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import CouponForm from "./CouponForm";
import Coupons from "./Coupons";

const AddCoupon = () => {
  const [page, setPage] = useState(1);
  const [coupons, setCoupons] = useState<ICoupon[]>([]);
  const [meta, setMeta] = useState<IMeta | null>(null);

  const onPageChange = (page: number) => {
    setPage(page);
  };

  const fetchCoupons = async () => {
    const { data, meta } = await getShopCoupons({
      page: page.toString(),
      limit: "5",
    });
    setCoupons(data);
    setMeta(meta);
  };

  useEffect(() => {
    fetchCoupons();
  }, [page]);

  const handleAddCoupon = async (data: FieldValues) => {
    try {
      const res = await createCoupon(data);
      console.log("from addCoupon: ", res);
      if (res?.success) {
        toast.success(res.message);
        fetchCoupons();
      } else if (!res?.success) {
        toast.error(res.message);
      }
    } catch {
      toast.error("Something went wrong during add category!");
    }
  };

  const handleDeleteCoupon = async (code: string) => {
    try {
      const res = await deleteCoupon(code);
      if (res?.success) {
        toast.success(res.message);
        fetchCoupons();
      } else if (!res?.success) {
        toast.error(res.message);
      }
    } catch {
      toast.error("Something went wrong during delete category!");
    }
  };

  return (
    <>
      <CouponForm handleAddCoupon={handleAddCoupon} />
      <Coupons
        coupons={coupons}
        meta={meta}
        onPageChange={onPageChange}
        handleDeleteCoupon={handleDeleteCoupon}
      />
    </>
  );
};

export default AddCoupon;
