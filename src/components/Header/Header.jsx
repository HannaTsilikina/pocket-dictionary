import AuthDetails from "components/auth/AuthDetails/AuthDetails";
import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/images/logo.png";
import icon from "assets/images/burger-menu.svg";
import closeArrow from "assets/images/close-arrow.svg";
import "./HeaderStyle.scss";

export default function Header() {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="header-container">
      <a className="logo" href="/" alt="logo-href">
        <img className="image-logo" src={logo} alt="logo"></img>
        <span className="text-logo">PocketEnglish</span>
      </a>
      <nav className={`header__nav ${isOpen ? "clicked" : ""}`}>
        <NavLink className="header-hrefs" to="/game">
          Start to learn
        </NavLink>
        <NavLink className="header-hrefs" to="/dictionary">
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
      <button className="header__menu-button" onClick={() => setOpen(!isOpen)}>
        <img
          className="burger-menu"
          src={isOpen ? `${closeArrow}` : `${icon}`}
          alt="burger-menu"
        />
      </button>
      <Outlet />
    </header>
  );
}
