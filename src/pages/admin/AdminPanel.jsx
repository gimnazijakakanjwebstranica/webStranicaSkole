import React, { useEffect, useState } from "react";
import LoginForm from "../../components/LoginForm";
import AdminNavBar from "../../components/AdminNavBar";
import axios from "axios";
import Spinner from "../../components/Spinner";
import { MdFormatListNumbered } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const AdminPanel = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [adminIdToDelete, setAdminIdToDelete] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const showModalToDelete = (id) => {
    setShowModal(true);
    setAdminIdToDelete(id);
  };

  const hideModal = () => {
    setShowModal(false);
    setAdminIdToDelete(null);
  };

  const confirmDelete = () => {
    if (adminIdToDelete) {
      deleteAdmin(adminIdToDelete);
    }
  };

  const deleteAdmin = async (id) => {
    setLoading(true);
    try {
      await axios.delete(`http://localhost:5555/admin/${id}`);
      setLoading(false);
      const updatedData = data.filter((admin) => admin._id !== id);
      setData(updatedData);
      hideModal();
    } catch (err) {
      setLoading(false);
      alert(err);
    }
  };

  const handleLoginForm = () => {
    setIsLoggedIn(true);
  };
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/admin")
      .then((response) => {
        setData(response.data.data.reverse());
        setLoading(false);
      })
      .catch((err) => {
        alert(err);
        setLoading(false);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      username: username,
      password: password,
    };
    axios
      .post("http://localhost:5555/admin", data)
      .then(() => {
        alert("Uspjesno");
        setLoading(false);
        window.location.reload(false);
      })
      .catch((err) => {
        alert(err.message);
        setLoading(false);
      });
  };

  return (
    <div>
      <div className="font-link">
        {!isLoggedIn ? (
          <LoginForm handleLoginForm={handleLoginForm} />
        ) : (
          <div>
            <AdminNavBar />
            <div className="flex flex-wrap gap-5 justify-center">
              <div className="max-w-md min-w-[350px] p-6 bg-white rounded-md shadow-md">
                <h2 className="text-xl mb-4 font-semibold">
                  Kreiraj novog admina
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block mb-1 font-medium">
                      Korisničko ime:
                    </label>
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Unesi korisničko ime"
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 font-medium">Šifra</label>
                    <input
                      type="text"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Unesi šifru"
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-md transition duration-300"
                    >
                      Kreiraj admina
                    </button>
                  </div>
                </form>
              </div>
              <div>
                {showModal && (
                  <div className="font-link fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white p-4 rounded-md">
                      <p className="mb-4">
                        Da li ste sigurni da želite obrisati admina?
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
                          Ime
                        </th>
                        <th className="border rounded-md p-1 border-slate-600 ">
                          Operacije
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((admin, index) => {
                        return (
                          <tr key={admin._id} className="h-8">
                            <td className="border border-slate-700 rounded-md text-center">
                              <p className="p-1">{data.length - index}</p>
                            </td>
                            <td className="border border-slate-700 rounded-md text-center">
                              <p className="p-1">{admin.username}</p>
                            </td>

                            <td className="border border-slate-700 rounded-md text-center">
                              <div className="flex justify-center gap-4">
                                <button
                                  onClick={() => showModalToDelete(admin._id)}
                                >
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
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
