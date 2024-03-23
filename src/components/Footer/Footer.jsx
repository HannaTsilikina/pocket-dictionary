import "./FooterStyle.scss";
import logo from "assets/images/logo.png";
import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer-container">
      <a className="logo" href="/" alt="logo-href">
        <img className="image-logo" src={logo} alt="logo"></img>
        <span className="text-logo">PocketEnglish</span>
      </a>
      <div className="footer-links">
        <NavLink className="footer-hrefs " to="partners">
          Our partners
        </NavLink>
        <NavLink className="footer-hrefs " to="support">
          Support
        </NavLink>
        <NavLink className="footer-hrefs " to="links">
          Useful links
        </NavLink>
      </div>
    </footer>
  );
}
export default Footer;
