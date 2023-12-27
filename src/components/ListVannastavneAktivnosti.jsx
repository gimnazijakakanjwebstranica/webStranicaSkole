import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import { MdFormatListNumbered } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import ImageModal from "./ImageModal";

const ListVannastavneAktivnosti = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false); // State to manage modal visibility
  const [aktivnostiIdToDelete, setAktivnostieIdToDelete] = useState(null); // Store sekcije ID to delete
  const [showModalImage, setShowModalImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModalImage = (imageUrl) => {
    setSelectedImage(imageUrl);
    setShowModalImage(true);
  };

  const closeModal = () => {
    setShowModalImage(false);
  };

  const showModalToDelete = (id) => {
    setShowModal(true);
    setAktivnostieIdToDelete(id);
  };

  const hideModal = () => {
    setShowModal(false);
    setAktivnostieIdToDelete(null);
  };

  const confirmDelete = () => {
    if (aktivnostiIdToDelete) {
      deleteAktivnost(aktivnostiIdToDelete);
    }
  };

  const deleteAktivnost = async (id) => {
    setLoading(true);
    try {
      await axios.delete(
        `http://localhost:5555/za-ucenike/tremini-vannastavnih-aktivnosti/${id}`
      );
      setLoading(false);
      window.location.reload();
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/za-ucenike/termini-vannastavnih-aktivnosti")
      .then((response) => {
        setData(response.data.data.reverse());
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
              Da li ste sigurni da želite obrisati sliku/slike?
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
              <th className="border rounded-md p-1 border-slate-600 ">Slika</th>
              <th className="border rounded-md p-1 border-slate-600 ">
                Operacije
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((image, index) => {
              return (
                <tr key={image._id} className="h-8">
                  <td className="border border-slate-700 rounded-md text-center">
                    <p className="p-1">{index + 1}</p>
                  </td>

                  <td className="border border-slate-700 rounded-md text-center">
                    {image.images.map((imageUrl, i) => (
                      <div key={i}>
                        <img
                          src={imageUrl}
                          onClick={() => openModalImage(imageUrl)}
                          className="h-16 p-[3px] cursor-pointer"
                        />
                        {showModalImage && (
                          <ImageModal
                            imageUrl={selectedImage}
                            onClose={closeModal}
                          />
                        )}
                      </div>
                    ))}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    <div className="flex justify-center gap-4">
                      <button onClick={() => showModalToDelete(image._id)}>
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

export default ListVannastavneAktivnosti;
