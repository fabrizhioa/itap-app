import React from "react";
import imagenes from "../assets/imagenes";

const Hero = () => {
  return (
    <section className="px-  bg-Neutral-200 md:px-0 bg-neutral-200">
      <div className="max-w-7xl  sm:py-10 py-6 sm:px-4 lg:px-6 font-momo font-semibold sm:text-center">
        <p className=" lg:text-5xl sm:text-2xl text-2xl  text-center  text-gray-900 s">
          La evolución del Menú se encuentra aquí{" "}
        </p>
      </div>

      <div className="container items-center max-w-6xl lg:px-60  mx-auto space-y-0 text-center"></div>
      <div className="w-full lg:w-1/3"></div>
      <div className=" relative  max-w-9xl px- mx-auto  ">
        <img alt="hero" className="" src={imagenes.img7} />
      </div>
    </section>
  );
};

export default Hero;
