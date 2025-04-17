import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Bima Computer</h3>
            <p className="text-gray-400">
              Solusi Komputer Anda, Cepat & Terpercaya!
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Laptop Repair</li>
              <li className="text-gray-400">PC Repair</li>
              <li className="text-gray-400">Data Recovery</li>
              <li className="text-gray-400">OS Installation</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <Phone size={16} className="mr-2" />
                +62 858-8921-4624
              </li>
              <li className="flex items-center text-gray-400">
                <Mail size={16} className="mr-2" />
                bimacomputer@gmail.com
              </li>
              <li className="flex items-center text-gray-400">
                <MapPin size={16} className="mr-2" />
                Jl. Bima I No.31, RT.5/RW.7, Cijantung, Kec. Ps. Rebo, Kota
                Jakarta Timur, Daerah Khusus Ibukota Jakarta 13770
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Bima Computer. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
