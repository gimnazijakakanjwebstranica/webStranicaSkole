import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { FaImages } from "react-icons/fa";
import axios from "axios";
import Spinner from "./Spinner";
import { BACKEND_URL } from "../../backend/config";

const CreateArticleForm = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      setLoading(true);
  
      // Convert image files to Base64 strings
      const imagesBase64 = await Promise.all(
        images.map(async (image) => {
          const base64Data = await readFileAsBase64(image.file);
          return {
            type: image.file.type,
            data: base64Data,
          };
        })
      );
  
      // Create the data object
      const data = {
        title,
        date,
        body: content,
        images: imagesBase64,
      };

      // Send the request
      await axios.post(`${BACKEND_URL}/novosti`, data);
  
      alert("Uspjesno");
      setLoading(false);
      setTitle("");
      setDate("");
      setContent("");
      setImages([]);
    } catch (error) {
      alert(error.message);
      setLoading(false);
    }
  };
  
  const readFileAsBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };


  const handleDrop = (acceptedFiles) => {
    const updatedMediaFiles = acceptedFiles.map((file) => ({
      file,
      preview: URL.createObjectURL(file), // For preview purposes
      type: file.type.startsWith('image') ? 'image' : 'video', // Determine the type of file
    }));
    setImages((prevMediaFiles) => [...prevMediaFiles, ...updatedMediaFiles]);
  };

  const handleRemoveImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
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
            <label className="block mb-1 font-medium">Slike/Video:</label>
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
                  {images.map((image, index) => (
                    <div key={index} className="relative">
                      <img
                        src={image.preview}
                        alt={`Uploaded ${index}`}
                        className="w-full h-auto rounded-md"
                      />
                      <button
                        type="button"
                        onClick={() => handleRemoveImage(index)}
                        className="bg-red-500 text-white font-bold py-1 px-2 rounded-md mt-2 absolute top-0 right-2"
                      >
                        X
                      </button>
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
