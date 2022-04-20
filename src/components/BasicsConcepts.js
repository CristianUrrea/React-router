import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Profile from "../pages/Profile";
import MenuConcepts from "./MenuConcepts";

const BasicsConcepts = () => {
  return (
    <div>
      <h2>Conceptos básico</h2>
      {/* Definir las rutas */}
      <Router>
        <MenuConcepts />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="/products" element={<Products />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router> 
    </div>
  );
};

export default BasicsConcepts;
