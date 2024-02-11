import AuthDetails from "components/auth/AuthDetails/AuthDetails";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./HeaderStyle.scss";

function Header() {
  return (
    <header className="header-container">
      <a className="logo" href="/" alt="logo-href">
        <img className="image-logo" src={logo} alt="logo"></img>
        <span className="text-logo">PocketEnglish</span>
      </a>
      <nav>
        <NavLink className="header-hrefs" to="/game">
          Start to learn
        </NavLink>
        <NavLink className="header-hrefs" to="/">
          My dictionary
        </NavLink>
        <NavLink className="header-hrefs " to="*">
          About
        </NavLink>
        <NavLink className="header-hrefs" to="*">
          Help
        </NavLink>
        <AuthDetails />
      </nav>

      <Outlet />
    </header>
  );
}
export default Header;
