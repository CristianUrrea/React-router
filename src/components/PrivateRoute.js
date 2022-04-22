import { Navigate, Outlet, Route } from "react-router-dom";

const PrivateRoute = (props) => {
  let auth;
  auth = true;
//   auth = null; // Simulación login
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
