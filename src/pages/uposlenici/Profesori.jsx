import React from 'react';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

const Profesori = () => {
  // Unapred definisani profesori
  const profesori = [
    { titula: 'Doc. Dr. Sc.', imePrezime: 'Tarik Baždalić', predmet: 'Matematika, Nacrtna geometrija, Informatika, Programiranje, Web dizajn, Sigurnost informacija' },
    { titula: 'Prof.', imePrezime: 'Senadina Ljubović Kovačević', predmet: 'Matematika, Nacrtna geometrija' },
    // Dodajte ostale profesore prema potrebi
  ];

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <NavBar />

      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Lista profesora</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Titula</th>
                <th className="py-2 px-4 border-b">Ime i prezime</th>
                <th className="py-2 px-4 border-b">Predmet koji predaje</th>
              </tr>
            </thead>
            <tbody>
              {profesori.map((profesor, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b">{profesor.titula}</td>
                  <td className="py-2 px-4 border-b">{profesor.imePrezime}</td>
                  <td className="py-2 px-4 border-b">{profesor.predmet}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Profesori;
