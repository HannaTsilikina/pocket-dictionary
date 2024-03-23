import "./NotFound.scss";
import { Link } from "react-router-dom";

import NotFoundAnimation from "components/AppUI/Animations/NotFoundAnimation";
export default function NotFound() {
  return (
    <main className="notfound-container">
      <h1> Oops! Something went wrong</h1>
      <div className="notfound-main">
        <span className="span-notfound"> Page 404 Not Found</span>
        <NotFoundAnimation />
      </div>
      <Link className="notfound" to="/main/dictionary">
        <button className="button-main">Back to home page</button>
      </Link>
    </main>
  );
}
