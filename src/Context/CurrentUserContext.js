// context/CurrentUserContext.js
import { createContext } from "react";

const CurrentUserContext = createContext({
  currentUser: { name: "" },
  setCurrentUser: () => {}, // Esta función se puede reemplazar con la lógica adecuada
});

export default CurrentUserContext;
