import { ImEye } from "react-icons/im";
import { RiDeleteBin2Line } from "react-icons/ri";
import {
  FaComments,
  FaRegThumbsUp,
  FaRegThumbsDown,
  FaRegUser,
  FaRegCalendar,
  FaEdit,
} from "react-icons/fa";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const CardIcon = ({ stream, currentUserId }) => {
  return (
    <div className="mb-5 px-2">
      <div className="relative">
        <div className="overflow-hidden rounded-t relative text-white text-xs">
          <Link to={`/stream/${stream.id}`}>
            <img
              src="https://streamtube.marstheme.com/wp-content/uploads/2021/08/maxresdefault-1-768x432.jpg"
              alt="Stream"
              className="w-fit rounded transition ease-in-out bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-700"
            />
            <div className="absolute inline-block top-2 right-2 rounded bg-neutral-900/70 font-bold py-0.5 px-1.5">
              00:15
            </div>
          </Link>
          <div className="absolute inline-block top-2 left-2 w-20 text-center">
            <div className="py-0.5 mb-2.5 rounded bg-neutral-900/70">
              <a href="/">
                <FaComments className="inline-block mb-1 mr-1" />
                <span>1</span>
              </a>
            </div>
            <div className="py-0.5 mb-2.5 rounded bg-neutral-900/70">
              <div className="flex flex-row">
                <button className="basis-1/2">
                  <FaRegThumbsUp className="inline-block mb-1 mr-1" />
                  <span>1</span>
                </button>
                <button className="basis-1/2">
                  <FaRegThumbsDown className="inline-block mb-1 mr-1" />
                  <span>1</span>
                </button>
              </div>
            </div>
          </div>
          {currentUserId === stream.userId ? (
            <div className="absolute inline-block bottom-2 right-2 text-center">
              <div className="py-0.5 mb-2.5 rounded bg-neutral-900/70">
                <div className="flex flex-row">
                  <Link className="px-1.5" to={`/stream/edit/${stream.id}`}>
                    <FaEdit className="inline-block mb-1 mr-1" />
                    <span>Edit</span>
                  </Link>
                  <Link className="px-1.5" to={`/stream/delete/${stream.id}`}>
                    <RiDeleteBin2Line className="inline-block mb-1 mr-1" />
                    <span>Delete</span>
                  </Link>
                </div>
              </div>
            </div>
          ) : null}
        </div>
        <div className="mt-3 flex flex-row">
          <div className="w-10 mr-1.5">
            <a href="/">
              <img
                src="https://streamtube.marstheme.com/wp-content/uploads/2021/08/avatar-9-150x150.jpg"
                alt="Avatar"
                className="border-2 rounded-full border-zinc-800"
              />
            </a>
          </div>
          <div className="grow text-white">
            <h2 className="font-semibold text-sm mb-1.5">
              <Link to={`/stream/${stream.id}`}>{stream.title}</Link>
            </h2>
            <div className="flex flex-col text-xs text-neutral-400">
              <div className="mb-2.5 mr-2.5">
                <FaRegUser className="inline-block mb-1 mr-1" />
                <span>Alden</span>
              </div>
              <div className="flex flex-row gap-4">
                <div className="whitespace-nowrap">
                  <ImEye className="inline-block mb-1 mr-1" />
                  <span>279 views</span>
                </div>
                <div className="whitespace-nowrap">
                  <FaRegCalendar className="inline-block mb-1 mr-1" />
                  <time dateTime="2021-09-02 06:18:27" className="date">
                    1 year
                  </time>{" "}
                  ago
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { currentUserId: state.auth.id };
};

export default connect(mapStateToProps)(CardIcon);
