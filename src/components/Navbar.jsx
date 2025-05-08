import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // icons for menu

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-green-100">
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto relative">
        {/* Logo */}
        <div className="text-4xl font-bold">
          Design<span className="text-orange-500">AGENCY</span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 font-medium text-gray-700">
          <li className="flex items-center space-x-1">
            <a href="#" className="hover:text-green-500 transition">Services</a>
          <div className="flex">
            <img src="img/Vector.png" alt="Arrow Vector" />
          </div>
          </li>
          <li>
            <a href="#" className="hover:text-green-500 transition">About Us</a>
          </li>
          <li>
            <a href="#" className="hover:text-green-500 transition">Contact Us</a>
          </li>
        </ul>


        {/* Buttons - Desktop */}
        <div className="hidden md:flex space-x-4">
          <button className="border border-green-500 text-green-500 px-5 py-2 rounded-lg hover:bg-green-100 transition">
            Login
          </button>
          <button className="bg-green-500 text-white px-5 py-2 rounded-lg hover:bg-green-600 transition">
            Register
          </button>
        </div>

        {/* Hamburger Icon - Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-20 left-0 w-full bg-green-50 flex flex-col items-center space-y-6 py-6 shadow-md md:hidden z-50">
            <a href="#" className="hover:text-green-500 transition text-xl">Services
              <div>

              </div>
            </a>
            <a href="#" className="hover:text-green-500 transition text-xl">About Us</a>
            <a href="#" className="hover:text-green-500 transition text-xl">Contact Us</a>
            <div className="flex flex-col space-y-4 w-2/3">
              <button className="border border-green-500 text-green-500 px-5 py-2 rounded-lg hover:bg-green-100 transition w-full">
                Login
              </button>
              <button className="bg-green-500 text-white px-5 py-2 rounded-lg hover:bg-green-600 transition w-full">
                Register
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
