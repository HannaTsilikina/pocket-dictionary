import "./NotFound.scss";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="notFound-container">
      <h1> Oops! Something went wrong</h1>
      <div className="notFound-main">
        <span className="span-notFound"> Page 404 Not Found</span>
        <img
          className="image-notFound"
          src={require("../../assets/images/ugly-cat.png")}
          alt="imageNotFound"
        ></img>
      </div>
      <Link className="notFound" to="/">
        <button className="button-main">Back to home page</button>
      </Link>
    </div>
  );
}
