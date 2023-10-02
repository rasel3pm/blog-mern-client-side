import { useState } from "react";
import backgroundSvg from "../assets/image/mark.svg";
import { useNavigate } from "react-router-dom";
import { RegisterRequiest } from "../apiRequiest/apiRequiest";
import { ErrorAlart, IsEmpty } from "../helper/formValidation";

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
    const { name, email, password } = formData;
    if (IsEmpty(name)) {
      ErrorAlart("Name is required");
      return false;
    } else if (IsEmpty(email)) {
      ErrorAlart("Email is required");
      return false;
    } else if (IsEmpty(password)) {
      ErrorAlart("Password is required");
      return false;
    }
    RegisterRequiest(name, email, password).then((res) => {
      navigate("/login");
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
      className="container  shadow border rounded mt-5 py-3 p-md-5"
    >
      <span className="fs-5">Register Form</span>
      <div className="row">
        <div className="col-md-12">
          <label className="py-2 text-black-50">Name</label>
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
