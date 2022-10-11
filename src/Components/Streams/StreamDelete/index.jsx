import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, connect } from "react-redux";
import { BsExclamationCircle } from "react-icons/bs";
import { RiCloseLine } from "react-icons/ri";

import {
  fetchStream,
  deleteStream,
} from "./../../../Redux/Stream/Stream_ActionCreator";

const StreamDelete = (props) => {
  const navigate = useNavigate();
  let { id } = useParams();
  const stream = useSelector((state) => state.stream[id]);

  const onCancle = (stream) => navigate(-1);

  const onDelete = () => {
    props.deleteStream(id);
    navigate("/");
  };

  useEffect(() => {
    props.fetchStream(id);
  }, []);

  return ReactDOM.createPortal(
    <div className="relative z-10" onClick={onCancle}>
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div
            className="relative bg-white rounded-lg shadow dark:bg-gray-700"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            >
              <RiCloseLine className="text-2xl" />
              <span className="sr-only">Close modal</span>
            </button>
            <div className="p-6 text-center">
              <BsExclamationCircle className="mx-auto text-5xl mb-6 text-gray-500" />
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Are you sure you want to delete the stream : {stream.title} ?
              </h3>
              <button
                type="button"
                className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                onClick={onDelete}
              >
                Yes, I'm sure
              </button>
              <button
                onClick={onCancle}
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >
                No, cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default connect(null, {
  fetchStream,
  deleteStream,
})(StreamDelete);
