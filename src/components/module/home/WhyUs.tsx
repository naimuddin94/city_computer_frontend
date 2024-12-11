import image4 from "@/assets/images/ptz_camera.webp";
import HeadingWithSubheading from "@/components/utility/HeadingWithSubheading";
import Paragraph from "@/components/utility/Paragraph";
import Image from "next/image";

const WhyUs = () => {
  return (
    <div className="relative pt-20 lg:pt-10 py-10 bg-gradient-to-tl from-[#f85e9e13]">
      <div className="w-72 md:w-96 h-72 md:h-[22rem] bg-gradient-to-r from-yellow-400 to-primary -z-50 absolute rounded-r-full"></div>
      <div className="flex flex-col lg:flex-row items-center">
        <div className="flex-1 flex justify-center relative min-h-[300px] sm:min-h-[320px] md:min-h-[380px]">
          <Image src={image4} alt="drone image" width={400} height={350} />
        </div>
        <div className="flex-1 ml-auto px-5 lg:pr-10 w-fit">
          <HeadingWithSubheading
            heading="We helping you find your best products"
            subHeading="SECURITY ZONE"
          />
          <Paragraph>
            Ensuring your safety and peace of mind Our top priority is
            safeguarding your spaces.At the heart of our mission lies an
            unwavering commitment to your security and tranquility.
          </Paragraph>
          <div className="grid grid-cols-2 gap-4 w-fit ml-auto lg:ml-0  text-theme-color-300">
            <div className="p-3 rounded-md w-36 bg-white shadow text-center">
              <h6 className="text-theme-color-200 font-semibold text-lg">
                500+
              </h6>
              <p className="text-xs">Areas Monitored</p>
            </div>
            <div className="py-3 px-6 rounded-md w-36 bg-white shadow text-center">
              <h6 className="text-theme-color-200 font-semibold text-lg">
                200+
              </h6>
              <p className="text-xs">CCTV Installed</p>
            </div>
            <div className="p-3 rounded-md bg-white w-36 shadow text-center">
              <h6 className="text-theme-color-200 font-semibold text-lg">
                24/7
              </h6>
              <p className="text-xs">Support</p>
            </div>
            <div className="p-3 rounded-md bg-white w-36 shadow text-center">
              <h6 className="text-theme-color-200 font-semibold text-lg">
                2k+
              </h6>
              <p className="text-xs">Happy Customer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
