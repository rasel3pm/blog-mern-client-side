import { useState } from "react";
import Toastify from "toastify-js";
import backgroundSvg from "../assets/image/mark.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const changeHandaler = (property, value) => {
    setFormData({ ...formData, [property]: value });
  };

  const onSubnit = () => {
    let URL = "https://serversideblog.vercel.app/api/v1/register"; //for product create
    axios.post(URL, formData).then((res) => {
      if (res.status === 200) {
        Toastify({
          text: `${res.data.message}`,
          duration: 4000,
          className: "info",
          position: "center",
        }).showToast();
      }
      if (!res.status === 200) {
        Toastify({
          text: "Something went wrong",
          duration: 3000,
          className: "info",
          position: "center",
        }).showToast();
      }
      navigate("/read"); //redirect to blog page
    });
  };
  const divStyle = {
    backgroundImage: `url(${backgroundSvg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover", // Adjust as needed
    // Other background properties like position, attachment, etc.
  };
  return (
    <div
      style={divStyle}
      className="container  shadow border rounded my-3 p-md-5"
    >
      <div className="row">
        <div className="col-md-12">
          <label className="pb-2 text-black-50">Name</label>
          <input
            type="text"
            onChange={(e) => {
              changeHandaler("name", e.target.value);
            }}
            value={formData.name}
            className="form-control"
          />
          <br />
        </div>
        <div className="col-md-12">
          <label className="pb-2 text-black-50">Email</label>
          <input
            type="text"
            value={formData.email}
            onChange={(e) => {
              changeHandaler("email", e.target.value);
            }}
            className="form-control"
          />
          <br />
        </div>
        <div className="col-md-12">
          <label className="pb-2 text-black-50">Password</label>
          <input
            type="password"
            onChange={(e) => {
              changeHandaler("password", e.target.value);
            }}
            className="form-control"
            placeholder="Password"
          />
          <br />
        </div>
      </div>
      <div className="row mt-md-2">
        <div className="col-md-12  text-md-end text-center">
          <button onClick={onSubnit} className="btn bg-success text-white w-25">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
