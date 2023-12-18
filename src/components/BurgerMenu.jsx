import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import { MdArrowDropDown } from "react-icons/md";

const BurgerMenu = ({ isOpen, onClose }) => {
  const [openMenu, setOpenMenu] = useState(isOpen);

  useEffect(() => {
    setOpenMenu(isOpen);
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  const handleBackgroundClick = (e) => {
    if (e.target.classList.contains("bg-opacity-0")) {
      onClose();
    }
  };
  if (!isOpen) return null;

  return (
    <div
      onClick={handleBackgroundClick}
      className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-0 z-50 overflow-hidden transition-transform duration-300 transform ${
        openMenu ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="transform transition-all duration-300 fixed left-0 h-full bg-white w-[calc(100% / 3)] p-4 pt-3 rounded shadow-lg overflow-y-auto">
        <div className="flex justify-end text-2xl">
          <button onClick={onClose}>
            <IoCloseSharp style={{ color: "red" }} />
          </button>
        </div>

        <div className="block pl-3 roudnded text-lg">
          <div>
            <Link to={"/"} className="hover:text-blue-400">
              <h1>NOVOSTI</h1>
            </Link>
          </div>
          <div>
            <div className="flex cursor-pointer">
              <MdArrowDropDown className="pt-1" />
              <h>ZA UČENIKE</h>
            </div>
            <ul className="z-10 pl-4 text-sm bg-white pb-3">
              <li>
                <Link to="/za-ucenike/sekcije" className="hover:text-blue-400 ">
                  Sekcije
                </Link>
              </li>

              <li>
                <Link
                  to="/za-ucenike/izvod-iz-pravila-gimnazije"
                  className="hover:text-blue-400"
                >
                  Izvod iz pravila gimnazije
                </Link>
              </li>
              <li>
                <Link
                  to="/za-ucenike/tremini-vannastavnih-aktivnosti"
                  className="hover:text-blue-400"
                >
                  Termini vannastavnih aktivnosti
                </Link>
              </li>
              <li>
                <Link
                  to="/za-ucenike/izvod-iz-pravila-gimnazije"
                  className="hover:text-blue-400"
                >
                  Uputstvo za izradu maturskih radova
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="flex cursor-pointer">
              <MdArrowDropDown className="pt-1" />
              <h>ZA RODITELJE</h>
            </div>

            <ul className="z-10 text-sm bg-white pl-4 pb-3">
              <li>
                <Link
                  to="/za-roditelje/vijece-roditelja"
                  className="hover:text-blue-400"
                >
                  Vijeće roditelja
                </Link>
              </li>
              <li>
                <Link
                  to="/za-roditelje/izvod-iz-pravila-gimnazije"
                  className="hover:text-blue-400"
                >
                  Izvod iz pravila gimnazije
                </Link>
              </li>
              <li>
                <Link
                  to="/za-roditelje/termini-individualnih-konsultacija"
                  className="hover:text-blue-400"
                >
                  Termini individualnih konsultacija
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="flex cursor-pointer">
              <MdArrowDropDown className="pt-1" />
              <h1>IZBORNA PODRUČJA</h1>
            </div>

            <ul className="z-10  text-sm  bg-white pl-4 pb-3">
              <li>
                <Link to="/podrucja/jezicko" className="hover:text-blue-400">
                  Jezičko izborno područje
                </Link>
              </li>
              <li>
                <Link to="/podrucja/prirodno" className="hover:text-blue-400">
                  Prirodno izborno područje
                </Link>
              </li>
              <li>
                <Link to="/podrucja/drustveno" className="hover:text-blue-400">
                  Društveno izborno područje
                </Link>
              </li>
              <li>
                <Link
                  to="/podrucja/matematicko-informaticko"
                  className="hover:text-blue-400"
                >
                  Matematičko-informatičko izborno područje
                </Link>
              </li>
              <li>
                <Link
                  to="/podrucja/informaciono-komunikaciono"
                  className="hover:text-blue-400 whitespace-nowrap"
                >
                  Informaciono-komunikaciono izborno područje
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="flex cursor-pointer">
              <MdArrowDropDown className="pt-1" />
              <h1>UPOSLENICI</h1>
            </div>

            <ul className="z-10 text-sm  bg-white pl-4 pb-3">
              <li>
                <Link to="/uposlenici/uprava" className="hover:text-blue-400">
                  Uprava
                </Link>
              </li>
              <li>
                <Link
                  to="/uposlenici/profesori"
                  className="hover:text-blue-400"
                >
                  Profesori
                </Link>
              </li>
              <li>
                <Link
                  to="/uposlenici/administrativno-osoblje"
                  className="hover:text-blue-400"
                >
                  Administrativno osoblje
                </Link>
              </li>
              <li>
                <Link
                  to="/uposlenici/pomocno-tehnicko-osoblje"
                  className="hover:text-blue-400"
                >
                  Pomoćno-tehničko osoblje
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="flex cursor-pointer">
              <MdArrowDropDown className="pt-1" />
              <h1>O ŠKOLI</h1>
            </div>

            <ul className="z-10 text-sm bg-white pl-4 pb-3">
              <li>
                <Link
                  to="/o-skoli/rijec-direktora"
                  className="hover:text-blue-400"
                >
                  Riječ direktora
                </Link>
              </li>
              <li>
                <Link to="/o-skoli/historijat" className="hover:text-blue-400">
                  Historijat
                </Link>
              </li>
              <li>
                <Link to="/o-skoli/maturanti" className="hover:text-blue-400">
                  Maturanti
                </Link>
              </li>
              <li>
                <Link
                  to="/o-skoli/ucenici-generacije"
                  className="hover:text-blue-400"
                >
                  Učenici generacije
                </Link>
              </li>
              <li>
                <Link
                  to="/o-skoli/nastavni-kalendar"
                  className="hover:text-blue-400"
                >
                  Nastavni kalendar
                </Link>
              </li>
              <li>
                <Link to="/o-skoli/kontakt" className="hover:text-blue-400">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
