import "./UserDropList.css";
import { gapi } from "gapi-script";
import { Link } from "react-router-dom";

import SignoutBtn from "../GoogleBtns/SignoutBtn";

const UserDropList = () => {
  const auth = gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile();

  return (
    <div className="Dropdown">
      <button type="button" className="DropdownBtn">
        <img className="BtnImg" src={auth.hK} alt="user" />
      </button>
      <div className="DropdownList">
        <div className="py-3 px-4">
          <span className="UserName">{auth.Ad}</span>
          <span className="UserEmail">{auth.cu}</span>
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

export default UserDropList;
