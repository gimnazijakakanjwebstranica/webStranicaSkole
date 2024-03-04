import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { FaImages } from "react-icons/fa";
import axios from "axios";
import Spinner from "./Spinner";
import { Buffer } from "buffer";
import { BACKEND_URL } from "../../backend/config";
Buffer.from("anything", "base64");

const CreateArticleForm = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const convertToDDMMYYYY = (inputDate) => {
    const date = new Date(inputDate);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      title: title,
      date: convertToDDMMYYYY(date),
      body: content,
      images: images,
    };

    axios
      .post(`${BACKEND_URL}/novosti`, data)
      .then(() => {
        alert("Uspjesno");
        setLoading(false);
      })
      .catch((err) => {
        alert(err.message);
        setLoading(false);
      });

    setTitle("");
    setDate("");
    setContent("");
    setImages([]);
  };

  const handleDrop = (acceptedFiles) => {
    acceptedFiles.map((file, index) => {
      const reader = new FileReader();
  
      reader.onload = () => {
        if (file.type.startsWith('image')) {
          setImages((prevImages) => [
            ...prevImages,
            { type: 'image', data: reader.result }
          ]);
        } else if (file.type.startsWith('video')) {
         
          setImages((prevImages) => [
            ...prevImages,
            {
              type: 'video',
              data: reader.result,
              metadata: { filename: file.name, size: file.size, type: file.type },
              reference: 'path/to/video/file' 
            }
          ]);
        }
      };
  
      reader.readAsDataURL(file);
    });
  };
  
  const { getRootProps, getInputProps } = useDropzone({ onDrop: handleDrop });

  return (
    <div className="font-link max-w-md min-w-[350px] p-6 bg-white rounded-md shadow-md">
      <h2 className="text-xl mb-4 font-semibold">Kreiraj novi članak</h2>
      {loading ? (
        <Spinner />
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Naslov:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Unesi naslov"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Datum:</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              placeholder="Unesi datum"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Tekst:</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Unesi tekst"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              rows="4"
            ></textarea>
          </div>
          <div {...getRootProps()} className="flex items-center space-x-2">
            <label className="block mb-1 font-medium">Slike:</label>
            <div className="cursor-pointer border border-gray-300 rounded-md p-2 flex items-center">
              <input {...getInputProps()} />
              <FaImages className="mr-2" />
              <span>Ubaci slike/video</span>
            </div>
          </div>
          <div>
          {images.length > 0 && (
  <div>
    <h3 className="font-medium mt-4 mb-2">Ubačene slike/video:</h3>
    <div className="grid grid-cols-2 gap-4">
      {images.map((media, index) => (
        <div key={index}>
          {media.type === 'image' ? (
            <img
              src={media.data}
              alt={`Uploaded ${index}`}
              className="w-full h-auto rounded-md"
            />
          ) : (
            <video controls className="w-full h-auto rounded-md">
              <source src={media.data} />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      ))}
    </div>
  </div>
)}

          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-md transition duration-300"
          >
            Kreiraj članak
          </button>
        </form>
      )}
    </div>
  );
};

export default CreateArticleForm;
