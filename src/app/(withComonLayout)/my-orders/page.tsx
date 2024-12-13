import NoDataFound from "@/components/shared/NoDataFound";
import { getMyOrders } from "@/services/OrderService";
import MyOrderCard from "./_components/MyOrderCard";

async function MyOrders() {
  const { data } = await getMyOrders();
  return (
    <div className="bg-muted/40 min-h-screen py-8 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-xl font-bold mb-6 text-primary text-center">
          Your Orders
        </h1>
        <div className="grid gap-6">
          {data?.length ? (
            data?.map((order, idx) => (
              <MyOrderCard key={order.orderId} order={order} index={idx} />
            ))
          ) : (
            <NoDataFound className="col-span-full" message="No orders found" />
          )}
        </div>
      </div>
    </div>
  );
}

export default MyOrders;
