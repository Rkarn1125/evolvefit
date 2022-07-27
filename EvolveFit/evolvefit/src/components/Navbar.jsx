import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg  bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand mb-4" to={"/"}>
            <img
              src="https://storage.googleapis.com/evolv-assets/brand/EvolvLogoName.png"
              alt=""
              width="200"
              height="30"
            />
          </Link>
          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse bg-dark "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
