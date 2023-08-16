import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import LoginModel from "../components/LoginModel";

const Header = () => {
  return (
    <div>
      <Navbar bg="light" className="shadow-sm" expand="lg">
        <Container>
          <NavLink className="text-decoration-none fs-2 fw-semibold" to="/">
            <Navbar.Brand>Blog-MERN</Navbar.Brand>
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <NavLink
                className="mx-2 text-black fw-normal text-decoration-none"
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className="mx-2 text-black fw-normal text-decoration-none"
                to="/create"
              >
                Create post
              </NavLink>
              <NavLink
                className="mx-2 text-black fw-normal text-decoration-none"
                to="/read"
              >
                Blogs
              </NavLink>
            </Nav>
            <Nav>
              <LoginModel />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
