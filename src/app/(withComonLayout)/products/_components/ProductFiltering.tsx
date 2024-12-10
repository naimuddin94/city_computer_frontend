"use client";

import Loader from "@/components/shared/Loader";
import NoDataFound from "@/components/shared/NoDataFound";
import PaginationComponent from "@/components/shared/PaginationComponent";
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
import { getProducts } from "@/services/ProductService";
import { IMeta, IProduct } from "@/types";
import { FilterIcon, FilterXIcon, ListOrderedIcon } from "lucide-react";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ProductFiltering = () => {
  const [limit, setLimit] = useState(8);
  const [searchTerm, setSearchTerm] = useState("");
  const [sort, setSort] = useState("");
  const [page, setPage] = useState(1);

  // Research the search
  const [products, setProducts] = useState<IProduct[]>([]);
  const [meta, setMeta] = useState<IMeta | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    const result = await getProducts({
      limit: limit.toString(),
      page: page.toString(),
      searchTerm,
      sort,
    });

    setProducts(result.data);
    setMeta(result.meta);
    setLoading(false);
  };

  const onPageChange = (page: number) => {
    setPage(page);
  };

  const handleSort = (sort: string) => {
    setSort(sort);
  };

  const handleClearFilter = () => {
    setSearchTerm("");
    setSort("");
  };

  useEffect(() => {
    setPage(1);
  }, [searchTerm]);

  useEffect(() => {
    setLoading(true);
    fetchProducts();
  }, [page, limit, sort, page, searchTerm]);

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between mb-5">
        <div className="w-full md:w-1/2 mb-4 md:mb-0 flex gap-4">
          <Input
            type="search"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
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
                      Electronics
                    </Label>
                    <Label className="flex items-center gap-2">
                      <Checkbox value="Bags" />
                      Bags
                    </Label>
                    <Label className="flex items-center gap-2">
                      <Checkbox value="Outdoor" />
                      Outdoor
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-5">
        {products && !loading ? (
          products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product.productId} product={product} />
            ))
          ) : (
            <NoDataFound
              className="col-span-full "
              message="No products found!"
            />
          )
        ) : (
          <div className="col-span-full min-h-[80vh]">
            <Loader />
          </div>
        )}
      </div>
      {meta && meta?.totalPages > 1 && (
        <PaginationComponent meta={meta} onPageChange={onPageChange} />
      )}
    </>
  );
};

export default ProductFiltering;
