import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import LoginModel from "../components/LoginModel";

const Header = () => {
  return (
    <div>
      <Navbar bg="light" className="shadow-sm" expand="lg">
        <Container>
          <NavLink className="text-decoration-none fs-2 fw-semibold" to="/">
            <Navbar.Brand>
              <img width={50} src="../../public/image/logo.svg" />
            </Navbar.Brand>
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <NavLink
                className="mx-2  fw-bold text-decoration-none"
                to="/home"
              >
                Home
              </NavLink>
              <NavLink
                className="mx-2 fw-bold text-decoration-none"
                to="/create"
              >
                Create post
              </NavLink>
              <NavLink className="mx-2  fw-bold text-decoration-none" to="/">
                Blogs
              </NavLink>
            </Nav>
            <Nav>
              <LoginModel />
              <Link className="btn" to={"/register"}>
                Register
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
