import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="https://webnsoftware.com/images/logo.jfif"
            className="h-12 w-17"
            alt="Logo"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-800 font-semibold">
          {[
            { name: "Home", href: "#" },
            { name: "Services", href: "#services" },
            { name: "About", href: "#about" },
            { name: "Testimonials", href: "#testimonials" },
            { name: "Contact", href: "#contact" },
          ].map((item, index) => (
            <li key={index} className="relative group">
              <a
                href={item.href}
                className="hover:text-blue-600 transition-colors duration-300"
              >
                {item.name}
                {/* Underline effect */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Call Now Button */}
        <a
          href="tel:+917569100563"
          className="hidden md:block bg-gradient-to-r from-blue-500 to-blue-700 text-white px-5 py-2 rounded-full shadow-lg hover:scale-105 transition"
        >
          Call Now
        </a>

        {/* Mobile Hamburger Icon */}
        <button
          className="md:hidden flex flex-col space-y-1 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-0.5 bg-gray-800"></span>
          <span className="w-6 h-0.5 bg-gray-800"></span>
          <span className="w-6 h-0.5 bg-gray-800"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-md px-4 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 py-3" : "max-h-0 py-0"
        }`}
      >
        {[
          { name: "Home", href: "#" },
          { name: "Services", href: "#services" },
          { name: "About", href: "#about" },
          { name: "Testimonials", href: "#testimonials" },
          { name: "Contact", href: "#contact" },
        ].map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="block py-2 text-gray-800 hover:text-blue-600 transition-colors duration-300"
          >
            {item.name}
          </a>
        ))}

        <a
          href="tel:+1234567890"
          className="block mt-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-5 py-2 rounded-full shadow-lg hover:scale-105 transition"
        >
          Call Now
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
