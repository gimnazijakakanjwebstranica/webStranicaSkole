import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import axios from "axios";

const Uprava = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/uposlenici/uprava")
      .then((res) => {
        const sortedData = res.data.data.slice().sort((a, b) => {
          return a.subjects.localeCompare(b.subjects);
        });

        setData(sortedData.reverse());
        setLoading(false);
      })
      .catch((err) => {
        alert(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <NavBar />
      <h1 className="text-4xl font-bold mb-4 text-center pt-3">Lista uprave</h1>
      {!loading && (
        <div className="container mx-auto p-4">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">Ime i prezime</th>
                  <th className="py-2 px-4 border-b">Posao</th>
                </tr>
              </thead>
              <tbody>
                {data.map((employee, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4 border-b">{employee.full_name}</td>
                    <td className="py-2 px-4 border-b">{employee.job}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Uprava;
