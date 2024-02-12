import { useEffect, useState } from "react";
import axios from "axios";
import ImageModal from "../components/ImageModal";
import { BACKEND_URL } from "../../backend/config";
import Spinner from "./Spinner";


const SekcijeWrapper = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${BACKEND_URL}/za-ucenike/sekcije`)
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
    <div className="font-link flex-block justify-center">
      {loading ? (
        <Spinner />
      ) : (
        data.map((item, index) => (
          <div key={index}>
            {item.images.map((imageUrl, i) => (
              <div key={i} className="text-center">
                <img
                  src={imageUrl}
                  onClick={() => openModal(imageUrl)}
                  className="max-w-sm cursor-pointer mx-auto m-3"
                />
                {showModal && (
                  <ImageModal imageUrl={selectedImage} onClose={closeModal} />
                )}
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
};

export default SekcijeWrapper
