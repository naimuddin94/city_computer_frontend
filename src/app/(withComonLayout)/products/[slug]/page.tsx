import { apiFetch } from "@/lib/fetch";

type Params = Promise<{ slug: string }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

interface IProps {
  params: Params;
  searchParams: SearchParams;
}

const ProductDetailPage = async (props: IProps) => {
  const params = await props.params;

  const product = await apiFetch(`/products/${params.slug}`);

  console.log(product);

  return (
    <div>
      <h1>This is page component</h1>
    </div>
  );
};

export default ProductDetailPage;
