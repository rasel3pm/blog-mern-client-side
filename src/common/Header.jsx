import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import LoginModel from "../components/LoginModel";
import Logo from "../assets/image/blogLogo.png";

const Header = () => {
  return (
    <div>
      <Navbar bg="light" className="shadow-sm sticky-top" expand="lg">
        <Container>
          <NavLink className="text-decoration-none fs-2 fw-semibold" to="/">
            <Navbar.Brand>
              <img width={100} src={Logo} />
            </Navbar.Brand>
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-center">
              <NavLink
                className=" btn  fw-bold text-decoration-none"
                to="/home"
              >
                Home
              </NavLink>
              <NavLink className=" btn  fw-bold text-decoration-none" to="/">
                Blogs
              </NavLink>
            </Nav>
            <Nav>
              <LoginModel />
              <NavLink className="btn" to={"/register"}>
                Register
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
