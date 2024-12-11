import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/shared/Footer";
import { IChildrenProps } from "@/types";

export default function CommonLayout({ children }: IChildrenProps) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
