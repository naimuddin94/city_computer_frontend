import gopro from "@/assets/images/GoPro-SG-Banner.png";
import Image from "next/image";

const Advertizement = () => {
  return (
    <div className="flex justify-center">
      <Image src={gopro} width={1400} height={1000} alt="gopro camera" />
    </div>
  );
};

export default Advertizement;
