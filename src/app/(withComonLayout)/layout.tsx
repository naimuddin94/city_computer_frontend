import Navbar from "@/components/Navbar/Navbar";
import { IChildrenProps } from "@/types";

export default function CommonLayout({ children }: IChildrenProps) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
