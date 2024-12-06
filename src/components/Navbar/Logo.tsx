import logo from "@/assets/images/logo.png";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center">
      <Image src={logo} alt="Logo image" width={48} height={48} />
      <h3 className="text-lg font-bold">City Computers</h3>
    </div>
  );
};

export default Logo;
