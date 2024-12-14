"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ManageShopHeader = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [limit, setLimit] = useState("");

  const router = useRouter();

  useEffect(() => {
    const queryParams = new URLSearchParams();

    if (searchTerm) {
      queryParams.append("searchTerm", searchTerm);
    }
    if (limit) {
      queryParams.append("limit", limit);
    }

    router.push(`/dashboard/admin/manage-shops?${queryParams.toString()}`);
  }, [limit, searchTerm]);

  return (
    <div>
      <div className="">
        <h1 className="text-2xl font-bold text-center text-primary">
          Shop Management
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between my-5">
        <div className="w-full md:w-1/2 mb-4 md:mb-0 flex gap-4">
          <Input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            type="search"
            placeholder="Search products..."
            className="w-full"
          />
        </div>
        <div className="flex items-center gap-4">
          <Select
            onValueChange={(value) => setLimit(value)}
            value={limit.toString()}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select limit" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="8">8</SelectItem>
              <SelectItem value="16">16</SelectItem>
              <SelectItem value="32">32</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default ManageShopHeader;
