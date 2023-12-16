import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex flex-wrap justify-around">
        {/* Social Links */}
        <div className="lg:w-1/4 md:w-1/2 p-4">
          <div className="wrapper row4">
            <footer id="footer" className="flex items-center justify-center bg-gray-800 text-white py-8"> 
              <div className="lg:w-1/4 md:w-1/2 p-4">
                <h1 className="logoname text-4xl font-bold mb-4">Gimnazija</h1>
                <ul className="flex space-x-4">
                  <li><FaFacebookSquare /><a className="faicon-facebook" href="https://www.facebook.com/gimn.kakaknj"><i className="fab fa-facebook"></i></a></li>
                  <li><FaInstagram /><a className="faicon-instagram" href="#"><i className=""></i></a></li>
                  <li><SiGmail /><a className="faicon-gmail" href="#"><i className=""></i></a></li>
                </ul>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4">
              </div>
            </footer>
          </div>
        </div>

        {/* Kontakt */}
        <div className="lg:w-1/4 md:w-1/2 p-4">
          <h6 className="text-xl font-semibold mb-2">Kontakt</h6>
          <ul className="list-none p-0 m-0">
            <li className="flex items-center mb-2"><i className="fas fa-map-marker-alt mr-2"></i>
              <address>
                Ulica šehida 32, Kakanj <br />
                Kakanj, 72240
              </address>
            </li>
            <li className="flex items-center mb-2"><i className="fas fa-phone mr-2"></i> 032 456 241</li>
            <li className="flex items-center"><i className="far fa-envelope mr-2"></i>gimnazijakakanj@bih.net.ba</li>
          </ul>
        </div>

        {/* Kreator stranice */}
        <div className="lg:w-1/4 md:w-1/2 p-4">
          <h6 className="text-xl font-semibold mb-2">Kreator stranice</h6>
          <ul className="list-none p-0 m-0">
            <li className="mb-2">
              <p>&copy; Mirza Hodzic</p>
              <p className="mb-4">&copy; Nedim Neimarlija</p>
            </li>
            <li>
              <img src="images/demo/logo.png" alt="Logo" className="max-w-full h-auto" />
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="container mx-auto text-center mt-4">
        <p className="text-sm">&copy; 2023 - All Rights Reserved - <a href="#" className="underline">Mirza Hodzic</a><a href="#" className="underline"> Nedim Neimarlija</a></p>
      </div>
    </div>
  );
}

export default Footer;
