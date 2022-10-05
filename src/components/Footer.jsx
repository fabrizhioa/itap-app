import React from "react";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font  bg-[#ececec]">
      <div className="border-t border-gray-200 bg-[#2d2d2d]">
        <div className="container  py-32 flex flex-wrap justify-center space-x-4 mx-auto items-center">
          <label for="email" class="leading-7 text-2xl text-gray-300">
            Subscribete!
          </label>
          <input
            type="email"
            id="email"
            name="email"
            class="w-72 bg-gray-100 bg-opacity-50  border-yellow-300 focus:border-red-500 focus:bg-transparent focus:ring-2 focus:ring-yellow-700 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
          <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-center">
            <button class="text-white bg-yellow-700 py-2 px-8 focus:outline-none hover:bg-gray-600  text-lg">
            Subscribete
            </button>
          </div>
        </div>
      </div>
      <div class="container p-6 text-gray-800">
    <div class="grid lg:grid-cols-2 text-center gap-1">
      <div class="mb-6 md:mb-0">
        <h5 class="font-medium mb-2 text-center uppercase">Categorias</h5>

        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-600 hover:text-gray-800">INICIO</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">BENEFICIOS</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">SERVICIOS</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">PRODUCTOS</a>
          </li>
        </nav>
      </div>

      <div class="mb-6 md:mb-0">
        <h5 class="font-medium mb-2  uppercase">Categorias</h5>

        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-600 hover:text-gray-800">ENVIOS Y DEVOLUCIONES</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">METODOS DE PAGO</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">FAQ</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">STORE POLICY</a>
          </li>
        </nav>
      </div>
    </div>
  </div>

      <div className="bg-[#e3e3e3]">
        <div className="container mx-auto py-6 px-2 justify-center flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-600 text-md text-center sm:text-left">
            ©2020 derechos reservados iTAP MEXICO
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
