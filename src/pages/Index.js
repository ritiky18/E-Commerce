import React from "react";
import Home from "./Home";
import Product from "./Product";
import Feature from "./Feature";
import Contactus from "./Contactus";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet,Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProductDetail from "./ProductDetail";

export default function Index() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar/>}>
            <Route index element={<Home />}></Route>
            <Route path="product" element={<Product />}></Route>
            <Route path="feature" element={<Feature/>}></Route>
            <Route path="contactus" element={<Contactus />}></Route>
            <Route path="productdetail" element={<ProductDetail />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
