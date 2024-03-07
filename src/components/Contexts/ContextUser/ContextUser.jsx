import React, { useState, createContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";

const ContextUser = createContext();

const ContextUserProvider = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [copyPassword, setcopyPassword] = useState("");
  const [error, setError] = useState("");

  function register(navigate) {
    if (password !== copyPassword) {
      setError("Sorry, your password didn't match.   Please, try again");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        setError("");
        setEmail("");
        setcopyPassword("");
        setPassword("");
        navigate("/dictionary");
      })
      .catch((err) => setError(`Password should be at least 6 characters`));
  }

  return (
    <ContextUser.Provider
      value={{
        email,
        password,
        error,
        copyPassword,
        register,
        setEmail,
        setPassword,
        setcopyPassword,
        setError,
      }}
    >
      {props.children}
    </ContextUser.Provider>
  );
};

export { ContextUser, ContextUserProvider };