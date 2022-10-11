import streams from "../../Api/streams";
import streamActionTypes from "./Stream_ActionTypes";

export const createStream = (formValues) => async (dispatch, getState) => {
  const { id } = getState().auth;
  const userId = id;
  const response = await streams.post("/streams", { ...formValues, userId });
  dispatch({ type: streamActionTypes.CREATE_STREAM, payload: response.data });
};

export const fetchStreams = () => async (dispatch) => {
  const response = await streams.get("/streams");
  dispatch({ type: streamActionTypes.FETCH_STREAMS, payload: response.data });
};

export const fetchStream = (id) => async (dispatch) => {
  const response = await streams.get(`/streams/${id}`);
  dispatch({ type: streamActionTypes.FETCH_STREAM, payload: response.data });
};

export const editStream = (id, formValues) => async (dispatch) => {
  const response = await streams.patch(`/streams/${id}`, formValues);
  dispatch({ type: streamActionTypes.EDIT_STREAM, payload: response.data });
};

export const deleteStream = (id) => async (dispatch) => {
  await streams.delete(`/streams/${id}`);
  dispatch({ type: streamActionTypes.DELETE_STREAM, payload: id });
};
