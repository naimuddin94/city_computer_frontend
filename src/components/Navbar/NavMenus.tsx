"use client";

import { adminNavItems, navItem, userNavItems } from "@/utils/navItems";
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

const user = {
  role: "admin",
};

const NavMenus = () => {
  const pathname = usePathname();
  const [menus, setMenus] = useState<navItem[]>(userNavItems);
  useEffect(() => {
    if (user?.role === "admin") {
      setMenus(adminNavItems);
    } else {
      setMenus(userNavItems);
    }
  }, []);
  return (
    <ul className="items-center gap-5 py-3">
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
