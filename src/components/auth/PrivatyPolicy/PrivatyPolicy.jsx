import { NavLink } from "react-router-dom";
import "./PrivatyPolicy.scss";
const PrivatyPolicy = () => {
  return (
    <main>
      <h1>Privaty Policy</h1>
      <div className="privaty-container">
        <p>
          This privacy policy ("policy") will help you understand how{" "}
          <strong>Pocket-dictionary</strong> uses and protects the data you
          provide to us when you visit and use{" "}
          <a>https://hannatsilikina.github.io/</a>.
        </p>
        <p>
          We reserve the right to change this policy at any given time, of which
          you will be promptly updated. If you want to make sure that you are up
          to date with the latest changes, we advise you to frequently visit
          this page.
        </p>
        <h3>What User Data We Collect</h3>
        <p>When you visit the blog, we may collect the following data:</p>
        <ul>
          <li>Your IP address</li>
          <li>Your contact information and email address</li>
          <li>Other information such as interests and preferences</li>
          <li>Data profile regarding your online behavior on our blog</li>
        </ul>
        <h3>Why We Collect Your Data</h3>
        <p>We are collecting your data for several reasons:</p>
        <ul>
          <li>To better understand your needs</li>
          <li>To improve our services and products</li>
          <li>
            To send you promotional emails containing the information we think
            you will find interesting
          </li>
          <li>To contact you to fill out surveys</li>
        </ul>
        <NavLink to="/signup">
          <button className="button-main"> Back to registration</button>
        </NavLink>
      </div>
    </main>
  );
};
export default PrivatyPolicy;
