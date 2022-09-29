import React from "react";
import imagenes from "../assets/imagenes";

const Hero = () => {
  return (
    <section class="px-  bg-stone-300 md:px-0">
      <div class="container items-center max-w-6xl px-5 mx-auto space-y-0 text-center"></div>
      <div class="w-full lg:w-1/3"></div>
      <div class=" relative  max-w-9xl px- mx-auto  ">
        <img src={imagenes.img7} />
      </div>
    </section>
  );
};

export default Hero;
