import React from "react";
import { useState } from "react";
import imagenes from "../assets/imagenes";

const NavBarContent = () => {
  return (
    <>
      <ul className="flex flex-col p-2  mt-4 lg:bg-[#dfdfdf]  bg-gray-700 md:bg-[#dfdfdf] md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <button
            href="#"
            className="block py-2 pr-4 pl-3  text-lg lg:text-base font-extralight text-gray-100 lg:text-gray-900 rounded  hover:bg-gray-400 md:hover:bg-transparent md:border-0 md:hover:text-gray-50  md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            aria-current="page"
          >
            Inicio
          </button>
        </li>
        <li>
          <button
            href="#"
            className="block py-2 pr-4 pl-3  text-lg lg:text-base font-extralight text-gray-100 lg:text-gray-900 rounded  hover:bg-gray-400 md:hover:bg-transparent md:border-0 md:hover:text-gray-50  md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            Beneficios
          </button>
        </li>
        <li>
          <button
            href="#"
            className="block py-2 pr-4 pl-3 text-lg lg:text-base font-extralight text-gray-100 lg:text-gray-900 rounded hover:bg-gray-400 md:hover:bg-transparent md:border-0 md:hover:text-gray-50  md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            Productos
          </button>
        </li>
        <li>
          <button
            href="#"
            className="block py-2 pr-4 pl-3 text-lg lg:text-base text-gray-100 lg:text-gray-900 font-extralight rounded hover:bg-gray-400 md:hover:bg-transparent md:border-0 md:hover:text-gray-50 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            Servicios
          </button>
        </li>
        <li>
          <button
            href="#"
            className="block py-2 pr-4 pl-3 text-lg text-gray-100 lg:text-base lg:text-gray-900  font-extralight rounded hover:bg-gray-400 md:hover:bg-transparent md:border-0 md:hover:text-gray-50 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            Nosotros
          </button>
        </li>

        <li>
          <button
            href="#"
            className="block py-2 pr-4 pl-3 text-lg text-gray-100 lg:text-base lg:text-gray-900  font-extralight rounded hover:bg-gray-400 md:hover:bg-transparent md:border-0 md:hover:text-gray-50 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            Contacto
          </button>
        </li>
      </ul>
    </>
  );
};

const NavBar = () => {
  const [open, toggleOpen] = useState(false);

  return (
    <header className="text-gray-600 body-font sticky   border-transparent md:border-transparent lg:border-neutral-600 h-30 md:h-flex lg:h-36 lg:flex  flex-col top-0 z-50 bg-[#dfdfdf] drop-shadow-md">
      <div className="container mx-auto flex p-1 flex-wrap justify-around pt-4 flex-col md:flex-row items-center">
        <span className="w-20 md:w-20 pt-2 lg:w-52 h-full " />
        <img
          alt="hero"
          className="w-20 md:w-20 pt-2 lg:w-52 h-full "
          src={imagenes.img4}
        />

        <span class="relative inline-block ml-8">
          <span class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-gray-800 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
            0
          </span>
          <a
            href="#_"
            class="inline-flex overflow-hidden text-white bg-gray-900 rounded group"
          >
            <span class="px-3.5 py-2 text-white bg-gray-500 group-hover:bg-gray-900 flex items-center justify-center">
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                ></path>
              </svg>
            </span>
            <span class="pl-4 pr-5 py-2.5">Ordenes</span>
          </a>
        </span>
      </div>

      <nav className="  px-2 sm:px-4 py-2 rounded dark:bg-gray-900">
        <div className="container flex flex-wrap justify-between md:justify-center  lg:justify-center items-center mx-auto">
          <button
            onClick={() => toggleOpen(!open)}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 bg-gray-800 ml-3 text-sm text-gray-50  md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-8 h-8 "
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>

          {open && (
            <div className="w-full  md:hidden" id="navbar-default">
              <NavBarContent />
            </div>
          )}

          <div className="hidden md:block  md:w-auto" id="navbar-default">
            <NavBarContent />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
