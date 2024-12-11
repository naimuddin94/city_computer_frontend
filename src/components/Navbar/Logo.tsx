"use client";

import logo from "@/assets/images/logo.png";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface IProps {
  textColor?: string;
}

const Logo = ({ textColor }: IProps) => {
  return (
    <div className={cn("flex items-center", textColor)}>
      <Image src={logo} alt="Logo image" width={48} height={48} />
      <h3 className="text-lg font-bold">City Computers</h3>
    </div>
  );
};

export default Logo;
