import React from 'react'
import { Outlet,Link } from "react-router-dom";
import "../css/Home.css";

export default function Navbar() {
  return (
    <div>
    <nav
    class="navbar navbar-expand-lg navbar-light "
    style={{ backgroundColor: "#e3f2fd" }}
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        Navbar
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
          <Link class="nav-link" to="/">Home</Link>
          </li>
          <li class="nav-item">
          <Link class="nav-link" to="/product">Product</Link>
            </li>
            <li class="nav-item">
          <Link class="nav-link" to="/feature">Feature</Link>
            </li>
            <li class="nav-item">
            <Link class="nav-link" to="/contactus">Contact</Link>
            </li>
        </ul>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  </nav>
  <div class="home">
  <Outlet />
  </div>
  </div>
  )
}
