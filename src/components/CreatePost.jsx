import { useState } from "react";
import backgroundSvg from "../assets/image/mark.svg";
import { useNavigate } from "react-router-dom";
import { ErrorAlart, IsEmpty } from "../helper/formValidation";
import { CreatePostRequiest } from "../apiRequiest/apiRequiest";

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
    const { title, author, content, image } = formData;
    if (IsEmpty(title)) {
      ErrorAlart("Title is required");
      return false;
    } else if (IsEmpty(author)) {
      ErrorAlart("Author is required");
      return false;
    } else if (IsEmpty(image)) {
      ErrorAlart("Image url is required");
      return false;
    } else if (IsEmpty(content)) {
      ErrorAlart("Content is required");
      return false;
    }
    CreatePostRequiest(title, author, content, image).then((res) => {
      navigate("/");
    });
  };
  const divStyle = {
    backgroundImage: `url(${backgroundSvg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <div style={divStyle} className="">
      <div className=" container  shadow border rounded p-4">
        <div className="row">
          <div className="col-md-12">
            <h5 className="border-bottom pb-2">Create Post</h5>
          </div>
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
