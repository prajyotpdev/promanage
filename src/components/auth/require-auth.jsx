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
    // Redirect the user to the home page.
    // Please! Close the mustache {{}}
    return (
      <Navigate to="/rotract-club-thane/" state={{ from: location }} replace />
    );
  } else {
    const userRef = doc(db, "users", currentUser?.uid);
    // setUserRef(userRef); // Set userRef in the context
    setDoc(userRef, { capital: true }, { merge: true });
    console.log("user is present");
  }
  return children;
}

export default RequireAuth;
