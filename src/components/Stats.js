import React from "react";

import { stats } from "../data";

const Stats = () => {
  return (
    <div className="bg-white rounded-[20px] p-12 shadow-xl">
      <div className="flex flex-wrap gap-y-8">
        {stats.map((item, index) => {
          return (
            <div
              key={index}
              className="min-h-[65px] w-3/6 lg:flex-1 odd:border-r lg:odd:border-r lg:even:border-r lg:even:last:border-none flex flex-col justify-center"
            >
              <div className="text-black text-2xl lg:text-4xl font-semibold">
                {item.value}
              </div>
              <div className="text-black text-base mt-2 lg:text-xl font-light max-w-[200px] mx-auto">
                {item.text}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stats;
