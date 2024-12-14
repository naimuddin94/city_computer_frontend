"use client";

import logo from "@/assets/images/logo.png";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Container from "./Container";
import NavMenus from "./NavMenus";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const user = {
    role: "admin",
    image: "",
    name: "user",
  };
  const cart = {
    products: [],
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = async () => {
    try {
      toast("logged out");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <header
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-glass-white backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <Container className="py-2 lg:py-0 flex justify-between">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="lg:hidden">
            <nav className="flex flex-col justify-between">
              <div className="flex items-center">
                <Image src={logo} alt="Logo image" width={48} height={48} />
                <h3 className="text-lg font-bold">KS</h3>
              </div>
              <div>
                <NavMenus />
              </div>
              <div className="flex items-center gap-5">
                {user ? (
                  <>
                    <Button onClick={handleLogout} variant="outline">
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Link href="/login">
                      <Button variant="outline">Login</Button>
                    </Link>
                  </>
                )}
              </div>
            </nav>
          </SheetContent>
          <div className="lg:hidden flex items-center gap-5">
            {user ? (
              <>
                <Link href="/dashboard/carts">
                  <div className="relative">
                    <Button variant="ghost">
                      <ShoppingCart size={20} />
                    </Button>
                    <span
                      className={`absolute ${
                        cart?.products?.length > 9 ? "right-0" : "right-2"
                      }`}
                    >
                      {cart?.products?.length}
                    </span>
                  </div>
                </Link>
                <Avatar>
                  <AvatarImage src={user?.image} alt="user" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              </>
            ) : (
              <></>
            )}
          </div>
        </Sheet>
      </Container>
      <Container>
        <nav className="hidden lg:flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src={logo}
              alt="Logo image"
              className="w-12"
              width={48}
              height={48}
            />
            <h3 className="text-lg font-bold">KS</h3>
          </div>
          <div>
            <NavMenus />
          </div>
          <div className="flex items-center gap-5">
            {user ? (
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
                <Button onClick={handleLogout} variant="outline">
                  Logout
                </Button>
                <Avatar>
                  <AvatarImage src={user?.image} alt="user" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              </>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="outline">Login</Button>
                </Link>
              </>
            )}
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Navbar;
