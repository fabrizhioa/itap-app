import React from "react";

const Content3 = () => {
  return (
    <section className="flex items-center justify-start py-10 text-white bg-hero-pepper bg-cover  bg-white sm:py-16 md:py-24 lg:py-32">
      <div className="relative max-w-3xl px-10 text-center text-white auto lg:px-0">
        <div className="flex flex-col w-full md:flex-row">
          <div className="max-w-6xl px-4  mx-auto border-solid justify-start lg:px-12">
            <div className="flex flex-col items-start leading-7 text-gray-900 border-0 border-gray-200 lg:items-center lg:flex-row">
              <div className="box-border flex-1 text-center border-solid sm:text-left"></div>
            </div>
          </div>
        </div>

        <div className="my-24  p-1 lg:my-72"></div>

        <button
          href="#_"
          className="inline-flex animate-bounce items-center transition delay-150 duration-300 ease-in-out  justify-center px-2 py-2 mt-2 ml-0 font-sans text-base leading-none text-gray-100 no-underline bg-slate-700 border border-gray-900 border-solid rounded cursor-pointer md:w-auto lg:mt-0 hover:bg-gray-500 hover:border-gray-700 hover:text-white focus-within:bg-gray-700 focus-within:border-gray-700 focus-within:text-white sm:text-lg lg:ml-6 md:text-xl"
        >
          Ver Productos
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 ml-2"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            trokelinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Content3;
