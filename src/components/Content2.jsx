import React from "react";
import { AiOutlineDropbox,AiOutlineWifi } from "react-icons/ai";
import { BsShieldCheck } from "react-icons/bs";
import { VscDeviceMobile } from "react-icons/vsc";

const rowClassName =
  "flex-auto h-full border tr  p-14 font-sans  bg-black bg-opacity-50 to-transparent";

const Content2 = () => {
  return (
    <section className="text-white bg-Hero-new   bg-cover bg-fixed">
      <div className="h-96 flex ">
        <div className={rowClassName}>
        <AiOutlineDropbox/>
          <h1 className="text-lg font-bold tracking-wider items-end ">Recibe Listo  </h1>{" "}
          <h2 className="text-lg font-bold tracking-wider"> para Usar </h2>{" "}
          <p className="text-sm mt-2 ">
            Recibe todo listo para usar desde el primer día
          </p>
        </div>
        <div className={rowClassName}>
        <AiOutlineWifi/>
          <h1 className="text-lg font-semibold tracking-wider">Tecnología NFC</h1>{" "}
          <p className="text-sm tracking-wider">
            Recibe todo listo para usar desde el primer día
          </p>
        </div>
        <div className={rowClassName}>
        <BsShieldCheck/>
          <h1 className="text-lg font-semibold tracking-wider ">Rapido, Facil y seguro</h1>{" "}
          <p className="text-sm ">
            Recibe todo listo para usar desde el primer día
          </p>
        </div>
      
        <div className={rowClassName}>
        <VscDeviceMobile/>
          <h1 className="text-lg font-semibold tracking-wider ">Compatibilidad </h1>{" "}
          <p className="text-sm">
            Recibe todo listo para usar desde el primer día
          </p>
        </div>
      </div>
    </section>
  );
};

export default Content2;
