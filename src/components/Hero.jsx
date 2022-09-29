import React from "react";
import imagenes from "../assets/imagenes";

const Hero = () => {
  return (
    <section className="px-  bg-stone-300 md:px-0">
      <div className="container items-center max-w-6xl px-5 mx-auto space-y-0 text-center"></div>
      <div className="w-full lg:w-1/3"></div>
      <div className=" relative  max-w-9xl px- mx-auto  ">
        <img alt="hero" src={imagenes.img7} />
      </div>
    </section>
  );
};

export default Hero;
