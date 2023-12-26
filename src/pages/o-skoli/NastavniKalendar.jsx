// NastavniKalendar.jsx
import React from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

const NastavniKalendar = () => {
  const handleDownload = () => {
    // Simulirajte generisanje i preuzimanje dokumenta (ovo možete prilagoditi prema stvarnom scenariju)
    const fakeDocument = "Ovo je vaš nastavni kalendar.";
    const blob = new Blob([fakeDocument], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Nastavni kalendar.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <NavBar />

      <div className="container mx-auto my-8 p-8 bg-white shadow-lg">
        <header className="bg-gray-600 text-white text-center py-4">
          <h1 className="text-2xl font-bold">Nastavni Kalendar</h1>
        </header>
        <main className="mt-8 text-center">
          <p className="text-lg">
            Nastavni kalendar možete instalirati klikom na donji link:
          </p>
          <button
            onClick={handleDownload}
            className="bg-gray-600 text-white px-4 py-2 rounded mt-4 cursor-pointer"
          >
            Preuzmi Nastavni Kalendar
          </button>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default NastavniKalendar;
