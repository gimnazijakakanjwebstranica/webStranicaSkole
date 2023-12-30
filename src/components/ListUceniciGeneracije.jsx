import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import { MdFormatListNumbered } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const ListUceniciGeneracije = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [ucenikIdToDelete, setUcenikIdToDelete] = useState(null);

  const showModalToDelete = (id) => {
    setShowModal(true);
    setUcenikIdToDelete(id);
  };

  const hideModal = () => {
    setShowModal(false);
    setUcenikIdToDelete(null);
  };

  const confirmDelete = () => {
    if (ucenikIdToDelete) {
      deleteStudent(ucenikIdToDelete);
    }
  };

  const deleteStudent = async (id) => {
    setLoading(true);
    try {
      await axios.delete(
        `http://localhost:5555/o-skoli/ucenici-generacije/${id}`
      );
      setLoading(false);
      window.location.reload(false);
    } catch (err) {
      setLoading(false);
      alert(err);
    }
  };

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
      {showModal && (
        <div className="font-link fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-4 rounded-md">
            <p className="mb-4">
              Da li ste sigurni da želite obrisati učenika?
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
              <th className="border rounded-md p-1 border-slate-600 ">Ime</th>
              <th className="border rounded-md p-1 border-slate-600  ">
                Prezime
              </th>
              <th className="border rounded-md p-1 border-slate-600  ">
                Godina završetka
              </th>
              <th className="border rounded-md p-1 border-slate-600 ">
                Operacije
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((student, index) => {
              return (
                <tr key={student._id} className="h-8">
                  <td className="border border-slate-700 rounded-md text-center">
                    <p className="p-1">{index + 1}</p>
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    <p className="p-1">{student.name}</p>
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    <p className="p-1">{student.last_name}</p>
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    <p className="p-1">{student.year}</p>
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    <div className="flex justify-center gap-4">
                      <button onClick={() => showModalToDelete(student._id)}>
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

export default ListUceniciGeneracije;