import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  HashRouter,
  Link,
} from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Dashboard from "../pages/Dashboard";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Products from "../pages/Products";
import Profile from "../pages/Profile";
import ReactTopics from "../pages/ReactTopics";
import MenuConcepts from "./MenuConcepts";
import PrivateRoute from "./PrivateRoute";

const BasicsConcepts = () => {
  return (
    <div>
      <h2>Hash Router</h2>
      {/* Hash router permite que a la hora de subirlo a producción si no está por parte del servidor controlado las urls, podemos usar este metodo */}
      <HashRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">Acerca</Link>
          <Link to="/contact">Contacto</Link>
        </nav>
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes> */}
        <MenuConcepts />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="/products" element={<Products />} />
          <Route path="/acerca" element={<Navigate to="/about" />} />
          <Route path="/contacto" element={<Navigate to="/contact" />} />
          <Route path="/react/*" element={<ReactTopics />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </HashRouter>
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
          <Route path="/acerca" element={<Navigate to="/about" />} />
          <Route path="/contacto" element={<Navigate to="/contact" />} />
          <Route path="/react/*" element={<ReactTopics />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </div>
  );
};

export default BasicsConcepts;
