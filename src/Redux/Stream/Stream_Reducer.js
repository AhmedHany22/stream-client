import _ from "lodash";
import streamActionTypes from "./Stream_ActionTypes";

const INITIAL_STATE = {};

const streamReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case streamActionTypes.FETCH_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case streamActionTypes.FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case streamActionTypes.CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case streamActionTypes.EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case streamActionTypes.DELETE_STREAM:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
export default streamReducer;
