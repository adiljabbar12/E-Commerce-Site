import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { logout } from "../actions/userActions";
// import {Link} from 'react-router-dom';
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logOutHandler = () => {
    dispatch(logout());
  };
  return (
    <header>
      <Navbar bg="light" varient="light" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand> Al-Qadir Stationaries </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <NavbarCollapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/cart/:id">
                <Nav.Link>
                  <li className="fa fa-shopping-cart px-1"></li> Cart
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <linkContainer to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </linkContainer>
                  <NavDropdown.Item onClick={logOutHandler}>
                    LogOut
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>
                    <li className="fa fa-user px-1"></li> Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
//mine
