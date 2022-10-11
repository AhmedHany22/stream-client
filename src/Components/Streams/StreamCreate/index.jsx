import "./StreamCreate.css";

import { connect } from "react-redux";
import { createStream } from "./../../../Redux/Stream/Stream_ActionCreator";

import StreamForm from "../StreamForm";

const StreamCreate = (props) => {
  const onSubmit = (formValues) => {
    props.createStream(formValues);
  };

  return (
    <div className="FormContainer">
      {/* handleSubmit prevents default & send the fields values instead of event OBJ*/}
      <StreamForm onSubmit={onSubmit} />
    </div>
  );
};

export default connect(null, { createStream })(StreamCreate);
