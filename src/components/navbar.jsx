import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Citadel <span className="text-amber-400">7</span></h1>
      <ul className="flex space-x-4">
        <li className="hover:underline"><a href="#home">Home</a></li>
        <li className="hover:underline"><a href="#features">Features</a></li>
        <li className="hover:underline"><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;