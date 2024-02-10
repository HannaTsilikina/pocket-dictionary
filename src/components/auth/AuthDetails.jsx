import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useEffect, useState } from "react";

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
        <div>
          {" "}
          <p> {`Sighned as ${authUser.email}`}</p>
          <button onClick={userSignedOut}>Signed out</button>
        </div>
      ) : (
        <p>Signed out</p>
      )}
    </div>
  );
};
export default AuthDetails;
