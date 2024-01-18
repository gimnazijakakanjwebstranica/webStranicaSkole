import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import documentPDFFirst from "../../resources/documents/PRAVILA_prečišćeni_tekst.pdf";
import documentPDFSecond from "../../resources/documents/pravilnik_o_kućnom_redu_s_etičkim_kodeksom.pdf";

const IzvodIzPravilaGimnazije = () => {

  const handleDownloadFirst = () => {
    const pdfUrl = documentPDFFirst;

    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "PRAVILA_prečišćeni_tekst.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const handleDownloadSecond = () => {
    const pdfUrl = documentPDFSecond;

    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "pravilnik_o_kućnom_redu_s_etičkim_kodeksom.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div>
      <NavBar />
      <div className="container mx-auto my-8 p-8 bg-white shadow-lg">
        <header className="bg-gray-600 text-white text-center py-4">
          <h1 className="text-2xl font-bold">Izvod iz pravila gimnazije</h1>
        </header>
        <main className="mt-8 text-center">
          <p className="text-lg">
            Izvod iz pravila gimnazije možete preuzeti klikom na link ispod:
          </p>
          <button
            onClick={handleDownloadFirst}
            className="bg-gray-600 text-white px-4 py-2 rounded mt-4 cursor-pointer"
          >
            Preuzmi PRAVILA - prečišćeni tekst
          </button> <br />
          <button
            onClick={handleDownloadSecond}
            className="bg-gray-600 text-white px-4 py-2 rounded mt-4 cursor-pointer"
          >
            Preuzmi Pravilnik o kućnom redu s etičkim kodeksom
          </button>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default IzvodIzPravilaGimnazije;
