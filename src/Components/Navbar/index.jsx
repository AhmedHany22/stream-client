import "./Navbar.css";
import { Link } from "react-router-dom";
import { BiAddToQueue } from "react-icons/bi";

import GoogleAuth from "../GoogleComps/GoogleAuth";
import { connect } from "react-redux";

const NavBar = ({ isSignedIn }) => {
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
        <div className="flex flex-row">
          {isSignedIn ? (
            <div className="mx-4">
              <Link to="/stream/create">
                <BiAddToQueue className="h-full w-7 text-white" />
              </Link>
            </div>
          ) : null}
          <GoogleAuth />
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps)(NavBar);
