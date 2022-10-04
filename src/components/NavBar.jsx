import React from "react";
import imagenes from "../assets/imagenes";
const NavBar = () => {
  return (
    <header className="text-gray-600 body-font sticky border-b-2 border-neutral-600  h-32 top-0 z-50 bg-[#dfdfdf] drop-shadow-md">
      <div className="container mx-auto flex p-3 flex-wrap justify-center flex-col md:flex-row items-center">
      <img alt="hero" className="w-52 h-full "  src={imagenes.img4} />
      
      </div>
      
      <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center    text-black   font-['Helvetica'] justify-center">
     
        <button className="mr-5 text-yellow-600 tracking-wider hover:text-gray-50">Inicio</button>
        
        <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
       
      
      </nav>
      
      
    
      
    </header>
  );
};

export default NavBar;
