import { combineReducers } from "redux";
import authReducer from "./Auth/Auth_Reducer";

export default combineReducers({
  auth: authReducer,
});
