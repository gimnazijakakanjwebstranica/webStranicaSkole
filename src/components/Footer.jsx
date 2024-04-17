import React from "react";
import { FaEnvelope } from "react-icons/fa"; // Import FaEnvelope

const Footer = () => {
  return (
    <footer className="bottom-0 w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-8">
      <div className="container mx-auto">
        {/* Kontakt */}
        <div className="p-4 bg-gray-800 rounded-md shadow-md">
          <div className="md:w-full">
            <h6 className="text-xl font-semibold mb-4 flex items-center">
              <FaEnvelope className="mr-2" />
              Kontakt
            </h6>
            <ul className="list-none p-0 m-0">
              <li className="flex items-center mb-2">
                <p className="mr-2">Ulica šehida 32, Kakanj</p>
                <p>Kakanj, 72240</p>
              </li>
              <li className="flex items-center mb-2">
                <p className="mr-2">032 456 241</p>
              </li>
              <li className="flex items-center">
                <p className="mr-2">gimnazijakakanj@bih.net.ba</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="container mx-auto text-center mt-6">
          <p className="text-lg">
            &copy; 2024 - Sva prava zadržana -{" "}
            <a href="https://www.hodzicmirza.com" className="underline pr-4">
              Mirza Hodžić
            </a>
            <a href="https://www.facebook.com/nedimnn10" className="underline">
              Nedim Neimarlija
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
