import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white p-2 flex flex-col sm:flex-row justify-between items-center z-50 relative">
      <h1 className="text-2xl font-bold mb-2 sm:mb-0">
        Citadel <span className="text-amber-400">7</span>
      </h1>
      {/* Hamburger Icon */}
      <button
        className="sm:hidden absolute right-4 top-4 focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {menuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 8h16M4 16h16"
            />
          )}
        </svg>
      </button>
      {/* Menu */}
      <ul
        className={`flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4
          ${menuOpen ? "block" : "hidden"} sm:flex bg-gray-800 sm:bg-transparent absolute sm:static top-16 left-0 w-full sm:w-auto z-10 sm:z-auto px-4 sm:px-0 py-4 sm:py-0 rounded-b-lg sm:rounded-none`}
      >
        <li className="hover:underline"><a href="#home">Home</a></li>
        <li className="hover:underline"><a href="#features">Features</a></li>
        <li className="hover:underline"><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;