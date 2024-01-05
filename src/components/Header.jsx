import "./styles/Header/HeaderStyle.scss";
function Header() {
  return (
    <div className="header-container">
      <a
        className="logo"
        href="http://localhost:3000/HannaTsilikina/pocket-dictionary"
        alt="logo-href"
      >
        <img
          className="image-logo"
          src={require("../assets/images/logo.png")}
          alt="logo"
        ></img>
        <span className="text-logo">PocketEnglish</span>
      </a>
      <nav>
        <a
          className="header-hrefs"
          href="http://localhost:3000/HannaTsilikina/pocket-dictionary"
        >
          About
        </a>
        <a
          className="header-hrefs"
          href="http://localhost:3000/HannaTsilikina/pocket-dictionary"
        >
          Updates
        </a>
        <a
          className="header-hrefs"
          href="http://localhost:3000/HannaTsilikina/pocket-dictionary"
        >
          Help
        </a>
      </nav>
      <div className="log">
        <button className="button-main"> Sign in</button>
        <button className="button-secondary"> Sign up</button>
      </div>
    </div>
  );
}
export default Header;
