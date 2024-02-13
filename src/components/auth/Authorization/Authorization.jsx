import { NavLink } from "react-router-dom";
import "./Authorization.scss";

const Authorization = () => {
  return (
    <main className="main-authorization">
      <h2>Hello, do you have an account?</h2>
      <div className="log">
        <NavLink to="/signin">
          <button className="button-main"> Yes</button>
        </NavLink>
        <NavLink to="/signup">
          <button className="button-secondary"> No</button>
        </NavLink>
      </div>
    </main>
  );
};
export default Authorization;
