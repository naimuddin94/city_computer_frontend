"use client";

import { Button } from "@/components/ui/button";
import { useUser } from "@/context/user.provider";
import { signout } from "@/services/AuthService";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import Container from "../shared/Container";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Logo from "./Logo";
import NavMenus from "./NavMenus";

//! This is fake data remove after connect API
const cart = {
  products: [],
};

const DesktopNavSection = () => {
  const { user, isLoading, setIsLoading } = useUser();

  const handleSignout = async () => {
    try {
      const res = await signout();
      setIsLoading(true);
      if (res?.success) {
        toast.success(res.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <nav className="hidden lg:flex justify-between items-center">
        <Logo />
        <div>
          <NavMenus />
        </div>
        <div className="flex items-center gap-5">
          {user && !isLoading ? (
            <>
              <Link href="/dashboard/carts">
                <div className="relative">
                  <Button variant="ghost">
                    <ShoppingCart size={20} />
                  </Button>
                  <span
                    className={`absolute ${
                      cart.products.length > 9 ? "right-0" : "right-2"
                    }`}
                  >
                    {cart.products.length}
                  </span>
                </div>
              </Link>
              <Button onClick={handleSignout} variant="outline">
                Logout
              </Button>
              <Avatar>
                <AvatarImage src={user?.image} alt="user" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </>
          ) : (
            <>
              <Link href="/signin">
                <Button>Signin</Button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </Container>
  );
};

export default DesktopNavSection;
