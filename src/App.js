import BasicsConcepts from "./components/BasicsConcepts";
import CrudApi from "./components/CrudApi";
import SongSearch from "./components/SongSearch";

function App() {
  return (
    <div>
      <h1>React Router</h1>
      <a
        href="https://reactrouter.com/docs/en/v6"
        target="_blank"
        rel="noreferrer"
      >
        Documentación
      </a>
      {/* <SongSearch /> */}
      <CrudApi />
      <hr />
      {/* <BasicsConcepts /> */}
    </div>
  );
}

export default App;
