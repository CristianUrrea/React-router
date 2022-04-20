import { useLocation, useNavigate } from "react-router-dom";

const Products = () => {
  let { search } = useLocation(); // Hook que nos información de los parametros de la url
  let query = new URLSearchParams(search);

  const LIMIT = 20;
  let start = parseInt(query.get("start")) || 1;
  let end = parseInt(query.get("end")) || LIMIT;
  let navigate = useNavigate();
  let handlePrev = (e) => {
    navigate({ search: `?start=${start - LIMIT}&end=${end - LIMIT}` });
  };
  let handleNext = (e) => {
    navigate({ search: `?start=${start + LIMIT}&end=${end + LIMIT}` });
  };

  return (
    <div>
      <h3>Productos</h3>
      <p>
        Mostrando productos del <b>{start}</b> al <b>{end}</b>
      </p>
      {start > LIMIT && <button onClick={handlePrev}>Atrás</button>}
      <button onClick={handleNext}>Adelante</button>
    </div>
  );
};

export default Products;
