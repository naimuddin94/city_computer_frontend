import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const SignupPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="p-[1px] rounded-2xl relative overflow-hidden">
        {/* Gradient Backgrounds */}
        <div className="w-[40rem] h-16 bg-gradient-to-b from-rose-600 absolute top-[40%] -left-[18%] animate-slow-spin -z-10" />
        <div className="w-[40rem] h-16 bg-gradient-to-b from-[#FF4500] absolute top-[40%] -left-[18%] animate-medium-spin -z-10" />
        <div className="w-[40rem] h-16 bg-gradient-to-b from-[#FF6A00] absolute top-[40%] -left-[18%] animate-fast-spin -z-10" />

        {/* Card with higher z-index */}
        <Card className="p-6 max-w-md shadow-none relative z-20">
          <CardTitle className="text-2xl font-semibold text-primary">
            Create an Account as
          </CardTitle>
          <CardDescription className="text-gray-600 mt-2">
            Select the type of account you want to register. Choose Customer to
            shop or Vendor to sell products.
          </CardDescription>
          <CardContent className="flex justify-center gap-5 mt-8">
            {/* Make sure the CardContent is clickable */}
            <Link href="/signup/vendor">
              <Button size="lg" variant="destructive">
                Vendor
              </Button>
            </Link>
            <Link href="/signup/customer">
              <Button size="lg">Customer</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignupPage;
