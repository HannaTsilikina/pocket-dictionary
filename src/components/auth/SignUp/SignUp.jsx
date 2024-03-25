import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import "./SignUp.scss";
import { auth } from "../../../firebase";
import { observer, inject } from "mobx-react";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = inject(["user"])(
  observer(({ user }) => {
    const [checkedInput, setCheckedInput] = useState(false);
    function register(navigate) {
      if (user.password !== user.copyPassword) {
        user.setError("Sorry, your password didn't match.   Please, try again");
        return;
      }
      createUserWithEmailAndPassword(auth, user.email, user.password)
        .then((user) => {
          console.log(user);
          user.setError("");
          user.setEmail("");
          user.setcopyPassword("");
          user.setPassword("");
          navigate("/main/dictionary");
        })
        .catch((err) =>
          user.setError(`Password should be at least 6 characters`)
        );
    }
    const navigate = useNavigate();

    return (
      <main className="main-signup">
        <h2>Create an account</h2>
        <form
          className="form-register"
          onSubmit={(e) => {
            e.preventDefault();
            register(navigate);
          }}
        >
          <input
            value={user.email}
            className="input-register"
            placeholder="Enter your email"
            onChange={(e) => user.setEmail(e.target.value)}
            type="email"
          />
          <input
            value={user.password}
            className="input-register"
            placeholder="Enter your password"
            onChange={(e) => user.setPassword(e.target.value)}
            type="password"
          />
          <input
            value={user.copyPassword}
            className="input-register"
            placeholder="Repeat your password"
            onChange={(e) => user.setcopyPassword(e.target.value)}
            type="password"
          />
          <div className="signup-agreed">
            <input
              type="checkbox"
              checked={checkedInput}
              id="input-privacy"
              onChange={() => {
                setCheckedInput(!checkedInput);
              }}
            />
            <label htmlFor="input-privacy">
              I agree with
              <Link to="/privatypolicy">
                <a className=" a-margin href-underline">Privacy Policy</a>
              </Link>
            </label>
          </div>

          <button
            className="button-main"
            disabled={checkedInput ? null : "disabled"}
          >
            Create
          </button>
          {user.error ? <p>{user.error}</p> : null}
        </form>
      </main>
    );
  })
);
export default SignUp;
