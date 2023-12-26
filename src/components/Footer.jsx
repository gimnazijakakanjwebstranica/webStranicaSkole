import React from "react";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-4">
      <div className="container mx-auto">

        {/* Kontakt */}
        <div className="p-4">
          <div className="md:w-full">
            <h6 className="text-xl font-semibold mb-2 left-1 flex items-center">Kontakt</h6>
            <ul className="list-none p-0 m-0 left-1">
              <li className="flex items-center mb-2">
                <p className="fas fa-map-marker-alt mr-2"></p>
                <address>
                  Ulica šehida 32, Kakanj <br />
                  Kakanj, 72240
                </address>
              </li>
              <li className="flex items-center mb-2">
                <i className="fas fa-phone mr-2"></i> 032 456 241
              </li>
              <li className="flex items-center">
                <i className="far fa-envelope mr-2"></i>gimnazijakakanj@bih.net.ba
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="container mx-auto text-center mt-4">
          <p className="text-sm">
            &copy; 2023 - Sva prava zadržana -{" "}
            <a href="https://www.facebook.com/MIrzaMladost" className="underline">
              Mirza Hodzic
            </a>
            <a href="https://www.facebook.com/nedimnn10" className="underline">
               Nedim Neimarlija
            </a>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Footer;
