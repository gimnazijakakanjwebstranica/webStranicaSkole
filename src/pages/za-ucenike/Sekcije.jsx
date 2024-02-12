import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import SekcijeWrapper from "../../components/SekcijeWrapper";

const Sekcije = () => {


  return (
    <div>
      <NavBar />
      <div>
        <h1 className="text-4xl font-bold mb-4 text-center pt-3">Sekcije</h1>
         <SekcijeWrapper />
      </div>
      <Footer />
    </div>
  );
};

export default Sekcije;
