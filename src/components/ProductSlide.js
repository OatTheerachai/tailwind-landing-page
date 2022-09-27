import React from "react";
// Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../assets/css/swiper.css";
import { products } from "../data";
import "../App.css";

const ProductSlide = () => {
  return (
    <Swiper
      breakpoints={{
        426: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
      pagination={{
        clickable: true,
      }}
      autoplay={{ delay: 3000 }}
      navigation={true}
      modules={[Pagination]}
      className="mySwiper min-h-[480px]"
    >
      {products.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-xl">
              <a href="#" className="">
                <img
                  className="rounded-t-lg"
                  src={item.image}
                  alt={item.name}
                />
              </a>
              <div className="p-5 flex items-center flex-col">
                <a href="#">
                  <h5 className="text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                    {item.name}
                  </h5>
                </a>
                <p className="my-3 font-medium text-xl font-bold text-rose-500">
                  ${item.price}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-lg py-2 px-3 text-sm font-medium text-center text-white bg-accent rounded-lg hover:bg-main focus:ring-4 focus:outline-none"
                >
                  Add to cart
                </a>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ProductSlide;
