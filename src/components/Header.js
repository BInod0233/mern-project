import React from "react";
import { Link, Route } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { connect } from "react-redux";
import { logout } from "../redux/action/userAction";
import PassowrdContainer from "./PasswordContainer";
import GetPassowrdContainer from "./GetPasswordContainer";

function Header(props) {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Password Management System</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/" className="dropdown-item" role="button">
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
              <Link
                to="/addNewPassword"
                className="dropdown-item"
                role="button"
              >
                Add New Password
              </Link>
              <Link
                to="/GetPasswordContainer"
                className="dropdown-item"
                role="button"
              >
                View all password
              </Link>
            </NavDropdown>
            <NavDropdown
              title={props.userDetails.username}
              id="basic-nav-dropdown"
            >
              <Link to="#" className="dropdown-item" role="button">
                view profile
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
      <Route path="/addNewPassword" component={PassowrdContainer} />
      <Route path="/GetPasswordContainer" component={GetPassowrdContainer} />
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
