import { ContextUser } from "Providers/ContextUser/ContextUser";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import "./SignUp.scss";

const SignUp = () => {
  const [checkedInput, setCheckedInput] = useState(false);
  const {
    password,
    error,
    email,
    copyPassword,
    register,
    setEmail,
    setPassword,
    setcopyPassword,
  } = useContext(ContextUser);
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
            I agree with
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
