import { Navigate } from "react-router-dom";
import { useEffect } from "react"

import { useNavigate } from "react-router-dom";

const Logout = (props) => {
  const { setAuth, setUserName } = props;

  const navigate = useNavigate();

  const handler = () => {
    sessionStorage.removeItem("isAuthenticated");
    sessionStorage.removeItem("userName");
    setAuth(false);
    setUserName("");
    navigate("/login");
  }

  useEffect(() => {
    handler()
  }, [])


  return <></>
};
export default Logout;
