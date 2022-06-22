import { useDispatch, useSelector } from "react-redux";
import { closePostCardModal } from "../postCardModal/postCardModalSlice";
import "./postCardModal.css";

const PostCardM = () => {
  const dispatch = useDispatch();
  const { postCardModal, postCardContent } = useSelector(
    (state) => state.postCardModal
  );
  return (
    <div
      className={`container fixed justify-center items-center ${
        postCardModal ? "flex" : "hidden"
      }`}
    >
      <div className="w-1/4 bg-white p-3 flex flex-col rounded-lg sm:w-full sm:mx-2 md:w-3/4">
        <div className="flex items-center justify-between ">
          <h2 className="text-lg">Add Post</h2>
          <button
            className=" border-blue-400 px-1.5"
            onClick={() => dispatch(closePostCardModal())}
          >
            <i className="bx bx-x text-lg"></i>
          </button>
        </div>
        <textarea
          placeholder="What's on your mind..."
          className="focus:outline-none border rounded-lg p-2 mt-4"
        ></textarea>
        <div className="w-full mt-4 rounded-lg bg-blue-400 text-white">
          <button className="w-full rounded-lg py-1">Post</button>
        </div>
      </div>
    </div>
  );
};

export { PostCardM };
