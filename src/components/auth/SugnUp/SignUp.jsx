import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../../firebase";
import "./SignUp.scss";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [copyPassword, setcopyPassword] = useState("");
  const [error, setError] = useState("");
  const [checkedInput, setCheckedInput] = useState(false);

  function register(event) {
    event.preventDefault();
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
      })
      .catch((err) => console.log(err));
  }
  return (
    <main className="main-signup">
      <h2>Create an account</h2>
      <form className="form-register" onSubmit={register}>
        <input
          value={email}
          className="input-register"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
        <input
          value={password}
          className="input-register"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        <input
          value={copyPassword}
          className="input-register"
          placeholder="Repeat your password"
          onChange={(e) => setcopyPassword(e.target.value)}
          type="password"
        />
        <div>
          <input
            type="checkbox"
            checked={checkedInput}
            id="input-privacy"
            onChange={() => {
              setCheckedInput(!checkedInput);
            }}
          />
          <label htmlFor="input-privacy">
            {" "}
            I agree with{" "}
            <Link to="/privatypolicy">
              <a className="href-underline">Privacy Policy</a>
            </Link>
          </label>
        </div>

        <button
          className="button-main"
          disabled={checkedInput ? null : "disabled"}
        >
          Create
        </button>
        {error ? <p>{error}</p> : null}
      </form>
    </main>
  );
};
export default SignUp;
