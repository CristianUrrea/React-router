import { useParams } from "react-router-dom";

const Profile = () => {
  // Url amigables
  // let params = useParams(); // useParams nos va añadidendo los parametros que ponemos en la url en un objeto
  // let { username } = useParams();
  // console.log(params);
  return (
    <div>
      <h3>Perfil del usuario</h3>
      <p>
        Nombre del usuario: <b>{}</b>
      </p>
    </div>
  );
};

export default Profile;
