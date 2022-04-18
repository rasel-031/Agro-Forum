import React, { useState, useRef } from "react";
import "./Write.scss";
import { BsPencilSquare } from "react-icons/bs";

const Write = () => {
  var [selectedImage, setSelectedImage] = useState(null);
  var [Validate, setValidate] = useState({ title: "", story: "" });
  const form = useRef(null);

  const imageSubmit = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedImage(event.target.files[0]);
    }
  };

  const removeSelectedImage = () => {
    setSelectedImage(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(form.current);
    console.log(data);

    fetch("http://localhost:5000/user/new-post", { method: "POST", body: data })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="write-container">
      <p className="write-header">
        <BsPencilSquare /> &nbsp; Write Your Story!!!
      </p>
      <form ref={form} className="write-form" encType="multipart/form-data">
        <div className="textarea-wrap">
          <textarea
            name="title"
            className="story-textarea"
            placeholder="Story title"
            value={Validate.title}
            onChange={(event) =>
              setValidate({ ...Validate, title: event.target.value })
            }
          />
          {Validate.title === "" && <p>Tittle is missing.</p>}
        </div>
        <div className="file-drop-area">
          <span className="file-btn">
            Choose files or drag and drop files here
          </span>
          <input
            className="file-input"
            type="postImage"
            accept="image/*"
            onChange={imageSubmit}
          />
        </div>
        {selectedImage && (
          <div className="file-upload">
            <img src={URL.createObjectURL(selectedImage)} alt="upload" />
            <button onClick={removeSelectedImage}>Remove</button>
          </div>
        )}
        <div className="textarea-wrap">
          <textarea
            name="story"
            className="story-textarea"
            placeholder="Tell your story"
            value={Validate.story}
            onChange={(event) =>
              setValidate({ ...Validate, story: event.target.value })
            }
          />
          {Validate.story === "" && <p>Story is missing.</p>}
        </div>
        <br />
        <button className="write-form-submit" onSubmit={handleSubmit}>
          Post
        </button>
      </form>
    </div>
  );
};

export default Write;
