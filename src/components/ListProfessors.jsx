import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import { MdFormatListNumbered } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const ListProfessors = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false); // State to manage modal visibility
  const [professorIdToDelete, setProfessorIdToDelete] = useState(null); // Store professor ID to delete

  const showModalToDelete = (id) => {
    setShowModal(true);
    setProfessorIdToDelete(id);
  };

  const hideModal = () => {
    setShowModal(false);
    setProfessorIdToDelete(null);
  };

  const confirmDelete = () => {
    if (professorIdToDelete) {
      deleteProfessor(professorIdToDelete);
    }
  };

  const deleteProfessor = async (id) => {
    setLoading(true);
    try {
      await axios.delete(`http://localhost:5555/uposlenici/profesori/${id}`);
      setLoading(false);
      window.location.reload(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/uposlenici/profesori")
      .then((response) => {
        const sortedData = response.data.data.slice().sort((a, b) => {
          return a.subjects.localeCompare(b.subjects);
        });
        setData(sortedData.reverse())
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message);
      });
  }, []);
  return (
    <div>
      {showModal && (
        <div className="font-link fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-4 rounded-md">
            <p className="mb-4">
              Da li ste sigurni da želite obrisati profesora?
            </p>
            <div className="flex justify-between">
              <button
                className="bg-blue-500 text-white rounded-md px-3 py-1"
                onClick={hideModal}
              >
                Poništi
              </button>
              <button
                onClick={confirmDelete}
                className="bg-red-500 text-white rounded-md px-3 py-1"
              >
                Obriši
              </button>
            </div>
          </div>
        </div>
      )}
      {loading ? (
        <Spinner />
      ) : (
        <table className="font-link border-separate border-spacing-2">
          <thead className="rounded">
            <tr>
              <th className="border rounded-md p-1  border-slate-600">
                <MdFormatListNumbered />
              </th>
              <th className="border rounded-md p-1 border-slate-600 ">
                Titula
              </th>
              <th className="border rounded-md p-1 border-slate-600  ">
                Ime i prezime
              </th>
              <th className="border rounded-md p-1 border-slate-600  ">
                Predmeti koje predaje
              </th>
              <th className="border rounded-md p-1 border-slate-600 ">
                Operacije
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((professor, index) => {
              return (
                <tr key={professor._id} className="h-8">
                  <td className="border border-slate-700 rounded-md text-center">
                    <p className="p-1">{index+1}</p>
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    <p className="p-1">{professor.titles}</p>
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    <p className="p-1">{professor.full_name}</p>
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    <p className="p-1">{professor.subjects}</p>
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    <div className="flex justify-center gap-4">
                      <button onClick={() => showModalToDelete(professor._id)}>
                        <MdDelete
                          className="cursor-pointer"
                          style={{ color: "red" }}
                        />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ListProfessors;
