import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";
import { CiMenuBurger } from "react-icons/ci";
import logoOpcine from "../resources/photos/logoOpcine.png";
import "../index.css";
import { useState, useEffect } from "react";
import BurgerMenu from "./BurgerMenu";

const NavBar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isBurgerMenu, setIsBurgerMenu] = useState(false);

  const toggleBurgerMenu = () => {
    setIsBurgerMenu(!isBurgerMenu);
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  
  return (
    <div className="font-link">
      {windowWidth > 700 ? (
        <>
          <div className="text-l pt-5 pb-6 p-6 border-b-[1px]">
            <div className=" flex justify-center ml-[110px] gap-10">
              <div className="pt-5 pb-3 p-6 flex align-middle">
                <div className="p-3 pl-4">
                  <FaPhoneAlt
                    style={{ color: "blue", fontSize: "20px" }}
                    className=""
                  />
                </div>
                <div>
                  <span className="font-bold">Telefon: </span> <br />
                  <span>032 456 241</span>
                </div>
              </div>

              <div className="pt-5 pb-3 p-6 flex justify-center items-center align-middle">
                <img src={logoOpcine} className="w-12" />
              </div>

              <div className="pt-5 pb-3 p-6 flex align-middle">
                <div className="p-2 pl-4">
                  <IoIosMail style={{ color: "orange", fontSize: "2em" }} />
                </div>
                <div>
                  <span className="font-bold">Mail: </span> <br />
                  <span>gimnazijakakanj@bih.net.ba</span>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex justify-center gap-8 max-w-700px sm:text-base md:text-lg lg:text-xl pt-4 pb-4">
            <div className="group relative ">
              <Link to={"/"} className="hover:text-blue-400">
                <h1>NOVOSTI</h1>
              </Link>
            </div>
            <div className="group relative">
              <div className="flex hover:text-blue-400 cursor-pointer">
                <MdArrowDropDown className="pt-1" />
                <h>ZA UČENIKE</h>
              </div>
              <div className="absolute hidden group-hover:block bg-white max-w-[600px] w-max p-2  shadow-lg">
                <Link to="/za-ucenike/sekcije" className="hover:text-blue-400">
                  Sekcije
                </Link>
                <br />
                <Link
                  to="/za-ucenike/literarni-radovi"
                  className="hover:text-blue-400"
                >
                  Literarni radovi
                </Link>
                <br />
                <Link
                  to="/za-ucenike/likovni-radovi"
                  className="hover:text-blue-400"
                >
                  Likovni radovi
                </Link>
                <br />
                <Link
                  to="/za-ucenike/izvod-iz-pravila-gimnazije"
                  className="hover:text-blue-400"
                >
                  Izvod iz pravila gimnazije
                </Link>
                <br />
                <Link
                  to="/za-ucenike/tremini-vannastavnih-aktivnosti"
                  className="hover:text-blue-400"
                >
                  Termini vannastavnih aktivnosti
                </Link>
                <br />
                <Link
                  to="/za-ucenike/uputstvo-za-izradu-maturskih-radova"
                  className="hover:text-blue-400"
                >
                  Uputstvo za izradu maturskih radova
                </Link>
              </div>
            </div>

            <div className="group relative">
              <div className="flex hover:text-blue-400 cursor-pointer">
                <MdArrowDropDown className="pt-1" />
                <h>ZA RODITELJE</h>
              </div>

              <div className="absolute hidden group-hover:block bg-white max-w-[600px] w-max p-2 shadow-lg">
                <Link
                  to="/za-roditelje/vijece-roditelja"
                  className="hover:text-blue-400"
                >
                  Vijeće roditelja
                </Link>
                <br />
                <Link
                  to="/za-roditelje/izvod-iz-pravila-gimnazije"
                  className="hover:text-blue-400"
                >
                  Izvod iz pravila gimnazije
                </Link>
                <br />
                <Link
                  to="/za-roditelje/termini-individualnih-konsultacija"
                  className="hover:text-blue-400"
                >
                  Termini individualnih konsultacija
                </Link>
                <br />
              </div>
            </div>

            <div className="group relative">
              <div className="flex hover:text-blue-400 cursor-pointer">
                <MdArrowDropDown className="pt-1" />
                <h1>IZBORNA PODRUČJA</h1>
              </div>

              <div className="absolute hidden group-hover:block bg-white max-w-[600px] w-max p-2 shadow-lg">
                <Link to="/podrucja/jezicko" className="hover:text-blue-400">
                  Jezičko izborno područje
                </Link>
                <br />
                <Link to="/podrucja/prirodno" className="hover:text-blue-400">
                  Prirodno izborno područje
                </Link>
                <br />
                <Link to="/podrucja/drustveno" className="hover:text-blue-400">
                  Društveno izborno područje
                </Link>
                <br />
                <Link
                  to="/podrucja/matematicko-informaticko"
                  className="hover:text-blue-400"
                >
                  Matematičko-informatičko izborno područje
                </Link>
                <br />
                <Link
                  to="/podrucja/informaciono-komunikaciono"
                  className="hover:text-blue-400"
                >
                  Informaciono-komunikaciono izborno područje
                </Link>
                <br />
              </div>
            </div>

            <div className="group relative">
              <div className="flex hover:text-blue-400 cursor-pointer">
                <MdArrowDropDown className="pt-1" />
                <h1>UPOSLENICI</h1>
              </div>

              <div className="absolute hidden group-hover:block bg-white p-2 max-w-[600px] w-max shadow-lg">
                <Link to="/uposlenici/uprava" className="hover:text-blue-400">
                  Uprava
                </Link>
                <br />
                <Link
                  to="/uposlenici/profesori"
                  className="hover:text-blue-400"
                >
                  Profesori
                </Link>
                <br />
                <Link
                  to="/uposlenici/administrativno-osoblje"
                  className="hover:text-blue-400"
                >
                  Administrativno osoblje
                </Link>
                <br />
                <Link
                  to="/uposlenici/pomocno-tehnicko-osoblje"
                  className="hover:text-blue-400"
                >
                  Pomoćno-tehničko osoblje
                </Link>
              </div>
            </div>
            <div className="group relative">
              <div className="flex hover:text-blue-400 cursor-pointer">
                <MdArrowDropDown className="pt-1" />
                <h1>O ŠKOLI</h1>
              </div>

              <div className="absolute hidden group-hover:block bg-white p-2 max-w-[600px] w-max shadow-lg">
                <Link
                  to="/o-skoli/rijec-direktora"
                  className="hover:text-blue-400"
                >
                  Riječ direktora
                </Link>
                <br />
                <Link to="/o-skoli/historijat" className="hover:text-blue-400">
                  Historijat
                </Link>
                <br />
                <Link to="/o-skoli/maturanti" className="hover:text-blue-400">
                  Maturanti
                </Link>
                <br />
                <Link
                  to="/o-skoli/ucenici-generacije"
                  className="hover:text-blue-400"
                >
                  Učenici generacije
                </Link>
                <br />
                <Link
                  to="/o-skoli/nastavni-kalendar"
                  className="hover:text-blue-400"
                >
                  Nastavni kalendar
                </Link>
                <br />
                <Link to="/o-skoli/kontakt" className="hover:text-blue-400">
                  Kontakt
                </Link>
                <br />
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex justify-evenly text-xs pt-2 pb-3 border-b-[1px]">
            <div
              className="flex items-center align-middle text-2xl relative cursor-pointer"
              onClick={toggleBurgerMenu}
            >
              <CiMenuBurger style={{ color: "brown" }} />
            </div>

            <div className="pt-5 pb-3 pl-3 pr-3 text-center flex justify-center items-center align-middle">
              <img src={logoOpcine} className="w-auto h-auto sm:w-[25px]" />
            </div>

            <div className="block">
              <div className="pt-5 pb-3 flex align-middle">
                <div className="pt-2 pr-2 ">
                  <FaPhoneAlt className="text-blue-500 text-sm" />
                </div>
                <div className="whitespace-nowrap">
                  <span className="font-bold ">Telefon: </span> <br />
                  <span>032 456 241</span>
                </div>
              </div>

              <div className="pt-5 pb-3 flex align-middle">
                <div className="pt-2 pr-2">
                  <IoIosMail className="text-orange-500 text-base md:text-lg" />
                </div>
                <div className="whitespace-nowrap">
                  <span className="font-bold">Mail: </span> <br />
                  <span>gimnazijakakanj@bih.net.ba</span>
                </div>
              </div>
            </div>

            <div>
              <BurgerMenu isOpen={isBurgerMenu} onClose={toggleBurgerMenu} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default NavBar;
