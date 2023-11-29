import React, { useState } from "react";
import Article from "./Article";
import { v4 as uuidv4 } from "uuid";

const CreateArticleForm = () => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const uniqueId = uuidv4();
    setId(uniqueId);

    setId("");
    setTitle("");
    setContent("");
    setSelectedImage(null);
  };

  return (
    <div>
      <h2>Create Article</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter article title"
          />
        </div>
        <div>
          <label>Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter article content"
          ></textarea>
        </div>
        <div>
          <label>Choose Image:</label>
          <input type="file" onChange={handleImageChange} accept="image/*" />
        </div>

        <button type="submit">Create Article</button>
      </form>
    </div>
  );
};

export default CreateArticleForm;
