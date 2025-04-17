import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Set class 'dark' di <html> saat mode dark aktif
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("light");
    }
  }, [isDarkMode]);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-blue-600 dark:text-yellow-400">
                Bima Computer
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-yellow-400 px-3 py-2"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-yellow-400 px-3 py-2"
            >
              About
            </Link>
            <Link
              to="/services"
              className="text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-yellow-400 px-3 py-2"
            >
              Services
            </Link>

            <div className="flex items-center space-x-4 ml-4">
              <button
                onClick={toggleDarkMode}
                className="text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-yellow-400"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-yellow-400"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/"
                className="block text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-yellow-400 px-3 py-2"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-yellow-400 px-3 py-2"
              >
                About
              </Link>
              <Link
                to="/services"
                className="block text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-yellow-400 px-3 py-2"
              >
                Services
              </Link>
              <Link
                to="/contact"
                className="block text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-yellow-400 px-3 py-2"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
