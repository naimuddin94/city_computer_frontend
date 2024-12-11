"use client";
import Image from "next/image";
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import Container from "@/components/shared/Container";
import bannerData from "@/lib/bannerData";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Banner = () => {
  return (
    <div className="bg-custom-background bg-cover bg-center min-h-[calc(100vh)] relative overflow-hidden bg-blend-overlay bg-primary/5">
      <div className="w-[30rem] h-[30rem] rounded-full absolute bg-gradient-to-tr from-theme-color-300/50 -top-52 -left-36 blur-3xl"></div>
      <div>
        <Container>
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            speed={1000}
            autoplay={{
              delay: 3000,
            }}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {bannerData?.map((data) => (
              <SwiperSlide key={data.heading}>
                <div className="flex gap-5 flex-col md:flex-row-reverse items-center justify-between text-white px-5 h-full bg-gradient-to-br from-theme-color-200/10 to-theme-color-400/20">
                  <div className="flex-1 flex justify-center items-center">
                    <Image
                      src={data.image}
                      alt={data.heading}
                      width={500}
                      height={400}
                    />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-black">
                      {data.heading}
                    </h2>
                    <p className="mt-5 text-cream">{data.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
