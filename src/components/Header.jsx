function Header() {
  return (
    <div className="header-container">
      <div className="logo">Logo</div>
      <nav>
        <a className="" href="#">
          {" "}
          About{" "}
        </a>
        <a href="#"> Updates</a>
        <a href="#"> Help </a>
      </nav>
      <div className="log">
        <button> Sign in</button>
        <button> Sign up</button>
      </div>
    </div>
  );
}
export default Header;
