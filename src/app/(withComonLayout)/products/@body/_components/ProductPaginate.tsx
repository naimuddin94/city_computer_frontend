"use client";

import PaginationComponent from "@/components/shared/PaginationComponent";
import { IMeta } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface IProps {
  meta: IMeta;
}

const ProductPaginate = ({ meta }: IProps) => {
  const router = useRouter();
  const params = useSearchParams();
  const [page, setPage] = useState(1);

  const searchTerm = params.get("searchTerm");

  useEffect(() => {
    setPage(1);
  }, [searchTerm]);

  const onPageChange = (page: number) => {
    setPage(page);
  };

  useEffect(() => {
    // const res = params
    //   .toString()
    //   .split("&")
    //   .map((value) => {
    //     if (value.split("=")[0] === "page") {
    //       return `page=${page.toString()}`;
    //     }
    //     return value;
    //   });

    // if (res.every((value) => value.split("=")[0] !== "page")) {
    //   res.push(`page=${page.toString()}`);
    // }

    const arr = params.toString().split("&");

    const res = arr.reduce((acc: string[], value: string, idx) => {
      if (value.split("=")[0] === "page") {
        acc.push(`page=${page.toString()}`);
      } else {
        acc.push(value);
        if (idx === arr.length - 1) {
          if (acc.every((value) => value.split("=")[0] !== "page")) {
            acc.push(`page=${page.toString()}`);
          }
        }
      }
      return acc;
    }, []);

    const searchParam = res.join("&");

    router.push(`/products?${searchParam}`);
  }, [page]);

  return (
    <div className="my-5">
      <PaginationComponent meta={meta} onPageChange={onPageChange} />
    </div>
  );
};

export default ProductPaginate;
