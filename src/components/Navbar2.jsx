import React, { useState } from "react";

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Website Name */}
        {/* <div className="text-brown inter-bold  text-xl">
          Pradhanya Foods
        </div> */}
        <img className="w-32 sm:w-36 md:w-40" src="/EditEon Logo.png" alt="" />
        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        {/* Menu Items for Large Screens */}
        <ul className="hidden inter-regular lg:flex space-x-4 text-brown">
          <li><a href="#home" className="hover:underline">Home</a></li>
          <li><a href="#services" className="hover:underline">Services</a></li>
          <li><a href="#offerings" className="hover:underline">Offerings</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden ${isOpen ? "block" : "hidden"}`}>
        <ul className="flex inter-regular flex-col space-y-2 text-brown mt-4">
        <li><a href="#home" className="hover:underline">Home</a></li>
          <li><a href="#services" className="hover:underline">Services</a></li>
          <li><a href="#offerings" className="hover:underline">Offerings</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar2;
