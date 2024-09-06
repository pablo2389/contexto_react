import React, { useState, useEffect } from "react";
import { PruebaContext } from "./context/PruebaContext"; // Asegúrate de importar el contexto

export default function App() {
  const [user, setUser] = useState({ nombre: "", email: "" });

  // Obtener usuario almacenado en localStorage al cargar la aplicación
  useEffect(() => {
    const storedUser = localStorage.getItem("usuario");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Guardar usuario en localStorage cada vez que se actualice el estado user
  useEffect(() => {
    localStorage.setItem("usuario", JSON.stringify(user));
  }, [user]);

  return (
    <PruebaContext.Provider value={{ user, setUser }}>
      {/* Otro contenido de la aplicación */}
    </PruebaContext.Provider>
  );
}
