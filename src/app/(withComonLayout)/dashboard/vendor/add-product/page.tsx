import { api_url } from "@/constant";
import { getCurrentUser } from "@/services/AuthService";
import { redirect } from "next/navigation";
import ProductForm from "./_components/ProductForm";

async function AddProduct() {
  const user = await getCurrentUser();

  if (!user) {
    return redirect("/signin?redirect=dashboard/vendor/add-product");
  }

  const res = await fetch(`${api_url}/categories`, {
    cache: "force-cache",
  });

  const { data } = await res.json();

  return (
    <section className="grid gap-6 px-4 py-8 mx-auto max-w-4xl sm:px-6 lg:px-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight text-primary">
          Add New Product
        </h1>
      </div>
      <ProductForm categories={data} />
    </section>
  );
}

export default AddProduct;
