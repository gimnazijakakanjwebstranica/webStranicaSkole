import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import documentPDF from "../../resources/documents/uputstvo_za_izradu_maturskog_rada.pdf";

const UputstvoZaMaturskeRadove = () => {
  
  const handleDownload = () => {
    const pdfUrl = documentPDF;

    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "uputstvo_za_izradu_maturskog_rada.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <NavBar />
      <div className="container mx-auto my-8 p-8 bg-white shadow-lg">
        <header className="bg-gray-600 text-white text-center py-4">
          <h1 className="text-2xl font-bold">
            Uputstvo za izradu maturskih radova
          </h1>
        </header>
        <main className="mt-8 text-center">
          <p className="text-lg">
            Uputstvo za izradu maturskih radova možete preuzeti klikom na link
            ispod:
          </p>
          <button
            onClick={handleDownload}
            className="bg-gray-600 text-white px-4 py-2 rounded mt-4 cursor-pointer"
          >
            Preuzmi uputstvo za izradu maturskih radova
          </button>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default UputstvoZaMaturskeRadove;
