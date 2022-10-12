import { useParams } from "react-router-dom";
import { useSelector, connect } from "react-redux";

import { fetchStream } from "./../../../Redux/Stream/Stream_ActionCreator";

const StreamShow = (props) => {
  let { id } = useParams();
  const stream = useSelector((state) => state.stream[id]);

  return (
    <div className="FormContainer pb-10">
      <h1>Stream : {stream.title}</h1>
    </div>
  );
};

export default connect(null, { fetchStream })(StreamShow);
