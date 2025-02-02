import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Keyboard, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
// import "swiper/css/navigation";
import "../App.css";

import { FaMusic, FaSnapchatGhost } from "react-icons/fa";
import { BsInstagram, BsTwitter } from "react-icons/bs";

// Type for image items
// interface ImageItem {
//   src: string;
//   alt: string;
// }

const images = [
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

const smallImages = images.map((img) => ({
  ...img,
  src: img.src.replace("600x400", "300x400"),
}));

const Photography: React.FC = () => {
  return (
    <div className="mx-auto w-full pt-[100px] min-h-screen pb-4 flex flex-col items-center justify-center bg-[#222121] z-10 overflow-hidden">
      <div className="w-[90%]  flex flex-col justify-center gap-12 mx-auto">
        <h2 className="text-white text-3xl font-semibold uppercase mb-4">
          Photography
        </h2>

        <div className="flex gap-10 justify-between">
          {/* Large Images Carousel */}
          <div className="w-[70%] h-[500px] overflow-hidden hidden lg:block">
            <Swiper
              direction="horizontal"
              slidesPerView={1}
              spaceBetween={10}
              loop={true}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              modules={[Navigation, Mousewheel, Keyboard, Autoplay]}
              mousewheel={{ releaseOnEdges: true, forceToAxis: true }}
              keyboard={true}
              navigation={true}
              className="photos-swiper h-full"
            >
              {images.map((item, index) => (
                <SwiperSlide key={index} className="h-full">
                  <img
                    className="h-full w-full object-cover"
                    src={item.src}
                    alt={item.alt}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Small Images Carousel */}
          <div className="w-full lg:w-[30%] h-[500px] overflow-hidden">
            <Swiper
              direction="horizontal"
              slidesPerView={1}
              spaceBetween={10}
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              modules={[Navigation, Mousewheel, Keyboard, Autoplay]}
              mousewheel={{ releaseOnEdges: true, forceToAxis: true }}
              keyboard={true}
              navigation={true}
              className="photos-swiper h-full"
            >
              {smallImages.map((item, index) => (
                <SwiperSlide key={index} className="h-full">
                  <img
                    className="h-full w-full object-cover"
                    src={item.src}
                    alt={item.alt}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="flex flex-col justify-center mt-6 md:mt-8 gap-4 md:gap-6 text-white items-center">
          <div className="mt-8 md:mt-10 text-gray-700 font-bold text-lg cursor-pointer p-2 bg-white rounded-2xl hover:text-[#000] transition">
            Let's Talk Photography
          </div>
          <div className="flex gap-4">
            <div className="hover:text-[#b27d4a] transition-all">
              <BsTwitter size={30} />
            </div>
            <div className="hover:text-[#b27d4a] transition-all">
              <BsInstagram size={30} />
            </div>
            <div className="hover:text-[#b27d4a] transition-all">
              <FaSnapchatGhost size={30} />
            </div>
            <div className="hover:text-[#b27d4a] transition-all">
              <FaMusic size={30} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photography;
