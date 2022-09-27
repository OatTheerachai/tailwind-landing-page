import React from "react";
// data
import { brands } from "../data";

const Brand = () => {
  return (
    <div className="container mx-auto px-20 py-5">
      <div className="md:px-20">
        <div className="flex flex-wrap gap-y-8">
          {brands.map((item, index) => {
            return (
              <div
                key={index}
                className="min-h-[65px] w-3/6 lg:flex-1 flex flex-col justify-center"
              >
                <img
                  src={item.img}
                  alt={item.text}
                  className="object-scale-down h-14"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Brand;
