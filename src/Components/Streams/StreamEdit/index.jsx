import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, connect } from "react-redux";

import StreamForm from "../StreamForm";
import {
  fetchStream,
  editStream,
} from "./../../../Redux/Stream/Stream_ActionCreator";

const StreamEdit = (props) => {
  let { id } = useParams();
  const stream = useSelector((state) => state.stream[id]);

  const onSubmit = (formValues) => {
    props.editStream(id, formValues);
  };

  useEffect(() => {
    props.fetchStream(id);
  }, []);

  return (
    <div className="FormContainer">
      <h1>StreamEdit</h1>
      <StreamForm onSubmit={onSubmit} initialValues={stream} />
    </div>
  );
};

export default connect(null, { fetchStream, editStream })(StreamEdit);
