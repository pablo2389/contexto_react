import React, { useEffect, useState } from 'react';
import Form from './components/Form';
import { CurrentUserContext } from './context/CurrentUserContext';

export default function App() {
  const [currentUser, setCurrentUser] = useState({ name: "" });

  useEffect(() => {
    // Cargar el usuario desde localStorage cuando el componente se monta
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      <Form />
    </CurrentUserContext.Provider>
  );
}
