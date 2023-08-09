import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";


const label = (labelName, type, value, name) => {
  return (
    <label>
      {labelName}
      <input
        className={styles.inputBox}
        type={type}
        defaultValue={value}
        name={name}
      />
    </label>
  );
};

const Login = (props) => {
  // Desestructuramos los props:
  const { setAuth, setUserName } = props;

  const navigate = useNavigate();

  // Establecemos la función que guarda los cambios en los datos globales:
  const handleSubmit = (event) => {
    // Suspendemos el evento para evitar submits erroneos
    event.preventDefault();
    // Seteamos como autorizado al usuario
    const username = event.target.username.value;
    const password = event.target.password.value;

    if(username == "" || password == "") {
      alert("Debe ingresar username y password");
      return;
    }
    if(password !== "inoveblog") {
      alert("Password incorrecta");
      return;
    }

    // Almacenar en el storage las variable
    sessionStorage.setItem('isAuthenticated', 'true');
    sessionStorage.setItem('userName', username);

    // Cambiar el estado de las variables de autenticación
    setUserName(username);
    setAuth(true);

    // Terminado el login, se realiza el redirect a home
    navigate("/");
    
  };

  return (
    <div className={styles.Container}>
      <div className={styles.formContainer}>
        <div className={styles.initialMessage}>
          <h1>¡Bienvenido!</h1>
          <p>Login con su usuario de inove</p>
        </div>
        <form className="loginForm" onSubmit={handleSubmit}>
          {label("Usuario:", "text", "","username")}
          {label("Contraseña:", "password", "","password")}
          <input className={styles.submitButton} type="submit" value="Log In" />
        </form>
      </div>
    </div>
  );
};
export default Login;
