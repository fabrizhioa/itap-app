import React from "react";
import imagenes from "../assets/imagenes";
const NavBar = () => {
  return (
    <header className="text-gray-600 body-font sticky   border-transparent md:border-transparent lg:border-neutral-600 h-30 md:h- lg:h-32 lg:flex-col md:flex  flex top-0 z-50 bg-[#dfdfdf] drop-shadow-md">
      <div className="container mx-auto flex p-3 flex-wrap justify-center pt-2 flex-col md:flex-row items-center">
        <img alt="hero" className="w-20 md:w-20 lg:w-52 h-full " src={imagenes.img4} />
      </div>

      <nav className="md:ml-auto md:mr-auto flex flex-wrap  items-center  text-black font-['Helvetica'] md:justify-center justify-center lg:justify-center">
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-0 ml-3 text-sm text-gray-500 bg-black lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-10 h-10"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div class="hidden md:hidden lg:block w-full   md:w-auto" id="navbar-default">
          <ul class="flex flex-col p-4 mt-4 border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <button
                href="#"
                class="block py-2 pr-4 pl-3 text-white bg-gray-700 md:hover:text-gray-100  md:bg-transparent md:text-gray-700 md:p-0 dark:text-white"
                aria-current="page"
              >
                Inicio
              </button>
            </li>
            <li>
              <button
                href="#"
                class="block py-2 pr-4 pl-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-100 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Beneficios
              </button>
            </li>
            <li>
              <button
                href="#"
                class="block py-2 pr-4 pl-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-100 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Productos
              </button>
            </li>
            <li>
              <button
                href="#"
                class="block py-2 pr-4 pl-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-100 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Servicios
              </button>
            </li>
            <li>
              <button
                href="#"
                class="block py-2 pr-4 pl-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-100 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Nosotros
              </button>
            </li>
            <li>
              <button
                href="#"
                class="block py-2 pr-4 pl-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-100 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contacto
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
