"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { handleLogout } from "@/helper/auth";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import Container from "../shared/Container";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import CartButton from "./CartButton";
import Logo from "./Logo";
import NavMenus from "./NavMenus";

//! This is fake data remove after connect API
const user = {
  role: "admin",
  image: "",
  name: "user",
};

interface IProps {
  screenY: number;
}

const MobileNavSection = ({ screenY }: IProps) => {
  return (
    <Container className="py-2 lg:py-0 flex justify-between">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>
              <Logo />
            </SheetTitle>
            <NavMenus />
            <div className="flex items-center gap-5">
              {user ? (
                <>
                  <Button onClick={handleLogout} variant="outline">
                    Signout
                  </Button>
                </>
              ) : (
                <>
                  <Link href="/signin">
                    <Button variant="outline">Signin</Button>
                  </Link>
                </>
              )}
            </div>
          </SheetHeader>
        </SheetContent>
        <div className="lg:hidden flex items-center gap-5">
          {user ? (
            <>
              <CartButton screenY={screenY} />
              <Avatar>
                <AvatarImage src={user?.image} alt="user" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </>
          ) : (
            <>
              <Button variant="ghost">Login</Button>
            </>
          )}
        </div>
      </Sheet>
    </Container>
  );
};

export default MobileNavSection;
