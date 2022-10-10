import React from "react";
import { products } from "../data";

const Trends = () => {
  return (
    <div className="container mx-auto my-3">
      <h1 className="mt-5 mb-3 text-center text-2xl lg:text-[40px] lg:leading-tight lg:max-w-[888px] mx-auto font-semibold">
        Thrends Of A Month
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-10 my-10">
        {products.map((item, index) => {
          return (
            <div
              key={index}
              className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-xl"
            >
              <img className="rounded-t-lg" src={item.image} alt={item.name} />
              <div className="p-5 flex items-center flex-col">
                <h5 className="cursor-pointer text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                  {item.name}
                </h5>
                <p className="my-3 text-xl font-bold text-rose-500">
                  ${item.price}
                </p>
                <span
                  href="#"
                  className="cursor-pointer inline-flex items-center text-lg py-2 px-3 text-sm font-medium text-center text-white bg-accent rounded-lg hover:bg-main focus:ring-4 focus:outline-none"
                >
                  Add to cart
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex items-center justify-center">
        <button className="text-white px-[20px] lg:px-[80px] py-[9px] lg:py-[16px] mb-[50px] text-xl rounded-md bg-accent hover:bg-main backdrop-blur-md transition">
          Show more
        </button>
      </div>
    </div>
  );
};

export default Trends;
