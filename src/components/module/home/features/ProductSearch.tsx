"use client";

import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import useDebounce from "@/hooks/debounce.hook";
import { getProductsFromMeli } from "@/services/ProductService";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

interface IProduct {
  id: string;
  name: string;
  shop: string;
  category: string;
  thumbnail: string;
}

const ProductSearch = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const { register, watch } = useForm();

  const searchTerm = useDebounce(watch("search"), 100) || "";

  const fetchProducts = async () => {
    const data = await getProductsFromMeli(searchTerm);
    setProducts(data);
  };

  useEffect(() => {
    if (searchTerm && searchTerm?.trim()?.length > 0) {
      fetchProducts();
    }
  }, [searchTerm]);

  return (
    <div className="flex flex-col justify-center pb-8 pt-2 max-w-fit mx-auto relative">
      <form>
        <Input
          {...register("search")}
          type="search"
          placeholder="Search products..."
          className="max-w-sm w-[23rem]"
        />
      </form>

      <div
        className={`absolute top-12 bg-white ${
          (!searchTerm || searchTerm?.trim()?.length <= 0) && "hidden"
        }`}
      >
        {products?.length > 0 && (
          <ScrollArea className="h-72 max-w-sm w-[23rem] rounded-md border">
            <div className="p-4">
              {products &&
                products.map((product) => (
                  <Link href={`/products/${product.id}`} key={product.id}>
                    <div className="flex gap-4 hover:bg-slate-100 px-4 py-2">
                      <Image
                        src={product.thumbnail}
                        alt="product image"
                        width={50}
                        height={50}
                        className="rounded"
                      />
                      <div>
                        <h3>{product.name}</h3>
                        <h5>{product.shop}</h5>
                      </div>
                    </div>
                    <Separator className="my-2" />
                  </Link>
                ))}
            </div>
          </ScrollArea>
        )}
      </div>
    </div>
  );
};

export default ProductSearch;
