import React, { useState } from "react";
import navMenu from "../api/HeaderMenu.json"
const Header = ({ data }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white text-black px-6 py-4 md:py-8 flex justify-between items-center md:sticky z-20">
      {/* Brand Logo */}
      <div className="">
        <a href="/"><img src="/images/Euryka-footer-Logo-Black.svg" width={150}/></a>
      </div>

      {/* Hamburger Button for Mobile */}
      <button
        className="block md:hidden text-3xl"
        onClick={toggleMobileMenu}
        aria-label="Toggle Menu"
      >
        <img src="/images/MobileMenu.png" width={20} alt="MobileMenu" className="rotate-45"/>
      </button>

      {/* Navigation Menu */}
      <nav
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } md:flex md:gap-8 absolute md:static top-16  left-0 w-full  md:top-0 md:justify-end md:items-center bg-white text-black md:bg-transparent rounded-lg shadow-lg md:shadow-none p-4 md:p-0`}
      >
        {/* Menu Section */}
        <div className="mb-4 md:mb-0 md:border-r md:border-[#cccccc]">
          <ul className="flex flex-col md:flex-row gap-4">
            {navMenu.menu.map((item) => (      
              <li key={item.id}>
                <a
                  href={item.url}
                  className="text-black  pr-4"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Button Section */}
        <div className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0 md:items-center">
          {navMenu.button.map((btn , index) => (
            <a
              key={btn.id}
              href={btn.url}
              className={`${index !== 0 ? "bg-red-800 text-white px-4 py-2 rounded transition-colors" : " "}`}
            >
              {btn.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
