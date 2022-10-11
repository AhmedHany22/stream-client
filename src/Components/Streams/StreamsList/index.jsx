import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../../Redux/Stream/Stream_ActionCreator";
import CardIcon from "../../CardIcon";
import "./StreamsList.css";

const StreamsList = (props) => {
  useEffect(() => {
    props.fetchStreams();
  }, []);

  const renderList = () => {
    return props.streams.map((stream) => {
      return <CardIcon key={stream.id} stream={stream} />;
    });
  };

  return (
    <div className="ListRouteContainer">
      <div className="ListContainer">{renderList()}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { streams: Object.values(state.stream) };
};

export default connect(mapStateToProps, { fetchStreams })(StreamsList);
