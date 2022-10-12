import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useSelector, connect } from "react-redux";
import flv from "flv.js";

import { fetchStream } from "./../../../Redux/Stream/Stream_ActionCreator";
import Spinner from "../../Spinner";

const StreamShow = (props) => {
  let { id } = useParams();
  const stream = useSelector((state) => state.stream[id]);

  const videoRef = useRef();
  let player = null;

  const buildPlayer = () => {
    if (stream) {
      player = flv.createPlayer({
        type: "flv",
        url: `http://localhost:8000/live/${stream.id}.flv`,
      });
      player.attachMediaElement(videoRef.current);
      player.load();
    }
  };

  useEffect(() => {
    props.fetchStream(id);
    buildPlayer();

    return () => {
      if (player) {
        player.destroy();
      }
    };
  }, []);

  useEffect(() => {
    buildPlayer();
  }, [stream]);

  if (!stream) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="FormContainer pb-10">
      <video ref={videoRef} className="w-1/2" controls />
      <h1>Stream : {stream.title}</h1>
    </div>
  );
};

export default connect(null, { fetchStream })(StreamShow);
