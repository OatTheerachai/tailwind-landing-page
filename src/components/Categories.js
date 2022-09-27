import React from "react";

const Categories = () => {
  return (
    <div className="container mx-auto my-3">
      <h1 className="mt-5 mb-3 text-center text-2xl lg:text-[40px] lg:leading-tight lg:max-w-[888px] mx-auto font-semibold">
        Categories
      </h1>
      <div className="grid grid-cols-2 gap-10 my-10">
        <div className="cursor-pointer rounded-lg bg-women flex flex-col justify-center items-start px-10 min-h-[250px] object-right bg-riht lg:bg-center bg-cover bg-no-repeat relative">
          <h5 className="text-5xl font-bold">Woman</h5>
          <span className="mx-1 opacity-60">( 125 Products )</span>
        </div>
        <div className="cursor-pointer rounded-lg bg-men flex flex-col justify-center items-start px-10 min-h-[250px] object-right bg-riht lg:bg-center bg-cover bg-no-repeat relative">
          <h5 className="text-5xl font-bold">Men</h5>
          <span className="mx-1 opacity-60">( 109 Products )</span>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button className="text-white px-[20px] lg:px-[80px] py-[9px] lg:py-[16px] mb-[50px] text-xl rounded-md bg-accent hover:bg-main backdrop-blur-md transition">
          Show more
        </button>
      </div>
    </div>
  );
};

export default Categories;
