import "./GoogleBtns.css";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { Fragment } from "react";
import { gapi } from "gapi-script";

const SignoutBtn = () => {
  const onFailure = () =>
    toast.error("Can't log Out", {
      theme: "colored",
      autoClose: 5000,
    });

  const onSignoutClick = () => {
    try {
      gapi.auth2.getAuthInstance().signOut();
    } catch (error) {
      onFailure();
    }
  };

  return (
    <Fragment>
      <button onClick={onSignoutClick} className="SignoutBtn">
        Log Out
      </button>
    </Fragment>
  );
};

export default SignoutBtn;
