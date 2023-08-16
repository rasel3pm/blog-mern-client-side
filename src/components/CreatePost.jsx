import { useState } from "react";
import Toastify from "toastify-js";
import backgroundSvg from "../assets/image/mark.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreatePost = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    content: "",
    image: "",
  });
  const changeHandaler = (property, value) => {
    setFormData({ ...formData, [property]: value });
  };

  const onSubnit = () => {
    let URL = "https://serversideblog.vercel.app/api/v1/create"; //for product create
    axios.post(URL, formData).then((res) => {
      if (res.status === 200) {
        Toastify({
          text: "Post create success",
          duration: 5000,
          className: "info",
          close: true,
          position: "center",
        }).showToast();
      }
      navigate("/");
    });
  };
  const divStyle = {
    backgroundImage: `url(${backgroundSvg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover", // Adjust as needed
    // Other background properties like position, attachment, etc.
  };
  return (
    <div style={divStyle} className="container  shadow border rounded p-md-4">
      <h5 className="border-bottom pb-2">Create Post</h5>
      <div className="row">
        <div className="col-md-12 py-2">
          <label className="text-black-50">Post Title</label>
          <input
            type="text"
            onChange={(e) => {
              changeHandaler("title", e.target.value);
            }}
            value={formData.title}
            className="form-control"
          />
        </div>
        <div className="col-md-6 py-2">
          <label className=" text-black-50">Author</label>
          <input
            type="text"
            value={formData.author}
            onChange={(e) => {
              changeHandaler("author", e.target.value);
            }}
            className="form-control"
          />
        </div>
        <div className="col-md-6 py-2">
          <label className=" text-black-50">Image Url</label>
          <input
            type="tesxt"
            value={formData.image}
            onChange={(e) => {
              changeHandaler("image", e.target.value);
            }}
            className="form-control"
          />
        </div>
        <div className="col-md-12 py-2">
          <label className=" text-black-50">Content</label>
          <textarea
            rows={6}
            value={formData.content}
            onChange={(e) => {
              changeHandaler("content", e.target.value);
            }}
            className="form-control"
            placeholder="Type content..."
          />
        </div>
      </div>
      <div className="row mt-md-2">
        <div className="col-md-12  text-md-end text-center">
          <button onClick={onSubnit} className="btn bg-success text-white w-25">
            Save Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
