import React from "react";

// Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
// import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../assets/css/swiper.css";
import Logo from "../assets/img/product/product-1.jpg";

const Bessellers = () => {
  return (
    <div className="container mx-auto">
      <h1 className="mt-5 mb-3 text-center text-2xl lg:text-[40px] lg:leading-tight lg:max-w-[888px] mx-auto font-semibold">
        Bessellers
      </h1>
      <h2 className="mb-5 text-center text-xl lg:text-[20px] lg:leading-tight mx-auto">
        Top products of a month
      </h2>
      <div className="my-5">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          className="min-h-[1300px]"
        >
          <SwiperSlide>
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img class="rounded-t-lg" src={Logo} alt="" />
              </a>
              <div class="p-5">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <a
                  href="#"
                  class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    aria-hidden="true"
                    class="ml-2 -mr-1 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Bessellers;
