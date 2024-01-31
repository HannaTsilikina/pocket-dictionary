import "./FooterStyle.scss";
import logo from "../../assets/images/logo.png";
function Footer() {
  return (
    <footer className="footer-container">
      <a
        className="logo"
        href="http://localhost:3000/HannaTsilikina/pocket-dictionary"
        alt="logo-href"
      >
        <img className="image-logo" src={logo} alt="logo"></img>
        <span className="text-logo">PocketEnglish</span>
      </a>
      <div className="footer-links">
        <a className="footer-hrefs" href="">
          Our partners
        </a>
        <a className="footer-hrefs" href="">
          Support
        </a>
        <a className="footer-hrefs" href="">
          Useful links
        </a>
      </div>
    </footer>
  );
}
export default Footer;
