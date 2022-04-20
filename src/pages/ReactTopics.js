import { Routes, Route, Link } from "react-router-dom";
import Error404 from "./Error404";
const ReactTopics = () => {
  return (
    <div>
      <h3>Temas de React</h3>
      <ul>
        <li>
          <Link to="/react/jsx">JSX</Link>
        </li>
        <li>
          <Link to="/react/props">Props</Link>
        </li>
        <li>
          <Link to="/react/status">Estados</Link>
        </li>
        <li>
          <Link to="/react/components">Componentes</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/jsx" element={<h3>Docs JSX</h3>}></Route>
        <Route path="/props" element={<h3>Docs Props</h3>}></Route>
        <Route path="/status" element={<h3>Docs Estados</h3>}></Route>
        <Route path="/components" element={<h3>Docs Componentes</h3>}></Route>
        <Route path="/*" element={<Error404 />}></Route>
      </Routes>
    </div>
  );
};

export default ReactTopics;
