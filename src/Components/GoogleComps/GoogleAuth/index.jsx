import { Component, Fragment } from "react";
import { connect } from "react-redux";
import { gapi } from "gapi-script";

import Spinner from "../../Spinner";
import UserDropList from "../UserDropList";
import SigninBtn from "../GoogleBtns/SigninBtn";
import { signIn, signOut } from "./../../../Redux/Auth/Auth_ActionsCreator";

class GoogleAuth extends Component {
  componentDidMount() {
    // It loads the auth2 functions, The 2nd arg is a callback func that will be called after the load finishs
    gapi.load("client:auth2", () => {
      gapi.client
        .init({
          clientId: process.env.REACT_APP_GOOGLE_AUTH_KEY,
          scope: "email",
          plugin_name: "streams",
        })
        .then(() => {
          // A var hold the current auth obj with all its funcs
          this.auth = gapi.auth2.getAuthInstance();

          // Store authentication in the Redux
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getBasicProfile());
    } else {
      this.props.signOut();
    }
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return <Spinner />;
    } else if (this.props.isSignedIn) {
      return <UserDropList />;
    } else {
      return <SigninBtn />;
    }
  }

  render() {
    return <Fragment>{this.renderAuthButton()}</Fragment>;
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
