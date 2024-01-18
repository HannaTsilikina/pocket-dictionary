import "./HeaderStyle.scss";
import { Link, Outlet } from "react-router-dom";

function Header() {
  return (
    <div className="header-container">
      <a className="logo" href="/" alt="logo-href">
        <img
          className="image-logo"
          src={require("../../assets/images/logo.png")}
          alt="logo"
        ></img>
        <span className="text-logo">PocketEnglish</span>
      </a>
      <nav>
        <Link className="header-hrefs" to="/train">
          Start to learn
        </Link>
        <Link className="header-hrefs active" to="/">
          My dictionary
        </Link>
        <Link className="header-hrefs " to="/">
          About
        </Link>
        <Link className="header-hrefs" to="/">
          Help
        </Link>
      </nav>
      <div className="log">
        <button className="button-main"> Sign in</button>
        <button className="button-secondary"> Sign up</button>
      </div>
      <Outlet />
    </div>
  );
}
export default Header;
