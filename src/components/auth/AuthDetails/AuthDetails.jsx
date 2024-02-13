import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../../firebase";
import { useEffect, useState } from "react";
import "./AuthDetails.scss";
import { NavLink } from "react-router-dom";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);
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
      .catch((err) => console.log(err));
  }
  return (
    <div>
      {authUser ? (
        <div className="auth-check">
          {" "}
          <p className="authdetails-text"> {`Signed as ${authUser.email}`}</p>
          <button className="button-logOut" onClick={userSignedOut}>
            Signed out
          </button>
        </div>
      ) : (
        <>
          <div className="log">
            <NavLink to="/signin">
              <button className="button-main">Sign in</button>
            </NavLink>
            <NavLink to="/signup">
              <button className="button-secondary">Sign up</button>
            </NavLink>
          </div>
        </>
      )}
    </div>
  );
};

export default AuthDetails;
