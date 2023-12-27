// NastavniKalendar.jsx
import React from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import documentPDF from "../../resources/documents/nastavni_kalendar.pdf";

const NastavniKalendar = () => {

  const handleDownload = () => {
    const pdfUrl = documentPDF

    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Nastavni_kalendar.pdf"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <NavBar />

      <div className="container mx-auto my-8 p-8 bg-white shadow-lg">
        <header className="bg-gray-600 text-white text-center py-4">
          <h1 className="text-2xl font-bold">Nastavni kalendar</h1>
        </header>
        <main className="mt-8 text-center">
          <p className="text-lg">
            Nastavni kalendar možete instalirati klikom na donji link:
          </p>
          <button
            onClick={handleDownload}
            className="bg-gray-600 text-white px-4 py-2 rounded mt-4 cursor-pointer"
          >
            Preuzmi nastavni kalendar
          </button>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default NastavniKalendar;
