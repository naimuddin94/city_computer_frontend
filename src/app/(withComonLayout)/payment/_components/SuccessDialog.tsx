"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface OrderSuccessDialogProps {
  open: boolean;
  onClose: () => void;
  orderDetails: {
    orderId: string;
    paymentId: string;
    totalAmount: number;
    createdAt: string;
  } | null;
}

const SuccessDialog = ({
  open,
  onClose,
  orderDetails,
}: OrderSuccessDialogProps) => {
  if (!orderDetails) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Order Successful</DialogTitle>
          <DialogDescription>
            Thank you for your order! Here are your order details:
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <p>
            <strong>Order ID:</strong> {orderDetails.orderId}
          </p>
          <p>
            <strong>Transaction ID:</strong> {orderDetails.paymentId}
          </p>
          <p>
            <strong>Total Amount:</strong> ${orderDetails.totalAmount}
          </p>
          <p>
            <strong>Order Date:</strong>{" "}
            {new Date(orderDetails.createdAt).toLocaleString()}
          </p>
        </div>
        <DialogFooter>
          <Button onClick={onClose}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SuccessDialog;
