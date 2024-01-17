import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import { MdFormatListNumbered } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BACKEND_URL } from "../../backend/config";

const ListArticle = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false); // State to manage modal visibility
  const [articleIdToDelete, setArticleIdToDelete] = useState(null); // Store article ID to delete

  const showModalToDelete = (id) => {
    setShowModal(true);
    setArticleIdToDelete(id);
  };

  const hideModal = () => {
    setShowModal(false);
    setArticleIdToDelete(null);
  };

  const confirmDelete = () => {
    if (articleIdToDelete) {
      deleteArticle(articleIdToDelete);
    }
  };

  const deleteArticle = async (id) => {
    setLoading(true);
    try {
      await axios.delete(`${BACKEND_URL}/novosti/${id}`);
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
      .get(`${BACKEND_URL}/novosti`)
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
            <p className="mb-4">Da li ste sigurni da želite obrisati članak?</p>
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
                Naslov
              </th>
              <th className="border rounded-md p-1 border-slate-600  ">
                Datum
              </th>
              <th className="border rounded-md p-1 border-slate-600  ">Link</th>
              <th className="border rounded-md p-1 border-slate-600 ">
                Operacije
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((article, index) => {
              return (
                <tr key={article._id} className="h-8">
                  <td className="border border-slate-700 rounded-md text-center">
                    <p className="p-1">{data.length - index}</p>
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    <p className="p-1">{article.title}</p>
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    <p className="p-1">{article.date}</p>
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    <p className="p-1 flex justify-center">
                      <Link to={`/novosti/${article._id}`}>
                        <FaLink />
                      </Link>
                    </p>
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    <div className="flex justify-center gap-4">
                      <button onClick={() => showModalToDelete(article._id)}>
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

export default ListArticle;
