import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar sticky-top navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <Link class="navbar-brand" to="/">Virtual Art Gallery</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="d-flex flex-row-reverse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/uploadFiles">Upload</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/gallery">Gallery</Link>
        </li>
        <li class="nav-item">
        <Link to="/login"><button class="btn btn-outline-primary" type="button">Log In</button></Link>
        </li>
      </ul>
      </div>
    </div>
  </nav>
    );
};



export default Navbar;
