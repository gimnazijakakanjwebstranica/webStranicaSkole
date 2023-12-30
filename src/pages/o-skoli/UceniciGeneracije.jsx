// UceniciGeneracije.jsx
import { useState, useEffect } from "react";
import Spinner from "../../components/Spinner";
import axios from "axios";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

const UceniciGeneracije = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/o-skoli/ucenici-generacije")
      .then((response) => {
        setData(response.data.data.reverse());
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        alert(err.message);
      });
  }, []);

  return (
    <div>
      <NavBar />

      <div className="container mx-auto my-8 p-8 bg-white shadow-lg">
        <header className="bg-gray-600 text-white text-center py-4">
          <h1 className="text-2xl font-bold">Učenici generacije</h1>
        </header>
        {loading ? (
          <Spinner />
        ) : (
          <main className="mt-8">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="py-2 px-4 border-b">Ime</th>
                  <th className="py-2 px-4 border-b">Prezime</th>
                  <th className="py-2 px-4 border-b">Godina Završetka</th>
                </tr>
              </thead>
              <tbody>
                {data.map((ucenik, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-gray-100" : ""}
                  >
                    <td className="py-2 px-4 border-b">{ucenik.name}</td>
                    <td className="py-2 px-4 border-b">{ucenik.last_name}</td>
                    <td className="py-2 px-4 border-b">{ucenik.year}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </main>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default UceniciGeneracije;
