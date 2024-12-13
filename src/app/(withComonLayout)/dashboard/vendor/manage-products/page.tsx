import NoDataFound from "@/components/shared/NoDataFound";
import { getCurrentUser } from "@/services/AuthService";
import { fetchShopOrders } from "@/services/OrderSrvice";
import { redirect } from "next/navigation";
import OrderCard from "./_components/OrderCard";

async function ManageOrders() {
  const user = await getCurrentUser();

  if (!user) {
    return redirect("/signin?redirect=/dashboard/vendor/manage-products");
  }

  const { data } = await fetchShopOrders();

  return (
    <div className="bg-muted/40 min-h-screen py-8 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-xl font-bold mb-6 text-primary text-center">
          Order Management
        </h1>
        <div className="grid gap-6">
          {data?.length ? (
            data?.map((order, idx) => (
              <OrderCard key={order.orderId} order={order} index={idx} />
            ))
          ) : (
            <NoDataFound className="col-span-full" message="No orders found" />
          )}
        </div>
      </div>
    </div>
  );
}

export default ManageOrders;
