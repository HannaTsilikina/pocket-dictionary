import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
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
    <div>
      <form>
        <h2>Log In</h2>
        <input
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
        <input
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />

        <button onClick={logIn}>Log in</button>
        {error ? <p>{error}</p> : null}
      </form>
    </div>
  );
};
export default SignIn;
