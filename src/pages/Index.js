import React from "react";
import Home from "./Home";
import Service from "./Service";
import Product from "./Product";
import Contactus from "./Contactus";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet,Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Index() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar/>}>
            <Route index element={<Home />}></Route>
            <Route path="product" element={<Product />}></Route>
            <Route path="service" element={<Service />}></Route>
            <Route path="contactus" element={<Contactus />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
