import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./Auth/Auth_Reducer";

export default combineReducers({
  auth: authReducer,
  form: formReducer,
});
