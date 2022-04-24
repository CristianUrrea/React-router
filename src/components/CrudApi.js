import React, { useState, useEffect } from "react";
import { HashRouter, NavLink, Route, Routes } from "react-router-dom";
import { helpHttp } from "../helpers/helpHttp";
import Error404 from "../pages/Error404";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import Loader from "./Loader";
import Message from "./Message";

const CrudApi = () => {
  const [db, setDb] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let api = helpHttp();
  let url = "http://localhost:5000/womans";

  useEffect(() => {
    setLoading(true);
    helpHttp()
      .get(url)
      .then((res) => {
        if (!res.err) {
          setDb(res);
          setError(null);
        } else {
          setDb(null);
          setError(res);
        }
        setLoading(false);
      });
  }, [url]);

  const createData = (data) => {
    data.id = Date.now();
    let options = {
      body: data,
      headers: { "content-type": "application/json" }, // Poner el header aquí y no el default headers es para evitar que en otras apis deje de funcionar, ya que cada api funciona de una manera u otra
    };
    api.post(url, options).then((res) => {
      if (!res.err) {
        setDb([...db, res]);
      } else {
        setError(res);
      }
    });
  };

  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`;
    let options = {
      body: data,
      headers: { "content-type": "application/json" }, // Poner el header aquí y no el default headers es para evitar que en otras apis deje de funcionar, ya que cada api funciona de una manera u otra
    };
    api.put(endpoint, options).then((res) => {
      if (!res.err) {
        let newData = db.map((el) => (el.id === data.id ? data : el));
        setDb(newData);
      } else {
        setError(res);
      }
    });
  };
  const deleteData = (id) => {
    let isDelete = window.confirm(
      `¿Estás seguro de eliminar el registo con el id '${id}'?`
    );
    if (isDelete) {
      let endpoint = `${url}/${id}`;
      let options = {
        headers: { "content-type": "application/json" }, // Poner el header aquí y no el default headers es para evitar que en otras apis deje de funcionar, ya que cada api funciona de una manera u otra
      };
      api.del(endpoint, options).then((res) => {
        if (!res.err) {
          let newData = db.filter((el) => el.id !== id);
          setDb(newData);
        } else {
          setError(res);
        }
      });
    } else {
      return;
    }
  };

  return (
    <div>
      <HashRouter>
        <header>
          <h2>CRUD API con Rutas</h2>
          <nav>
            <NavLink to="/" activeclassname="active">
              Girls
            </NavLink>
            <NavLink to="/add" activeclassname="active">
              Añadir
            </NavLink>
          </nav>
        </header>
        <Routes>
          {/* <Route path="/girls"> */}
          <Route
            path="/"
            element={
              <CrudForm
                createData={createData}
                updateData={updateData}
                dataToEdit={dataToEdit}
                setDataToEdit={setDataToEdit}
              />
            }
          ></Route>
          <Route path="/add" element={<h2>Añadir Girls</h2>}></Route>
          <Route path="edit/:id" element={<h2>Edit Girls</h2>}></Route>
          {/* </Route> */}

          <Route path="/*" element={<Error404 />}></Route>
        </Routes>
      </HashRouter>
      <h2>CRUD API con Json server</h2>

      {db && (
        <CrudTable
          data={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        />
      )}
      {loading && <Loader />}
      {error && (
        <Message
          msg={`Error ${error.status}: ${error.statusText}`}
          bgColor="#dc3545"
        />
      )}
    </div>
  );
};

export default CrudApi;
