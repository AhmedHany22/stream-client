import streams from "../../Api/streams";
import streamActionTypes from "./Stream_ActionTypes";

export const createStream = (formValues) => async (dispatch) => {
  const response = await streams.post("/streams", formValues);
  dispatch(streamActionTypes.CREATE_STREAM, { payload: response.data });
};

export const fetchStreams = () => async (dispatch) => {
  const response = await streams.get("/streams");
  dispatch(streamActionTypes.FETCH_STREAMS, { payload: response.data });
};

export const fetchStream = (id) => async (dispatch) => {
  const response = await streams.get(`/streams/${id}`);
  dispatch(streamActionTypes.FETCH_STREAM, { payload: response.data });
};

export const editStream = (id, formValues) => async (dispatch) => {
  const response = await streams.put(`/streams/${id}`, formValues);
  dispatch(streamActionTypes.EDIT_STREAM, { payload: response.data });
};

export const deleteStream = (id) => async (dispatch) => {
  await streams.delete(`/streams/${id}`);
  dispatch(streamActionTypes.DELETE_STREAM, { payload: id });
};
