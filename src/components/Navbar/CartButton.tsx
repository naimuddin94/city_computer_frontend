import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

//! This is fake data remove after connect API
const cart = {
  products: [],
};

interface IProps {
  screenY: number;
}

const CartButton = ({ screenY }: IProps) => {
  const pathname = usePathname();
  return (
    <Link href="/dashboard/carts">
      <div
        className={`relative ${
          screenY < 500 && pathname === "/" && "text-white hover:text-slate-800"
        } `}
      >
        <Button variant="ghost">
          <ShoppingCart size={20} />
        </Button>
        <span
          className={`absolute cursor-auto ${
            cart.products.length > 9 ? "right-0" : "right-2"
          }`}
        >
          {cart.products.length}
        </span>
      </div>
    </Link>
  );
};

export default CartButton;
