import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar">
      <Container>
        <ul className="app__nav align-items-center navbar-nav flex-row justify-content-evenly w-100">
          <li className="nav-item">
            <Link to={"./"}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to={"PersonalRecipes"}>My Recipes</Link>
          </li>
          <li className="nav-item">
            <Link to={"Login"}>
              <button className="btn btn-success">Log In</button>
            </Link>
          </li>
        </ul>
      </Container>
    </div>
  );
};

export default Navbar;
