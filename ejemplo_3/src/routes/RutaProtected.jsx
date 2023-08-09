import { useContext } from 'react'
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const RutaProtected = () => {
    const { auth } = useContext(AuthContext);

    if (!auth) {
        // usuario no logeado, se lo redirige a login
        return <Navigate to="/login" replace />
    }

    // Usuario logeado, se renderiza la vista
    return <Outlet />;
};
export default RutaProtected;
