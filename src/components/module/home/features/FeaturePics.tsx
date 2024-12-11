import image1 from "@/assets/images/laptop.png";
import Image from "next/image";

const FeaturePics = () => {
  return (
    <div className="flex-1">
      <div className="">
        <Image src={image1} alt="feature image" width={550} height={450} />
      </div>
    </div>
  );
};

export default FeaturePics;
