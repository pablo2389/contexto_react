import React, { useContext } from "react";
import { PruebaContext } from "../context/PruebaContext";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { Inicio, Articulos, Acerca, Contacto, Login, Error404 } from "../components/index";

export default function AppRouter() {
  const { user, setUser } = useContext(PruebaContext);

  return (
    <Router>
      {/* Configura tus rutas y componentes aquí */}
    </Router>
  );
}
