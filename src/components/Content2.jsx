import React from "react";
import { AiOutlineDropbox, AiOutlineWifi } from "react-icons/ai";
import { BsShieldCheck } from "react-icons/bs";
import { VscDeviceMobile } from "react-icons/vsc";

const rowClassName =
  "flex-auto h-full border tr  p-14 font-sans   bg-black bg-opacity-50 to-transparent";

const Content2 = () => {
  return (
    <section className="text-white bg-Hero-new   bg-cover bg-fixed">
      <div className="h-96 flex  ">
        <div className={rowClassName}>
          <svg className="w-14 h-14  fill-current" viewBox="0 0 15 16">
            <AiOutlineDropbox />
          </svg>
          <h1 className="text-lg font-bold tracking-wider  ">Recibe Listo </h1>{" "}
          <h2 className="text-lg font-bold tracking-wider "> para Usar </h2>{" "}
          <p className="text-sm mt-2  text-gray-300 ">
            Recibe todo listo para usar desde el primer día
          </p>
        </div>
        <div className={rowClassName}>
          <svg className="w-14 h-14  fill-current" viewBox="0 0 15 16">
            <AiOutlineWifi />
          </svg>
          <h1 className="text-lg font-semibold tracking-wider">Tecnología</h1>{" "}
          <h2 className="text-lg font-bold tracking-wider  "> NFC </h2>{" "}
          <p className="text-sm mt-2 text-gray-300 whitespace-pre-line tracking-wider  ">
            Nuestra tecnología es la manera mas avanzada
          </p>
        </div>
        <div className={rowClassName}>
          <svg className="w-14 h-14  fill-current" viewBox="0 0 15 16">
            <BsShieldCheck />
          </svg>
          <h1 className="text-lg font-semibold tracking-wider">Rapido</h1>{" "}
          <h2 className="text-lg font-bold tracking-wider  ">
            {" "}
            Facil y seguro{" "}
          </h2>
          <p className="text-sm  mt-2 text-gray-300">
            Comparte en un Segundo la información que quieras
          </p>
        </div>

        <div className={rowClassName}>
          <svg className="w-14 h-14  fill-current" viewBox="0 0 15 16">
            <VscDeviceMobile />
          </svg>
          <h1 className="text-lg font-semibold tracking-wider ">
            Compatibilidad{" "}
          </h1>{" "}
          
          <p className="text-sm  mt-2 text-gray-300">
          Con Nuestras dos presentaciones todos
          </p>
        </div>
      </div>
    </section>
  );
};

export default Content2;
