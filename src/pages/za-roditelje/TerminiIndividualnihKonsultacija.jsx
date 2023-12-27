import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import ImageModal from "../../components/ImageModal";
import Spinner from "../../components/Spinner";

const TerminiIndividualnihKonsultacija = () => {
const [data, setData] = useState([]);
const [loading, setLoading] = useState(false);
const [showModal, setShowModal] = useState(false);
const [selectedImage, setSelectedImage] = useState("");

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
    .get(
      "http://localhost:5555/za-roditelje/termini-individualnih-konsultacija"
    )
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
      <NavBar />
      <div>
        <h1 className="text-4xl font-bold mb-4 text-center pt-3">
          Termini individualnih konsultacija
        </h1>
        {loading ? (
          <Spinner />
        ) : (
          <div className="font-link flex-block justify-center">
            {data.map((item, index) => (
              <div key={index}>
                {item.images.map((imageUrl, i) => (
                  <div key={i} className="text-center">
                    <img
                      src={imageUrl}
                      onClick={() => openModal(imageUrl)}
                      className="max-w-sm cursor-pointer mx-auto m-3"
                    />
                    {showModal && (
                      <ImageModal
                        imageUrl={selectedImage}
                        onClose={closeModal}
                      />
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default TerminiIndividualnihKonsultacija;
