import { Navigate, Outlet } from "react-router-dom";
import { useAuthStatus } from "../hooks/useAuthStatus";
import Spinner from "./Spinner";

const PrivateRoute = () => {
  const { isLogged, isLoading } = useAuthStatus();

  if (isLoading) {
    return <Spinner />;
  }

  return isLogged ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default PrivateRoute;
