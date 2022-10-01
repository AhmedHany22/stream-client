import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import Reducers from "./Reducers";

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE || compose;

export const store = createStore(Reducers, enhancer(applyMiddleware(thunk)));

export default store;
