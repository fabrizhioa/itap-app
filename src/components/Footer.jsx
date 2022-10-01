import React from "react";

const Footer = () => {
  return (
    <footer class="text-gray-600 body-font  bg-neutral-200">
      <div class="border-t border-gray-200 bg-neutral-800">
        <div class="container  py-32 flex flex-wrap mx-auto items-center">
          <div class="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start"></div>
        </div>
      </div>
      <div class="container px-5 py-10 mx-auto">
        <div class="flex flex-wrap md:text-left text-center -mb-10 -mx-5">
          <div class="lg:w-1/6 md:w-1/2 w-full px-6">
            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav class="list-none mb-10">
              <li>
                <a class="text-gray-600 hover:text-gray-800">First Link</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Second Link</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Third Link</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
              </li>
            </nav>
          </div>
        </div>
      </div>

      <div class="bg-neutral-300">
        <div class="container mx-auto py-6 px-2 justify-center flex flex-wrap flex-col sm:flex-row">
          <p class="text-gray-500 text-sm text-center sm:text-left">
            ©2020 derechos reservados iTAP MEXICO
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
