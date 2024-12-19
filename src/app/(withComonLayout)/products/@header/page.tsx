"use client";

import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FilterIcon, FilterXIcon, ListOrderedIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function HeaderComponent() {
  const [limit, setLimit] = useState(8);
  const [searchTerm, setSearchTerm] = useState("");
  const [sort, setSort] = useState("");
  const router = useRouter();

  const handleSort = (sort: string) => {
    setSort(sort);
  };

  const handleClearFilter = () => {
    setSearchTerm("");
    setSort("");
  };

  useEffect(() => {
    const queryParams = new URLSearchParams();

    if (searchTerm) {
      queryParams.append("searchTerm", searchTerm.trim());
    }

    if (limit) {
      queryParams.append("limit", limit.toString());
    }

    if (sort && sort?.trim().length) {
      queryParams.append("sort", sort.trim());
    }

    router.push(`/products?${queryParams.toString()}`);
  }, [searchTerm, limit, sort]);

  return (
    <Container>
      <div className="flex flex-col md:flex-row items-center justify-between my-5">
        <div className="w-full md:w-1/2 mb-4 md:mb-0 flex gap-4">
          <Input
            type="search"
            placeholder="Search products..."
            className="w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <FilterIcon className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64 p-5">
              <DropdownMenuLabel>Filter by</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <div className="grid gap-2">
                <div>
                  <Label htmlFor="category">Category</Label>
                  <div className="grid gap-2">
                    <Label className="flex items-center gap-2">
                      <Checkbox value="Electronics" />
                      Computer
                    </Label>
                    <Label className="flex items-center gap-2">
                      <Checkbox value="Bags" />
                      CC Camera
                    </Label>
                    <Label className="flex items-center gap-2">
                      <Checkbox value="Outdoor" />
                      Top Product
                    </Label>
                    <Label className="flex items-center gap-2">
                      <Checkbox value="Accessories" />
                      Accessories
                    </Label>
                  </div>
                </div>
                <div>
                  <Label htmlFor="price-range">Price Range</Label>
                  <div className="w-full" />
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <ListOrderedIcon className="h-4 w-4 mr-2" />
                Sort
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64">
              <DropdownMenuLabel>Sort by</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem
                onClick={() => handleSort("-createdAt")}
              >
                Latest
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem onClick={() => handleSort("price")}>
                Price: Low to High
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem onClick={() => handleSort("-price")}>
                Price: High to Low
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="outline" onClick={handleClearFilter}>
            <FilterXIcon className="h-4 w-4 mr-2" />
            Clear
          </Button>
          <Select
            onValueChange={(value) => setLimit(Number(value))}
            value={limit.toString()}
          >
            <SelectTrigger>
              <SelectValue placeholder="Limit" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="8">8</SelectItem>
              <SelectItem value="16">16</SelectItem>
              <SelectItem value="32">32</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </Container>
  );
}

export default HeaderComponent;
