import { Link, NavLink } from "react-router-dom";

const MenuConcepts = () => {
  return (
    <nav>
      <ol>
        <li>
          <span>
            Menú con enlaces html (no recomendado) está cargando la página:{" "}
          </span>
          <a href="/">Home</a>
          <a href="/about">Acerca</a>
          <a href="/contact">Contacto</a>
        </li>
        <li>
          <span>Componente link (lo recomendado) no carga la página: </span>
          <Link to="/">Home</Link>
          <Link to="/about">Acerca</Link>
          <Link to="/contact">Contacto</Link>
          <Link to="/no-exist">Error-404</Link>
        </li>
        <li>
          <span>
            Componente NavLink (lo recomendado) no carga la página + permite
            aplicar estilos:{" "}
          </span>
          <NavLink to="/" activeclassname="active">
            Home
          </NavLink>{" "}
          {/* No permite hacer lo mismo que 'link' pero esto nos permite dar css en enlance que nos redirigimos*/}
          <NavLink to="/about" activeclassname="active">
            Acerca
          </NavLink>
          <NavLink to="/contact" activeclassname="active">
            Contacto
          </NavLink>
          <NavLink to="/*" activeclassname="active">
            Error-404
          </NavLink>
        </li>
        <li>
          <span>Parámetros de consulta: </span>
          <Link to="/products">Productos</Link>
        </li>
      </ol>
    </nav>
  );
};

export default MenuConcepts;
