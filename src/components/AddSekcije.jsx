import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { FaImages } from "react-icons/fa";
import axios from "axios";
import Spinner from "./Spinner";
import { Buffer } from "buffer";
import { BACKEND_URL } from "../../backend/config";
Buffer.from("anything", "base64");

const AddSekcije = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      images: images,
    };

    axios
      .post(`${BACKEND_URL}/za-ucenike/sekcije`, data)
      .then(() => {
        alert("Uspjesno");
        setLoading(false);
      })
      .catch((err) => {
        alert(err.message);
        setLoading(false);
      });

    setImages([]);
    document.location.reload();
  };

  const handleDrop = (acceptedFiles) => {
    acceptedFiles.map((file, index) => {
      const reader = new FileReader();

      reader.onload = () => {
        setImages((prevImages) => {
          const updatedImages = [...prevImages];
          updatedImages[index] = reader.result;
          return updatedImages;
        });
      };

      reader.readAsDataURL(file);
    });
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop: handleDrop });
  return (
    <div className="font-link max-w-md min-w-[350px] p-6 bg-white rounded-md shadow-md">
      <h2 className="text-xl mb-4 font-semibold">Dodaj sekcije</h2>
      {loading ? (
        <Spinner />
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div {...getRootProps()} className="flex items-center space-x-2">
            <label className="block mb-1 font-medium">Slike:</label>
            <div className="cursor-pointer border border-gray-300 rounded-md p-2 flex items-center">
              <input {...getInputProps()} />
              <FaImages className="mr-2" />
              <span>Ubaci slike</span>
            </div>
          </div>
          <div>
            {images.length > 0 && (
              <div>
                <h3 className="font-medium mt-4 mb-2">Ubačene slike:</h3>
                <div className="grid grid-cols-2 gap-4">
                  {images.map((base64String, index) => (
                    <img
                      key={index}
                      src={base64String}
                      alt={`Uploaded ${index}`}
                      className="w-full h-auto rounded-md"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-md transition duration-300"
          >
            Dodaj sekciju
          </button>
        </form>
      )}
    </div>
  );
};

export default AddSekcije;
