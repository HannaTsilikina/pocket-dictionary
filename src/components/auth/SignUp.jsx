import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [copyPassword, setcopyPassword] = useState("");
  const [error, setError] = useState("");

  function register(event) {
    event.preventDefault();
    if (password !== copyPassword) {
      setError("passwords didn't match");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        setError("");
        setEmail("");
        setcopyPassword("");
        setPassword("");
      })
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <form onSubmit={register}>
        <h2>Create an account</h2>
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
        <input
          value={copyPassword}
          placeholder="Password"
          onChange={(e) => setcopyPassword(e.target.value)}
          type="password"
        />
        <button>Create</button>
        {error ? <p>{error}</p> : null}
      </form>
    </div>
  );
};
export default SignUp;
