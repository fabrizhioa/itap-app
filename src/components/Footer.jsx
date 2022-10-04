import React from "react";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font  bg-neutral-200">
      <div className="border-t border-gray-200 bg-neutral-800">
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
              Button
            </button>
          </div>
        </div>
      </div>
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-5">
          <div className="lg:w-1/6 md:w-1/2 w-full px-6">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">First Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Second Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Third Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
              </li>
            </nav>
          </div>
        </div>
      </div>

      <div className="bg-neutral-300">
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
