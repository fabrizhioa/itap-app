import React from "react";
import imagenes from "../assets/imagenes";
const NavBar = () => {
  return (
    <header className="text-gray-600 body-font sticky border-b-2 border-neutral-600  h-32 top-0 z-50 bg-neutral-200 drop-shadow-md">
      <div className="container mx-auto flex p-3 flex-wrap justify-center flex-col md:flex-row items-center">
      <img alt="hero" className="w-52 h-full "  src={imagenes.img4} />
      
      

      
       
      </div>
      
      <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center   text-black   font-['Helvetica'] justify-center">
        
        <button className="mr-5 text-yellow-600 hover:text-gray-50">Inicio</button>
        <button className="mr-5 hover:text-gray-50">Beneficios</button>
        <button className="mr-5 hover:text-gray-50">Productos</button>
        <button className="mr-5 hover:text-gray-50">Servicios</button>
        <button className="mr-5 hover:text-gray-50">Nosotros</button>
        <button className="mr-5 hover:text-gray-50">Contacto</button>
       
       
      
      </nav>
      
      
    
      
    </header>
  );
};

export default NavBar;
