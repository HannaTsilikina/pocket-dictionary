import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../../firebase";
import { useEffect, useState } from "react";
import "./AuthDetails.scss";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) setAuthUser(user);
      else {
        setAuthUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);
  function userSignedOut() {
    signOut(auth)
      .then(() => console.log("success"))
      .catch((err) => console.log(err))
      .finally(() => navigate("/"));
  }
  return (
    <div>
      {authUser ? (
        <div className="auth-check">
          {" "}
          <p className="authdetails-text"> {`Signed as ${authUser.email}`}</p>
          <button className="button-secondary" onClick={userSignedOut}>
            Signed out
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default AuthDetails;
