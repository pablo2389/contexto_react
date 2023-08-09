import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { useState, useEffect } from "react";
// Importamos React Router:
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Importamos componentes visuales:
import Login from "./views/Login";
import Profile from "./views/Profile";
import Logout from "./views/Logout";
import Home from "./views/Home";
import Posteos from "./views/Posteos";
import Footer from "./components/Footer/Footer";

function initAutenticacion() {
  const isAuthenticated = sessionStorage.getItem('isAuthenticated');
  console.log(`autenticación almacenada: ${isAuthenticated}`)
  return Boolean(isAuthenticated);  // FOrzar que el dato sea interpretado como true/false (boolean)
}

function initUser() {
  const userName = sessionStorage.getItem('userName');
  console.log(`userName almacenado: ${userName}`)
  return String(userName); // Forzar que el dato sea interpretado como string
}

function App() {
  // Aqui utilizamos dos variables useState distintas
  // para que fuera más fácil entender su uso
  const [auth, setAuth] = useState(initAutenticacion());
  const [userName, setUserName] = useState(initUser());

  // Pero podría ser una sola variable tipo objeto:
  // {auth: initAutenticacion(), userName: initUser()}
  // Mismo tener un solo "init" para todo el objeto


  return (
    <div className="App">
      <BrowserRouter>
        <div className="navbar-container">
          <Navbar auth={auth}/>
        </div>

        <Routes>
          <Route path='/' element={<Home auth={auth} userName={userName} />} />
          <Route path='/login' element={<Login setAuth={setAuth} setUserName={setUserName}/>} />
          <Route path='/logout' element={<Logout setAuth={setAuth} setUserName={setUserName} />} />
          <Route path="/posteos"
            element={auth ? <Posteos /> : <Navigate to="/login" replace/> }
          />
          <Route path="/perfil"
            element={auth ? <Profile userName={userName} /> : <Navigate to="/login" replace/> }
          />
        </Routes>

        <div className="footer-container">
          <Footer />
        </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
