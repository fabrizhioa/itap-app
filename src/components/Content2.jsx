import React from "react";
import { AiOutlineWifi } from "react-icons/ai";
import { BsPersonCheck } from "react-icons/bs";
import { BsShieldShaded } from "react-icons/bs";
import { VscDeviceMobile } from "react-icons/vsc";
const Content2 = () => {
  return (
    <section class="py-20 bg-gray-200  bg-cover bg-fixed overflow-y-auto bg-gradient-to-tr from-gray-600 via-gray-400 to-cyan-800  ">
      <div class="container max-w-6xl mx-auto">
        <div class="grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-8 sm:px-8 xl:px-0">
          <div class="relative flex flex-col items-center justify-between col-span-4 px-8 py-12 hover:bg-gray-200  space-y-4 overflow-hidden bg-gray-100 sm:rounded-xl">
            <div class="p-3 text-white bg-blue-500 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-8 h-8 "
                viewBox="0 0 15 15"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <BsPersonCheck />
              </svg>
            </div>
            <h4 class="text-xl font-medium text-gray-700">
              Recibe Listo para Usar
            </h4>
            <p class="text-base text-center text-gray-500">
              Recibe todo listo para usar desde el primer día.
            </p>
          </div>

          <div class="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl hover:bg-gray-200">
            <div class="p-3 text-white bg-blue-500 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-8 h-8 "
                viewBox="0 0 15 15"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <AiOutlineWifi />
              </svg>
            </div>
            <h4 class="text-xl font-medium text-gray-700">Tecnología NFC</h4>
            <p class="text-base text-center text-gray-500">
              Nuestra tecnología es la manera mas avanzada de compartir
              información.
            </p>
          </div>

          <div class="flex flex-col items-center justify-between col-span-4 hover:bg-gray-200 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl">
            <div class="p-3 text-white bg-blue-500 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-8 h-8 "
                viewBox="0 0 15 16"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <BsShieldShaded />
              </svg>
            </div>
            <h4 class="text-xl font-medium text-gray-700">
              Rapido, Facil y seguro
            </h4>
            <p class="text-base text-center text-gray-500">
              Comparte en un Segundo la información que quieras, LA seguridad de
              Tus datos es lo mas importante para nosotros.
            </p>
          </div>

          <div class="flex flex-col items-center justify-between col-span-4 hover:bg-gray-200 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl">
            <div class="p-3 text-white bg-blue-500 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-8 h-8 "
                viewBox="0 0 16 15"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <VscDeviceMobile />
              </svg>
            </div>
            <h4 class="text-xl font-medium text-gray-700">Compatibilidad</h4>
            <p class="text-base text-center text-gray-500">
              Con Nuestras dos presentaciones todos tus clientes serán
              compatibles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content2;
