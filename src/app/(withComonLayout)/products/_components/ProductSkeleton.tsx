import { Skeleton } from "@/components/ui/skeleton";

const ProductSkeleton = () => {
  return (
    <Skeleton className="p-4 bg-gray-100 rounded-lg  border border-slate-200">
      <Skeleton className="bg-gray-200/70 mb-2 rounded-t-lg w-full h-[200px] relative">
        <Skeleton className="absolute bg-gray-300/30 bottom-3 right-5 rounded-lg h-5 w-24 border-slate-600" />
      </Skeleton>
      <Skeleton className="bg-gray-200/40 p-3 mb-1 h-24 flex flex-col gap-2">
        <Skeleton className="bg-gray-300/40 w-[40%] h-7"></Skeleton>
        <Skeleton className="bg-gray-300/40 w-11/12 h-5"></Skeleton>
        <Skeleton className="bg-gray-300/40 w-[70%] h-5"></Skeleton>
      </Skeleton>
      <Skeleton className="flex justify-between items-center bg-gray-200/40 p-2">
        <div className="flex gap-1 ml-4">
          <Skeleton className="w-3 h-6 rounded bg-gray-300/30" />
          <Skeleton className="w-3 h-6 rounded bg-gray-300/30" />
          <Skeleton className="w-3 h-6 rounded bg-gray-300/30" />
        </div>
        <Skeleton className="w-24 h-8 rounded-md bg-gray-300/40 flex justify-center items-center text-slate-300 text-sm border border-slate-300">
          Add to Cart
        </Skeleton>
      </Skeleton>
    </Skeleton>
  );
};

export default ProductSkeleton;
