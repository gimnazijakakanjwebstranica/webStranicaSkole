import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import { MdArrowDropDown } from "react-icons/md";

const BurgerMenu = ({ isOpen, onClose }) => {
    
    const handleBackgroundClick = (e) => {
      if (e.target.classList.contains("bg-opacity-50")) {
        onClose();
      }
    };
  if (!isOpen) return null

    return (
      <div
        onClick={handleBackgroundClick}
        className="fixed top-0 left-0 w-full select-none h-full flex justify-center items-center bg-black bg-opacity-50 z-2"
      >
        <div className="bg-white p-4 pt-3 rounded shadow-lg">
          <div className="w-full flex justify-end text-2xl">
            <button onClick={onClose}>
              <IoCloseSharp style={{ color: "red" }} />
            </button>
          </div>

          <div className="block p-10 pt-2 roudnded text-lg">
            <div className="group relative">
              <Link to={"/"} className="hover:text-blue-400">
                <h1>NOVOSTI</h1>
              </Link>
            </div>
            <div className="group relative">
              <div className="flex hover:text-blue-400 cursor-pointer">
                <MdArrowDropDown className="pt-1" />
                <h>ZA UČENIKE</h>
              </div>
              <div className="z-10 text-sm absolute hidden group-hover:block bg-white max-w-[600px] w-max p-2 shadow-lg">
                <Link to="/za-ucenike/sekcije" className="hover:text-blue-400 ">
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
                  to="/za-ucenike/izvod-iz-pravila-gimnazije"
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

              <div className="z-10 absolute text-sm hidden group-hover:block bg-white max-w-[600px] w-max p-2 shadow-lg">
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

              <div className="z-10 absolute text-sm hidden group-hover:block bg-white max-w-[600px] w-max p-2 shadow-lg">
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

              <div className="z-10 absolute text-sm hidden group-hover:block bg-white p-2 max-w-[600px] w-max shadow-lg">
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

              <div className="z-10 absolute text-sm hidden group-hover:block bg-white p-2 max-w-[600px] w-max shadow-lg">
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
        </div>
      </div>
    );
};

export default BurgerMenu;