import { getCurrentUser } from "@/services/AuthService";
import { redirect } from "next/navigation";
import ShopForm from "./_components/ShopForm";

async function AddProduct() {
  const user = await getCurrentUser();

  if (!user) {
    return redirect("/signin?redirect=dashboard/vendor/create-shop");
  }

  return (
    <section className="grid gap-6 px-4 py-8 mx-auto max-w-4xl sm:px-6 lg:px-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight text-primary">
          Add Shop Information
        </h1>
      </div>
      <ShopForm />
    </section>
  );
}

export default AddProduct;
