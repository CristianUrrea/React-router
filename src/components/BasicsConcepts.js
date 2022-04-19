import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import MenuConcepts from "./MenuConcepts";

const BasicsConcepts = () => {
  return (
    <div>
      <h2>Conceptos básico</h2>
      {/* Definir las rutas */}
      <BrowserRouter>
        <MenuConcepts />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default BasicsConcepts;
