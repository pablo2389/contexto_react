// components/Form.js
import React from "react";
import Panel from "./Panel"; // Asegúrate de importar el componente Panel
import LoginButton from "./LoginButton"; // Asegúrate de importar el componente LoginButton

export default function Form() {
  return (
    <Panel title="Bienvenido/a!!">
      {/* Agrega aquí tus campos de formulario */}
      {/* Por ejemplo: */}
      <input type="text" placeholder="Nombre" />
      <input type="email" placeholder="Email" />
      <button>Enviar</button>
      <LoginButton />
    </Panel>
  );
}
