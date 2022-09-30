import "./UserDropList.css";
import { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import SignoutBtn from "../GoogleBtns/SignoutBtn";

const UserDropList = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const btnRef = useRef();

  useEffect(() => {
    const closeDropdown = (e) => {
      if (e.path[1] !== btnRef.current) setIsOpen(false);
    };
    document.body.addEventListener("click", closeDropdown);

    return () => document.body.removeEventListener("click", closeDropdown);
  }, []);

  return (
    <div className="Dropdown">
      <button
        ref={btnRef}
        type="button"
        className="DropdownBtn"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img className="BtnImg" src={props.user.hK} alt="user" />
      </button>
      <div className={`${isOpen ? "DropdownList" : "hidden"}`}>
        <div className="py-3 px-4">
          <span className="UserName">{props.user.Ad}</span>
          <span className="UserEmail">{props.user.cu}</span>
        </div>
        <ul className="py-1" aria-labelledby="user-menu-button">
          <li>
            <Link to="/" className="ListItem">
              Dashboard
            </Link>
          </li>
          <li>
            <SignoutBtn />
          </li>
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { user: state.auth.user };
};

export default connect(mapStateToProps)(UserDropList);
