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

// Importar contexto
import { AuthContext, initAutenticacion, initUser } from './context/AuthContext';

// Ahora las vistas no requieren recibir las variables
// utilizando los props
// Ahora utilizaremos el contexto y cualquier vista
// o componente puede acceder a estos datos

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
      <AuthContext.Provider value={{ auth, setAuth, userName, setUserName }}>
        <BrowserRouter>
          <div className="navbar-container">
            <Navbar auth={auth}/>
          </div>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/logout' element={<Logout />} />
            <Route path="/posteos"
              element={auth ? <Posteos /> : <Navigate to="/login" replace/> }
            />
            <Route path="/perfil"
              element={auth ? <Profile /> : <Navigate to="/login" replace/> }
            />
          </Routes>

          <div className="footer-container">
            <Footer />
          </div>

        </BrowserRouter>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
