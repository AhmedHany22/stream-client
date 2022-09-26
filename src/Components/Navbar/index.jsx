import "./Navbar.css";
import { Link } from "react-router-dom";

import GoogleAuth from "../GoogleComps/GoogleAuth";

const NavBar = () => {
  return (
    <nav className="Navbar">
      <div className="NavContainer">
        <Link to="/" className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="Logo"
            alt="Stream Logo"
          />
          <span className="Title">Streams</span>
        </Link>
        <div className="flex md:order-2">
          <GoogleAuth />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
