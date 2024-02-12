import ABPetrolLogo from "../resources/logos/ABPetrolLogo.png";
import GradskaBibliotekaLogo from "../resources/logos/GradskaBibliotekaLogo.png";
import HeidelbergMaterialsLogo from "../resources/logos/HeidelbergMaterialsLogo.png";
import KSCLogo from "../resources/logos/KSCLogo.png";
import MojSanLogo from "../resources/logos/MojSanLogo.png";
import PlamaPurLogo from "../resources/logos/PlamaPurLogo.png";
import SMComercLogo from "../resources/logos/SMComercLogo.png";
import TrgospedLogo from "../resources/logos/TrgospedLogo.png";
import ZEDOLogo from "../resources/logos/ZEDOLogo.png";
import LogoOpcine from "../resources/photos/logoOpcine.png";

const sponzori1 = [
  ZEDOLogo,
  GradskaBibliotekaLogo,
  KSCLogo,
  MojSanLogo,
  LogoOpcine,
];
const sponzori2 = [
  SMComercLogo,
  ABPetrolLogo,
  HeidelbergMaterialsLogo,
  TrgospedLogo,
  PlamaPurLogo,
];
const SectionWrapper = (Component) =>
  function HOC() {
    return (
      <section className="block mb-5  lg:flex lg:justify-evenly">
        <div className="w-full lg:w-1/5 mt-5">
          <h1 className="text-center text-2xl font-semibold">Sponzori:</h1>
          <div className="mt-4 flex gap-2 flex-wrap justify-center lg:block ">
            {sponzori1.map((sponzor, index) => (
              <img src={sponzor} key={index} className="h-[75px] mx-auto" />
            ))}
          </div>
        </div>
        <Component />
        <div className="w-full lg:w-1/5 lg:mt-5 mb-5">
          <h1 className="text-center text-2xl font-semibold">Sponzori:</h1>
          <div className="mt-4 flex flex-wrap justify-center lg:block">
            {sponzori2.map((sponzor, index) => (
              <img
                src={sponzor}
                key={index}
                className="h-[60px] mb-1 mx-auto"
              />
            ))}
          </div>
        </div>
      </section>
    );
  };

export default SectionWrapper;
