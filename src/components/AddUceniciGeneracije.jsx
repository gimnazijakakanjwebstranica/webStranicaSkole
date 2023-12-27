import axios from "axios";
import Spinner from "./Spinner";
import { useState } from "react";

const AddProfessor = () => {
  const [name, setName] = useState("");
  const [last_name, setLast_Name] = useState("");
  const [year, setYear] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
        name: name,
        last_name: last_name,
        year:year
    };

    axios
      .post("http://localhost:5555/o-skoli/ucenici-generacije", data)
      .then(() => {
        console.log("Uspjesno");
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
      });

    setName("");
    setLast_Name("");
    setYear("");
    window.location.reload();
  };

  return (
    <div className="font-link max-w-md min-w-[350px] p-6 bg-white rounded-md shadow-md">
      <h2 className="text-xl mb-4 font-semibold">Dodaj novog učenika generacije</h2>
      {loading ? (
        <Spinner />
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Ime:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Unesi ime"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Prezime:</label>
            <input
              type="text"
              value={last_name}
              onChange={(e) => setLast_Name(e.target.value)}
              placeholder="Unesi prezime"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">
              Godina završetka
            </label>
            <input
              type="text"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              placeholder="Unesi godinu završetka"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-md transition duration-300"
          >
            Dodaj učenika generacije
          </button>
        </form>
      )}
    </div>
  );
};

export default AddProfessor;
