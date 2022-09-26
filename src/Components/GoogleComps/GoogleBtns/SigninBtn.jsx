import "./GoogleBtns.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { Fragment } from "react";
import { gapi } from "gapi-script";

const SigninBtn = () => {
  const onFailure = () =>
    toast.error("Can't log In", {
      theme: "colored",
      autoClose: 5000,
    });

  const onSigninClick = () => {
    try {
      gapi.auth2.getAuthInstance().signIn();
    } catch (error) {
      onFailure();
    }
  };

  return (
    <Fragment>
      <button onClick={onSigninClick} className="SigninBtn">
        Log In
      </button>
      <ToastContainer />
    </Fragment>
  );
};

export default SigninBtn;
