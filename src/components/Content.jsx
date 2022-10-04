import React from "react";


const Content = () => {
  return (
    <section className="text-white bg-hero-max  bg-cover bg-center lg:bg-center  ">
      <div class="max-w-6xl  py-1 lg:py-10 lg:px-14  ">
        <p class="mt-2 text-4xl font-semibold text-end lg:text-start px-4 lg:px-20   text-gray-50  sm:tracking-tight lg:text-6xl">
          Una Nueva
        </p>
        <p class="mt-2 text-4xl font-semibold text-end px-4  lg:text-start lg:px-20   text-gray-50  sm:tracking-tight lg:text-6xl">
          Manera De
        </p>
        <p class="mt-2 text-4xl font-semibold text-end px-4  lg:text-start lg:px-20  text-gray-50  sm:tracking-tight lg:text-6xl">
          Compartir.
        </p>
        <div className="px-9 mt-2 lg:px-36 justify-end lg:justify-start  lg:mt-6 flex">
          <button href="#_" class="relative px-1 lg:px-4 lg:py-4 py-2 font-medium text-white group">
            <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-gray-400 group-hover:bg-gray-800 group-hover:skew-x-12"></span>
            <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-gray-700 group-hover:bg-gray-500 group-hover:-skew-x-12"></span>
            <span class="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-gray-400 -rotate-12"></span>
            <span class="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-gray-400 -rotate-12"></span>
            <span class="relative italic">Comprar Ahora</span>
          </button>
        </div>
      </div>
      <div></div>
      <div className="h-52 lg:96 flex"> </div>
    </section>
  );
};

export default Content;
