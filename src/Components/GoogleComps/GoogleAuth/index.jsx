import { Component, Fragment } from "react";
import { gapi } from "gapi-script";

import Spinner from "../../Spinner";
import UserDropList from "../UserDropList";
import SigninBtn from "../GoogleBtns/SigninBtn";

class GoogleAuth extends Component {
  state = { isSignedIn: null };

  componentDidMount() {
    // It loads the auth2 functions
    // The 2nd arg is a callback func that will be called after the load finishs
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
          // Store authentication in the state
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() }, () =>
      console.log(
        gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile()
      )
    );
  };

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <Spinner />;
    } else if (this.state.isSignedIn) {
      return <UserDropList />;
    } else {
      return <SigninBtn />;
    }
  }

  render() {
    return <Fragment>{this.renderAuthButton()}</Fragment>;
  }
}

export default GoogleAuth;
