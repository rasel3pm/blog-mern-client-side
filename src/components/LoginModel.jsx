import { useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import backgroundSvg from "../assets/image/mark.svg";
import { useNavigate } from "react-router-dom";
import { LoginRequiest } from "../apiRequiest/apiRequiest";

const LoginModel = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const changeHandaler = (property, value) => {
    setFormData({ ...formData, [property]: value });
  };
  const onSubnit = (e) => {
    e.preventDefault();
    const { email, password } = formData;
    LoginRequiest(email, password).then((res) => {
      navigate("/dashboard");
    });
  };
  const divStyle = {
    backgroundImage: `url(${backgroundSvg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover", // Adjust as needed
    // Other background properties like position, attachment, etc.
  };

  return (
    <>
      <button className="btn btn-outline-success" onClick={handleShow}>
        Login
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <div
              style={divStyle}
              className="container  shadow border rounded p-md-3"
            >
              <div className="row">
                <div className="col-md-12">
                  <label className="pb-2 text-black-50">Email</label>
                  <input
                    type="text"
                    value={formData.email}
                    onChange={(e) => {
                      changeHandaler("email", e.target.value);
                    }}
                    className="form-control"
                    placeholder="email"
                  />
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
                </div>
              </div>
              <div className="row mt-md-2">
                <div className="col-md-12  text-md-end text-center">
                  <button
                    onClick={onSubnit}
                    className="btn bg-success text-white w-25"
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <span className="text-center">
            Not have an account{" "}
            <Link onClick={handleClose} to={"/register"}>
              Register
            </Link>
          </span>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LoginModel;
