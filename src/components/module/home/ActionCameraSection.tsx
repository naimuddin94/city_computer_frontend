import go_proImage from "@/assets/images/go_pro_camera.png";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { BiSolidOffer } from "react-icons/bi";
import { BsCamera } from "react-icons/bs";
import { CgCamera } from "react-icons/cg";
import { IoWaterOutline } from "react-icons/io5";

const ActionCameraSection = () => {
  return (
    <div className="flex flex-col md:flex-row md:px-16 py-8 bg-gradient-to-b from-primary/5">
      <div className="flex-1">
        <Image
          src={go_proImage}
          alt="go pro 9 black"
          width={500}
          height={450}
        />
      </div>
      <div className="flex-1 flex flex-col justify-center items-center relative">
        <h1 className="absolute flex gap-1 text-theme-color-200 bg-gradient-to-l from-theme-color-100/25 to-theme-color-400/25 shadow-sm shadow-theme-secondary px-5 py-2 rounded-full items-center left-0 top-12 -rotate-45 ">
          <BiSolidOffer />
          20% OFF
        </h1>
        <h1 className="text-4xl flex items-center text-text/80 font-light">
          HERO <span className="text-8xl">9</span> BLACK
        </h1>
        <h1 className="text-5xl font-bold text-gradient py-2">
          More Everything
        </h1>
        <div className="flex gap-2 mt-2 text-theme-color-400">
          <h4 className="flex items-center gap-1">
            <BsCamera />
            20MP
          </h4>
          |
          <h4 className="flex items-center gap-1">
            <CgCamera />
            4K60/5K30
          </h4>
          |
          <h4 className="flex items-center gap-1">
            <IoWaterOutline />
            33fit(10m)
          </h4>
        </div>
        <h4>1080P Live Streaming</h4>
        <div className="mt-4">
          <Button variant="destructive">Add to cart</Button>
        </div>
      </div>
    </div>
  );
};

export default ActionCameraSection;
