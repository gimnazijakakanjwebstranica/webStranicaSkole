import axios from "axios";
import ImageModal from "../components/ImageModal";
import Spinner from "../components/Spinner";
import { BACKEND_URL } from "../../backend/config";
import { useEffect, useState } from "react";

import SectionWrapper from "../hoc/SectionWrapper";

const TerminiVannastavnihAktivnostiWrapper = () => {

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
     .get(`${BACKEND_URL}/za-ucenike/termini-vannastavnih-aktivnosti`)
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
                    <ImageModal imageUrl={selectedImage} onClose={closeModal} />
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SectionWrapper(TerminiVannastavnihAktivnostiWrapper);
