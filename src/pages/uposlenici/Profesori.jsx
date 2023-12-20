import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

const Profesori = () => {
  const [profesori, setProfesori] = useState([]);
  const [ime, setIme] = useState("");
  const [prezime, setPrezime] = useState("");

  useEffect(() => {
    // Dobavljanje profesora s backenda
    fetchData();
  }, []); // Ispravljena zagrada

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/profesori");
      setProfesori(response.data);
    } catch (error) {
      console.error("Greška pri dobavljanju profesora", error);
    }
  };

  const dodajProfesora = async () => {
    try {
      await axios.post("/api/profesori", { ime, prezime });
      setIme("");
      setPrezime("");
      fetchData();
    } catch (error) {
      console.error("Greška pri dodavanju profesora", error);
    }
  };

  const obrisiProfesora = async (id) => {
    try {
      await axios.delete(`/api/profesori/${id}`);
      fetchData();
    } catch (error) {
      console.error("Greška pri brisanju profesora", error);
    }
  };

  return (
    <div>
      <NavBar />
      <div className="container mx-auto mt-8">
        <h2 className="text-2xl font-semibold mb-4">Profesori</h2>
        <div className="mb-4">
          <input
            type="text"
            className="w-1/4 p-2 border border-gray-300 mr-2 rounded-l"
            placeholder="Ime"
            value={ime}
            onChange={(e) => setIme(e.target.value)}
          />
          <input
            type="text"
            className="w-1/4 p-2 border border-gray-300 mr-2 rounded-l"
            placeholder="Prezime"
            value={prezime}
            onChange={(e) => setPrezime(e.target.value)}
          />
          <button
            className="w-1/4 bg-blue-500 text-white p-2 rounded-r"
            onClick={dodajProfesora}
          >
            Dodaj profesora
          </button>
        </div>

        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="border p-3">Ime</th>
              <th className="border p-3">Prezime</th>
              <th className="border p-3">Akcije</th>
            </tr>
          </thead>
          <tbody>
            {profesori.map((profesor) => (
              <tr key={profesor.id}>
                <td className="border p-3">{profesor.ime}</td>
                <td className="border p-3">{profesor.prezime}</td>
                <td className="border p-3">
                  <button
                    className="bg-red-500 text-white p-2 rounded"
                    onClick={() => obrisiProfesora(profesor.id)}
                  >
                    Obriši
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default Profesori;
