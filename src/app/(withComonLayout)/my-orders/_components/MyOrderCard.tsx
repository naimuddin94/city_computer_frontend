import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IMyOrders } from "@/types";
import { PackageIcon } from "lucide-react";
import Image from "next/image";

type TOderCardProps = {
  order: IMyOrders;
  index: number;
};

const MyOrderCard = ({ order, index }: TOderCardProps) => {
  return (
    <>
      <Card key={order.orderId}>
        <CardHeader className="flex items-center justify-between relative">
          <div className="flex items-center gap-2">
            <PackageIcon className="h-5 w-5 text-muted-foreground" />
            <span className="font-medium">Order # {index + 1}</span>
          </div>
          <span className="text-sm text-muted-foreground">
            {new Date(order.createdAt).toLocaleDateString()}
          </span>
          <Badge
            variant={
              order.status === "received"
                ? "secondary"
                : order.status === "processing"
                ? "outline"
                : "default"
            }
            className="text-xs absolute left-6"
          >
            {order.status}
          </Badge>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead className="hidden sm:table-cell">Shop</TableHead>
                <TableHead className="hidden sm:table-cell">Quantity</TableHead>
                <TableHead className="hidden sm:table-cell">Price</TableHead>
                <TableHead className="hidden sm:table-cell">Discount</TableHead>
                <TableHead className="text-right">Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {order?.orderItems.map((item) => {
                const { orderItemId, price, product, quantity } = item;
                return (
                  <TableRow key={orderItemId}>
                    <TableCell>
                      <div className="font-medium flex items-center gap-2">
                        <div>
                          <Image
                            src={product.image}
                            alt={product.name}
                            width={40}
                            height={40}
                          />
                        </div>
                        <h3>{product.name}</h3>
                      </div>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      <h3>{product.shop.name}</h3>
                      <p className="text-xs text-slate-600">
                        {product.shop.address}
                      </p>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      <div>{quantity}</div>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      {product.price}
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      {(product.price * quantity - price).toFixed(2)}
                    </TableCell>
                    <TableCell className="text-right">
                      {price.toFixed(2)}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <div className="text-muted-foreground text-sm">
            Total: ${order.totalAmount.toFixed(2)}
          </div>
          <Button variant="outline" size="sm">
            View Order
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default MyOrderCard;
