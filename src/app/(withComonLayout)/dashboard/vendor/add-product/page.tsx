import { apiFetch } from "@/lib/fetch";
import { getCurrentUser } from "@/services/AuthService";
import { getProductById } from "@/services/ProductService";
import { redirect } from "next/navigation";
import ProductForm from "./_components/ProductForm";

type Params = Promise<{ slug: string }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

async function AddProduct(props: {
  params: Params;
  searchParams: SearchParams;
}) {
  const searchParams = await props.searchParams;
  const productId = searchParams.product;

  const user = await getCurrentUser();

  if (!user) {
    return redirect("/signin?redirect=dashboard/vendor/add-product");
  }

  const data = await apiFetch("/categories", {
    cache: "force-cache",
    next: {
      tags: ["categories"],
    },
  });

  const shop = await apiFetch("/shops/get-shop-info", {
    cache: "no-store",
  });

  if (!shop.data) {
    return redirect("/dashboard/vendor/create-shop");
  }

  let product = null;

  if (productId) {
    const productResponse = await getProductById(productId as string);
    if (productResponse?.success) {
      product = productResponse.data;
    }
  }

  return (
    <section className="grid gap-6 px-4 py-8 mx-auto max-w-4xl sm:px-6 lg:px-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight text-primary">
          Add New Product
        </h1>
      </div>
      <ProductForm categories={data?.data} product={product} />
    </section>
  );
}

export default AddProduct;
