import React from "react";
import { Link } from "react-router-dom";

import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { connect } from "react-redux";
import { logout } from "../redux/action/userAction";

function Header(props) {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Password Management System</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="#" className="dropdown-item" role="button">
              Home{" "}
            </Link>
            <NavDropdown title="Category" id="basic-nav-dropdown">
              <Link to="#" className="dropdown-item" role="button">
                Add New Password Category
              </Link>
              <Link to="#" className="dropdown-item" role="button">
                viwew Password Category
              </Link>
            </NavDropdown>
            <NavDropdown title="Passowrd" id="basic-nav-dropdown">
              <Link to="#" className="dropdown-item" role="button">
                Add New Password Category
              </Link>
              <Link to="#" className="dropdown-item" role="button">
                View all password
              </Link>
            </NavDropdown>
            <NavDropdown
              title={props.userDetails.username}
              id="basic-nav-dropdown"
            >
              <Link to="#" className="dropdown-item" role="button">
                viww profile
              </Link>
              <Link
                to="#"
                onClick={() => props.logoutUser()}
                className="dropdown-item"
                role="button"
              >
                Logout
              </Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div></div>
    </div>
  );
}

const mapStatetoProps = (state) => {
  return { userDetails: state.user.userDetails };
};
const mapDispatchtoProps = (dispatch) => {
  return {
    logoutUser: function () {
      dispatch(logout());
    },
  };
};
export default connect(mapStatetoProps, mapDispatchtoProps)(Header);
