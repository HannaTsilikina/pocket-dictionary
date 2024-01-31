import "./NotFound.scss";
import { Link } from "react-router-dom";
import notFoundImage from "../../assets/images/ugly-cat.png";
export default function NotFound() {
  return (
    <main className="notfound-container">
      <h1> Oops! Something went wrong</h1>
      <div className="notfound-main">
        <span className="span-notfound"> Page 404 Not Found</span>
        <img
          className="image-notfound"
          src={notFoundImage}
          alt="imageNotFound"
        ></img>
      </div>
      <Link className="notfound" to="/">
        <button className="button-main">Back to home page</button>
      </Link>
    </main>
  );
}
