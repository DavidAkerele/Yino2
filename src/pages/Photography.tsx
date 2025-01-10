import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Keyboard, Navigation } from "swiper/modules";
import "swiper/css";
import '../App.css'

// Type for image items
interface ImageItem {
  src: string;
  alt: string;
}

const largeImages: ImageItem[] = [
  {
    src: "https://via.placeholder.com/600x400/FF0000/FFFFFF?text=Image+1",
    alt: "Image 1",
  },
  {
    src: "https://via.placeholder.com/600x400/00FF00/FFFFFF?text=Image+2",
    alt: "Image 2",
  },
  {
    src: "https://via.placeholder.com/600x400/0000FF/FFFFFF?text=Image+3",
    alt: "Image 3",
  },
  {
    src: "https://via.placeholder.com/600x400/00bf63/FFFFFF?text=Image+4",
    alt: "Image 4",
  },
  {
    src: "https://via.placeholder.com/600x400/bfcbd8/FFFFFF?text=Image+5",
    alt: "Image 5",
  },
  {
    src: "https://via.placeholder.com/600x400/ffffff/FFFFFF?text=Image+6",
    alt: "Image 6",
  },
];

const smallImages: ImageItem[] = [
  {
    src: "https://via.placeholder.com/300x400/FF0000/FFFFFF?text=Image+1",
    alt: "Image 1",
  },
  {
    src: "https://via.placeholder.com/300x400/00FF00/FFFFFF?text=Image+2",
    alt: "Image 2",
  },
  {
    src: "https://via.placeholder.com/300x400/0000FF/FFFFFF?text=Image+3",
    alt: "Image 3",
  },
  {
    src: "https://via.placeholder.com/300x400/00bf63/FFFFFF?text=Image+4",
    alt: "Image 4",
  },
  {
    src: "https://via.placeholder.com/300x400/bfcbd8/FFFFFF?text=Image+5",
    alt: "Image 5",
  },
  {
    src: "https://via.placeholder.com/300x400/0000FF/FFFFFF?text=Image+6",
    alt: "Image 6",
  },
];

const Photography: React.FC = () => {
  return (
    <div className="mx-auto w-full items-center flex flex-col justify-center bg-[#222121] z-10">
      <div className="w-[90%] h-screen flex flex-col justify-center gap-12 mx-auto">
        <h2 className="text-3xl text-white font-semibold mb-4">PHOTOGRAPHY</h2>

        {/* Flex container for the two carousels */}
        <div className="flex gap-10 justify-between">
          {/* Carousel 1 (Large Images) */}
          <div className="w-[70%] h-[500px] overflow-hidden hidden lg:block">
            <Swiper
              direction="horizontal"
              slidesPerView={1}
              spaceBetween={10}
              loop={true}
              modules={[Navigation, Mousewheel, Keyboard]}
              mousewheel={{
                releaseOnEdges: true,
                forceToAxis: true,
                thresholdDelta: 10,
                thresholdTime: 500,
              }}
              keyboard={true}
              navigation={true}
              className="photos-swiper h-full"
            >
              {largeImages.map((item, index) => (
                <SwiperSlide key={index} className="h-full">
                  <img
                    className="photo h-full w-full object-cover"
                    src={item.src}
                    alt={item.alt}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Carousel 2 (Small Images) */}
          <div className="w-full lg:w-[30%] h-[500px] overflow-hidden">
            <Swiper
              direction="horizontal"
              slidesPerView={1}
              spaceBetween={10}
              modules={[Navigation, Mousewheel, Keyboard]}
              mousewheel={{
                releaseOnEdges: true,
                forceToAxis: true,
                thresholdDelta: 10,
                thresholdTime: 500,
              }}
              keyboard={true}
              navigation={true}
              className="photos-swiper h-full"
            >
              {smallImages.map((item, index) => (
                <SwiperSlide key={index} className="h-full">
                  <img
                    className="photo h-full w-full object-cover"
                    src={item.src}
                    alt={item.alt}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <div className="w-[90%] h-screen flex flex-col justify-center gap-12 mx-auto">
        <h2 className="text-3xl text-white font-semibold mb-4">ARCHITECTURE</h2>

        {/* Flex container for the two carousels */}
        <div className="flex gap-10 justify-between">
          {/* Carousel 1 (Large Images) */}
          <div className="w-[70%] h-[500px] overflow-hidden hidden lg:block">
            <Swiper
              direction="horizontal"
              slidesPerView={1}
              spaceBetween={10}
              loop={true}
              modules={[Navigation, Mousewheel, Keyboard]}
              mousewheel={{
                releaseOnEdges: true,
                forceToAxis: true,
                thresholdDelta: 10,
                thresholdTime: 500,
              }}
              keyboard={true}
              navigation={true}
              className="photos-swiper h-full"
            >
              {largeImages.map((item, index) => (
                <SwiperSlide key={index} className="h-full">
                  <img
                    className="photo h-full w-full object-cover"
                    src={item.src}
                    alt={item.alt}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Carousel 2 (Small Images) */}
          <div className="w-full lg:w-[30%] h-[500px] overflow-hidden">
            <Swiper
              direction="horizontal"
              slidesPerView={1}
              spaceBetween={10}
              modules={[Navigation, Mousewheel, Keyboard]}
              mousewheel={{
                releaseOnEdges: true,
                forceToAxis: true,
                thresholdDelta: 10,
                thresholdTime: 500,
              }}
              keyboard={true}
              navigation={true}
              className="photos-swiper h-full"
            >
              {smallImages.map((item, index) => (
                <SwiperSlide key={index} className="h-full">
                  <img
                    className="photo h-full w-full object-cover"
                    src={item.src}
                    alt={item.alt}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photography;
