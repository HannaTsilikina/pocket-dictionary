import { NavLink } from "react-router-dom";
import React from "react";
import "./Authorization.scss";
import helloCat from "assets/images/hello-cat.jpg";
// import RegistrationAnimation from "components/AppUI/Animations/RegistrationAnimation";
// const RegistrationAnimation = React.lazy(() =>
//   import("components/AppUI/Animations/RegistrationAnimation")
// );

const Authorization = () => {
  {
    return (
      <main className="main-authorization">
        <h1>Welcome to our Pocket Dictionary!</h1>
        <h4>
          English is one of the most commonly spoken languages in the world.
          There are over 1.5 billion people who speak English!{" "}
        </h4>
        <h4>
          So how can you improve your English language skills? One great way is
          to use a language learning app.
        </h4>
        <div className="registration">
          <div className="log">
            <h3>Do you have an account?</h3>
            <NavLink to="/signin">
              <button className="button-main"> Yes</button>
            </NavLink>
            <NavLink to="/signup">
              <button className="button-secondary"> No</button>
            </NavLink>
          </div>
          <img className="animation-register" src={helloCat} alt="arrow" />
          {/* <RegistrationAnimation /> */}
        </div>
      </main>
    );
  }
};
export default Authorization;
