import axios from "axios";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const CustomModal = ({ id }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    content: "",
  });

  useEffect(() => {
    if (id) {
      // Fetch initial data
      axios
        .get("https://serversideblog.vercel.app/api/v1/post/" + id)
        .then((res) => {
          const postData = res.data["post"];
          setFormData({
            title: postData.title,
            author: postData.author,
            content: postData.content,
          });
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [id]);

  const changeHandler = (property, value) => {
    setFormData({ ...formData, [property]: value });
  };

  const saveChanges = () => {
    let URL = "https://serversideblog.vercel.app/api/v1/update/" + id;
    axios
      .post(URL, formData)
      .then((res) => {
        handleClose(res);
      })
      .catch((error) => {
        console.error("Error saving changes:", error);
      });
  };

  return (
    <>
      <button className="btn btn-outline-success" onClick={handleShow}>
        Edit
      </button>

      <Modal show={show} onHide={handleClose}>
        <div className="row p-4">
          <h4 className="border-bottom pb-2">Update Post</h4>
          <div className="col-md-6">
            <label className="pb-2 text-black-50">Post Title</label>
            <input
              type="text"
              onChange={(e) => {
                changeHandler("title", e.target.value);
              }}
              value={formData.title}
              className="form-control"
            />
            <br />
          </div>
          <div className="col-md-6">
            <label className="pb-2 text-black-50">Author</label>
            <input
              type="text"
              value={formData.author}
              onChange={(e) => {
                changeHandler("author", e.target.value);
              }}
              className="form-control"
            />
            <br />
          </div>
          <div className="col-md-12">
            <label className="pb-2 text-black-50">Content</label>
            <textarea
              rows={7}
              value={formData.content}
              onChange={(e) => {
                changeHandler("content", e.target.value);
              }}
              className="form-control"
              placeholder="Type content..."
            />
            <br />
          </div>
          <div className="d-flex gap-3">
            <button onClick={saveChanges} className="btn bg-success text-white">
              Update
            </button>
            <button onClick={handleClose} className="btn btn-danger text-white">
              Close
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CustomModal;
