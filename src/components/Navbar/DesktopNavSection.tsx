"use client";

import { Button } from "@/components/ui/button";
import { useUser } from "@/context/user.provider";
import { signout } from "@/services/AuthService";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { toast } from "sonner";
import Container from "../shared/Container";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import CartButton from "./CartButton";
import Logo from "./Logo";
import NavMenus from "./NavMenus";

//! This is fake data remove after connect API
const cart = {
  products: [],
};

interface IProps {
  screenY: number;
}

const DesktopNavSection = ({ screenY }: IProps) => {
  const pathname = usePathname();
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
        <Logo
          textColor={pathname === "/" && screenY < 500 ? "text-white" : ""}
        />
        <div>
          <NavMenus
            textColor={pathname === "/" && screenY < 500 ? "text-white" : ""}
          />
        </div>
        <div className="flex items-center gap-5">
          {user && !isLoading ? (
            <>
              <CartButton screenY={screenY} />
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
