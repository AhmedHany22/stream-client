import "./GoogleBtns.css";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { Fragment } from "react";
import { gapi } from "gapi-script";

const SigninBtn = () => {
  const onFailure = () =>
    toast.error("Can't log In", {
      theme: "colored",
      autoClose: 5000,
    });
  const onSuccess = () =>
    toast.success("Logged Out", {
      theme: "colored",
      autoClose: 3000,
    });

  const onSigninClick = () => {
    try {
      gapi.auth2.getAuthInstance().signIn();
      onSuccess();
    } catch (error) {
      onFailure();
    }
  };

  return (
    <Fragment>
      <button onClick={onSigninClick} className="SigninBtn">
        Log In
      </button>
    </Fragment>
  );
};

export default SigninBtn;
