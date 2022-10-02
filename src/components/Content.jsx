import React from "react";

const Content = () => {
  return (
    <section className="flex items-center justify-start py-5 text-white lg:bg-hero-max bg-hero-max bg-cover bg-center   bg-white sm:py-16 md:py-24 lg:py-5">
      <div className="relative max-w-3xl px-10 text-center text-white auto lg:px-0">
        <div className="flex flex-col w-full  md:flex-row">
          <div className="max-w-6xl px-4  mx-auto border-solid justify-start lg:px-12">
            <div className="flex flex-col items-start leading-7 text-gray-900 border-0 border-gray-200 lg:items-center lg:flex-row">
              <div className="box-border flex-1 text-center border-solid sm:text-left"></div>
            </div>
          </div>
        </div>
        <div className=" my-48  p-1 lg:my-72"></div>

      </div>
    </section>
  );
};

export default Content;
