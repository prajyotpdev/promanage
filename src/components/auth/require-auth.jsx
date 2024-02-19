import { useContext } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { selectUser } from "../../store/slices/authSlice";

function RequireAuth({ children }) {
  const state = useSelector((state) => state);
  console.log("State", state);
  const currentUser = useSelector(selectUser);
  let location = useLocation();

  if (!currentUser) {
    return <Navigate to="/promanage/" state={{ from: location }} replace />;
  } else {
    console.log("user is present");
  }
  return children;
}

export default RequireAuth;
