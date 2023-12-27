import axios from "axios";
import Spinner from "./Spinner";
import { useState } from "react";

const AddProfessor = () => {
  const [full_name, setFull_name] = useState("");
  const [titles, setTitles] = useState("");
  const [subjects, setSubjects] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      titles: titles,
      full_name: full_name,
      subjects: subjects,
    };

    axios
      .post("http://localhost:5555/uposlenici/profesori", data)
      .then(() => {
        console.log("Uspjesno");
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
      });

    setFull_name("");
    setSubjects("");
    setTitles("");
    window.location.reload();
  };

  return (
    <div className="font-link max-w-md min-w-[350px] p-6 bg-white rounded-md shadow-md">
      <h2 className="text-xl mb-4 font-semibold">Dodaj novog profesora</h2>
      {loading ? (
        <Spinner />
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Ime i prezime:</label>
            <input
              type="text"
              value={full_name}
              onChange={(e) => setFull_name(e.target.value)}
              placeholder="Unesi ime i prezime"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Titula:</label>
            <input
              type="text"
              value={titles}
              onChange={(e) => setTitles(e.target.value)}
              placeholder="Unesi titule"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">
              Predmeti koje predaje:
            </label>
            <input
              type="text"
              value={subjects}
              onChange={(e) => setSubjects(e.target.value)}
              placeholder="Unesi predmete koje predaje"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-md transition duration-300"
          >
            Dodaj profesora
          </button>
        </form>
      )}
    </div>
  );
};

export default AddProfessor;
