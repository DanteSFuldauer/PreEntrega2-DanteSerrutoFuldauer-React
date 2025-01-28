// src/components/Navbar.jsx
import React from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png'; // Asegúrate de que el logo esté en la carpeta correcta

const NavBar = ({ cartCount }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-md">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="Brand Logo" style={{ height: '40px', marginRight: '10px' }} />
          BiteTheApple
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/category/telefonos">
                Teléfonos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/notebooks">
                Notebooks
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/auriculares">
                Auriculares
              </Link>
            </li>
          </ul>
        </div>
        <CartWidget cartCount={cartCount} />
      </div>
    </nav>
  );
};

export default NavBar;
