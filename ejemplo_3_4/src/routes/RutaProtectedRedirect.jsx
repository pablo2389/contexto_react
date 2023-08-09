import { useContext } from 'react'
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const RutaProtected = () => {
    const { auth } = useContext(AuthContext);
    const location = useLocation();

    if (!auth) {
        // usuario no logeado, se lo redirige a login
        // return <Navigate to="/login" replace />

        // Se agrega en la URL el destino deseado
        // luego del login --> ?next=<url>
        // en los query parameters de la URL
        return <Navigate to={`/login?next=${location.pathname}`} replace />

    }

    // Usuario logeado, se renderiza la vista
    return <Outlet />;
};
export default RutaProtected;
