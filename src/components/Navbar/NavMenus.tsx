"use client";

import { useUser } from "@/context/user.context";
import { cn } from "@/lib/utils";
import {
  adminNavItems,
  navItem,
  unauthenticatedNavItems,
  userNavItems,
  vendorNavItems,
} from "@/utils/navItems";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { ListItem } from "./ListItem";

interface IProps {
  textColor?: string;
}

const NavMenus = ({ textColor }: IProps) => {
  const pathname = usePathname();
  const { user } = useUser();
  const [menus, setMenus] = useState<navItem[]>(unauthenticatedNavItems);

  useEffect(() => {
    if (user?.role === "admin") {
      setMenus(adminNavItems);
    } else if (user?.role === "vendor") {
      setMenus(vendorNavItems);
    } else if (user?.role === "user") {
      setMenus(userNavItems);
    } else {
      setMenus(unauthenticatedNavItems);
    }
  }, [user]);
  return (
    <ul className={cn("items-center gap-5 py-3", textColor)}>
      <NavigationMenu>
        <NavigationMenuItem className="flex flex-col lg:flex-row">
          {menus?.map((menu) => {
            if (menu.href) {
              return (
                <NavigationMenuLink asChild key={menu.href}>
                  <Link
                    href={menu.href}
                    className={`${navigationMenuTriggerStyle()} ${
                      pathname === menu.href
                        ? "border border-theme/40 bg-transparent"
                        : "bg-transparent"
                    }`}
                  >
                    <div className="text-sm font-medium leading-none">
                      {menu.label}
                    </div>
                  </Link>
                </NavigationMenuLink>
              );
            } else if (menu.children) {
              return (
                <React.Fragment key={menu.label}>
                  <NavigationMenuTrigger
                    className={
                      pathname.includes("dashboard")
                        ? "border border-theme/40 bg-transparent"
                        : "bg-transparent"
                    }
                  >
                    Dashboard
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {menu.children?.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </React.Fragment>
              );
            }
          })}
        </NavigationMenuItem>
      </NavigationMenu>
    </ul>
  );
};

export default NavMenus;
