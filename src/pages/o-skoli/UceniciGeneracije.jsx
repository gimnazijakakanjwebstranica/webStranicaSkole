// UceniciGeneracije.jsx
import React from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

const UceniciGeneracije = () => {
  // Pretdefinisani podaci o ucenicima generacije
  const ucenici = [
    { ime: "Elmir", prezime: "Kevilj", godinaZavrsetka: ["2022/2023"] },
    { ime: "Hana", prezime: "Šolbić", godinaZavrsetka: ["2021/2022"] },
    { ime: "Marija", prezime: "Grgić", godinaZavrsetka: ["2020/2021"] },
    { ime: "Ajša", prezime: "Trako", godinaZavrsetka: ["2019/2020"] },
    { ime: "Rajza", prezime: "Selimović", godinaZavrsetka: ["2018/2019"] },
    { ime: "Ismet", prezime: "Čosić", godinaZavrsetka: ["2017/2018"] },
    { ime: "Adnan", prezime: "Karzić", godinaZavrsetka: ["2016/2017"] },
    { ime: "Nedim", prezime: "Zaimović", godinaZavrsetka: ["2015/2016"] },
    { ime: "Dženita", prezime: "Škulj", godinaZavrsetka: ["2014/2015"] },
    { ime: "Fatima", prezime: "Mušija", godinaZavrsetka: ["2013/2014"] },
    { ime: "Merima", prezime: "Čišija", godinaZavrsetka: ["2012/2013"] },
    { ime: "Ilhana", prezime: "Čeliković", godinaZavrsetka: ["2011/2012"] },
    { ime: "Adha", prezime: "Hrusto", godinaZavrsetka: ["2010/2011"] },
    { ime: "Zerina", prezime: "Zahirović", godinaZavrsetka: ["2009/2010"] },
    { ime: "Larisa", prezime: "Zaimović", godinaZavrsetka: ["2008/2009"] },
    { ime: "Nejra", prezime: "Čišija", godinaZavrsetka: ["2007/2008"] },
    { ime: "Amina", prezime: "Šolbić", godinaZavrsetka: ["2006/2007"] },
    { ime: "Nejra", prezime: "Salkić", godinaZavrsetka: ["2005/2006"] },
    { ime: "Mirnes", prezime: "Hrustić", godinaZavrsetka: ["2004/2005"] },
    { ime: "Emina", prezime: "Šehić", godinaZavrsetka: ["2003/2004"] },
    { ime: "Mevludina", prezime: "Karzić", godinaZavrsetka: ["2002/2003"] },
    { ime: "Nevsad", prezime: "Škulj", godinaZavrsetka: ["2001/2002"] },
    { ime: "Merima", prezime: "Subašić", godinaZavrsetka: ["2000/2001"] },
    { ime: "Suada", prezime: "Hasanić", godinaZavrsetka: ["1999/2000"] },
    { ime: "Emina", prezime: "Ganić", godinaZavrsetka: ["1998/1999"] },
    { ime: "Aida", prezime: "Alomerović", godinaZavrsetka: ["1998/1997"] },
    { ime: "Mirna", prezime: "Maltar", godinaZavrsetka: ["1996/1997"] },
    { ime: "Nadina", prezime: "Zaimović", godinaZavrsetka: ["1995/1996"] },
    { ime: "Hermina", prezime: "Dragunić", godinaZavrsetka: ["1994/1995"] },
    { ime: "Bernad", prezime: "Bejlobrk", godinaZavrsetka: ["1993/1994"] },
    { ime: "Amira", prezime: "Hasagić", godinaZavrsetka: ["1992/1993"] },

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
              <tr className="bg-gray-200 text-center ">
                <th className="py-2 px-4 border-b">Ime</th>
                <th className="py-2 px-4 border-b">Prezime</th>
                <th className="py-2 px-4 border-b">Godina Zavrsekta</th>
              </tr>
            </thead>
            <tbody>
              {ucenici.map((ucenik, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                  <td className="py-2 px-4 border-b text-center">{ucenik.ime}</td>
                  <td className="py-2 px-4 border-b text-center">{ucenik.prezime}</td>
                  <td className="py-2 px-4 border-b text-center">{ucenik.godinaZavrsetka.join(", ")}</td>
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