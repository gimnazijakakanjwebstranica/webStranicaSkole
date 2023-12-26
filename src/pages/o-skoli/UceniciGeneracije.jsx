// UceniciGeneracije.jsx
import React from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

const UceniciGeneracije = () => {
  // Pretdefinisani podaci o ucenicima generacije
  const ucenici = [
    { ime: "Elmir", prezime: "Kevilj", godinaZavrsetka: ["2022/2023"] },
    // Dodajte druge informacije o ucenicima prema potrebi
  ];

  return (
    <div>
      <NavBar />

      <div className="container mx-auto my-8 p-8 bg-white shadow-lg">
        <header className="bg-gray-600 text-white text-center py-4">
          <h1 className="text-2xl font-bold">Ucenici Generacije</h1>
        </header>
        <main className="mt-8">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-4 border-b">Ime</th>
                <th className="py-2 px-4 border-b">Prezime</th>
                <th className="py-2 px-4 border-b">Godina Zavrsekta</th>
              </tr>
            </thead>
            <tbody>
              {ucenici.map((ucenik, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                  <td className="py-2 px-4 border-b">{ucenik.ime}</td>
                  <td className="py-2 px-4 border-b">{ucenik.prezime}</td>
                  <td className="py-2 px-4 border-b">{ucenik.godinaZavrsetka.join(", ")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default UceniciGeneracije;
