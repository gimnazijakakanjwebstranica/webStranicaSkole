import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import TerminiVannastavnihAktivnostiWrapper from "../../components/TerminiVannastavnihAktivnostiWrapper";

const TerminiVannastavnihAktivnosti = () => {
  return (
    <div>
      <NavBar />
      <div>
        <h1 className="text-4xl font-bold mb-4 text-center pt-3">
          Termini vannastavnih aktivnosti
        </h1>
        <TerminiVannastavnihAktivnostiWrapper />
      </div>
      <Footer />
    </div>
  );
};

export default TerminiVannastavnihAktivnosti;
