import authActionTypes from "./Auth_ActionTypes";

const INITIAL_STATE = { isSignedIn: null, id: null, user: null };

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case authActionTypes.SIGN_IN:
      return {
        ...state,
        isSignedIn: true,
        id: action.payload.NT,
        user: action.payload,
      };
    case authActionTypes.SIGN_OUT:
      return { ...state, isSignedIn: false, id: null, user: null };
    default:
      return state;
  }
};
export default authReducer;
