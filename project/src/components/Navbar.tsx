import React from "react";
import { Link } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useDarkMode } from "../DarkModeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
                Bima Computer
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="px-3 py-2 hover:text-blue-500">
              Home
            </Link>
            <Link to="/about" className="px-3 py-2 hover:text-blue-500">
              About
            </Link>
            <Link to="/services" className="px-3 py-2 hover:text-blue-500">
              Services
            </Link>

            <button
              onClick={toggleDarkMode}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" className="block px-3 py-2 hover:text-blue-500">
                Home
              </Link>
              <Link to="/about" className="block px-3 py-2 hover:text-blue-500">
                About
              </Link>
              <Link
                to="/services"
                className="block px-3 py-2 hover:text-blue-500"
              >
                Services
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 hover:text-blue-500"
              >
                Contact
              </Link>
              <Link
                to="/account"
                className="block px-3 py-2 hover:text-blue-500"
              >
                Account
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
