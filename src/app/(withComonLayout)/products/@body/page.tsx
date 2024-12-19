import Container from "@/components/shared/Container";
import { getProducts } from "@/services/ProductService";
import ProductCard from "../_components/ProductCard";
import ProductPaginate from "./_components/ProductPaginate";

type Params = Promise<{ slug: string }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

async function BodyComponent(props: {
  params: Params;
  searchParams: SearchParams;
}) {
  const param = await props.searchParams;

  const sort = param.sort as string;
  const limit = (param.limit as string) || "8";
  const page = (param.page as string) || "1";
  const searchTerm = param.searchTerm as string;

  const data = await getProducts({ sort, limit, page, searchTerm });

  if (!data.success) {
    return (
      <div className="min-h-[calc(100vh-64px)] flex justify-center items-center">
        <p className="text-lg text-slate-500">
          Something happened error while fetching products!
        </p>
      </div>
    );
  }

  const products = data?.data;

  const meta = data?.meta;

  return (
    <Container>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-5">
        {products &&
          products?.length > 0 &&
          products?.map((product) => (
            <ProductCard key={product.productId} product={product} />
          ))}
      </div>
      {meta && meta?.totalPages > 1 && <ProductPaginate meta={meta} />}
    </Container>
  );
}

export default BodyComponent;
