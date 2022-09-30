import authActionTypes from "./Auth_ActionTypes";

export const signIn = (id) => {
  return { type: authActionTypes.SIGN_IN, payload: id };
};

export const signOut = () => {
  return { type: authActionTypes.SIGN_OUT };
};
