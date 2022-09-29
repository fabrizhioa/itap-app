import React from "react";

const NavBar = () => {
  return (
    <header class="text-gray-600 body-font sticky opacity-90 top-0 z-50 bg-slate-400  ">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 ">
          <span class="mx-auto text-xl font-black leading-none text-gray-900 select-none">
            ITAP<span class="text-gray-00">.</span>
          </span>
        </a>
        <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-gray-900 text-base justify-center">
          <a class="mr-5 hover:text-gray-300">Inicio</a>
          <a class="mr-5 hover:text-gray-300">Beneficios</a>
          <a class="mr-5 hover:text-gray-300">Productos</a>
          <a class="mr-5 hover:text-gray-300">Servicios</a>
          <a class="mr-5 hover:text-gray-300">Nosotros</a>
          <a class="mr-5 hover:text-gray-300">Contacto</a>
        </nav>
        <button class="inline-flex items-center bg-gray-100 border-0 py-3 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Comprar Ahora
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default NavBar;
