import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addComment } from "../postSlice";

const Comment = ({ post }) => {
  const [showCommentAction, setShowCommentAction] = useState("");
  const { user, token } = useSelector((state) => state.auth);
  const [commentInput, setCommentInput] = useState({
    text: "",
  });

  const dispatch = useDispatch();

  const commentHandler = () => {
    if (commentInput.text.trim() !== "") {
      dispatch(
        addComment({
          postId: post._id,
          commentData: { text: commentInput.text },
          token: token,
        })
      );
      setCommentInput({text: ""});
    } else {
      toast("Comment something, it cannot be empty");
    }
  };
  return (
    <div>
      <div className="flex">
        <img className="h-8 w-8 object-cover rounded-full" src={user.avatar} />
        <div className=" gap-2 border-gray-200  px-2 py-1 ml-3 border-solid grow flex items-center rounded-md bg-white border">
          <input
            type="text"
            className="grow focus:outline-none sm:text-sm bg-white"
            placeholder="Add a comment"
            value={commentInput.text}
            onChange={(e) =>
              setCommentInput((prev) => ({ ...prev, text: e.target.value }))
            }
          />
        </div>
        <button
          className={`px-4 text-cyan-800 ${
            commentInput.text === "" &&
            "hover: cursor-not-allowed text-slate-400"
          }
            `}
          disabled={commentInput.text === "" ? true : false}
          onClick={() => commentHandler()}
        >
          Post
        </button>
      </div>
      {post.comments.map((item) => (
        <div
          key={item._id}
          className="flex py-3 pb-2 bg-white rounded-md justify-between items-center"
        >
          <div className="flex gap-3">
            <img
              className="h-8 w-8 object-cover rounded-full"
              src={item.username === user.username ? user.avatar : item.avatar}
            />
            <div className="text-black flex flex-col gap-1">
              <span className="text-md">{`${item.firstName} ${item.lastName}`}</span>
              <span className="text-sm text-slate-800">
                {item.commentData.text}
              </span>
            </div>
          </div>
          <div
            className="cursor-pointer relative"
            onClick={() => setShowCommentAction(!showCommentAction)}
          >
            <i className="bx bx-dots-vertical-rounded text-2xl"></i>
            {showCommentAction ? (
              <ul className="border rounded-md w-32 bg-white absolute m-0 top-7 right-4 text-sm text-gray-500 flex flex-col p-1">
                <li className="text-black hover:bg-blue-50 rounded-sm mb-2 p-1 flex gap-2 items-center">
                  <i className="bx bxs-edit-alt"></i>
                  <span>Edit</span>
                </li>
                <li className="text-black hover:bg-blue-50 rounded-sm p-1 flex gap-2 items-center">
                  <i className="bx bxs-trash-alt"></i>
                  <span>Delete</span>
                </li>
              </ul>
            ) : (
              <></>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export { Comment };
