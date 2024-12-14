"use client";

import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ManageProductHeader = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const router = useRouter();

  useEffect(() => {
    const queryParams = new URLSearchParams();

    if (searchTerm) {
      queryParams.append("searchTerm", searchTerm);
    }

    return router.push(
      `/dashboard/vendor/manage-products?${queryParams.toString()}`
    );
  }, [searchTerm]);

  return (
    <div>
      <div className="">
        <h1 className="text-2xl font-bold text-center text-primary">
          Shop Management
        </h1>
      </div>
      <div className="my-5">
        <Input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          type="search"
          placeholder="Search products..."
          className="max-w-xs border-primary"
        />
      </div>
    </div>
  );
};

export default ManageProductHeader;
