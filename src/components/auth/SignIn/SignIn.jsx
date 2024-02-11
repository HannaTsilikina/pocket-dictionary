import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../../firebase";
import "./SignIn.scss";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  function logIn(event) {
    event.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        setError("");
        setEmail("");
        setPassword("");
      })
      .catch((err) => {
        console.log(err);
        setError("Sorry, we can't find your account");
      });
  }
  return (
    <main className="main-signin">
      <h2>Log In</h2>
      <form className="form-register">
        <input
          value={email}
          className="input-register"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
        <input
          value={password}
          className="input-register"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />

        <button className="button-main" onClick={logIn}>
          Log in
        </button>
        {error ? <p>{error}</p> : null}
      </form>
    </main>
  );
};
export default SignIn;
