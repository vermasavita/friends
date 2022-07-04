import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  addComment,
  deleteComment,
  editComment,
  editPosts,
} from "../postSlice";

const Comment = ({ post }) => {
  const [showCommentAction, setShowCommentAction] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const { user, token } = useSelector((state) => state.auth);
  const [commentInput, setCommentInput] = useState({
    text: "",
    editText: "",
    commentId: "",
    editModal: false,
  });

  const dispatch = useDispatch();
  const commentHandler = () => {
    if (commentInput.text.trim() !== "") {
      setCommentInput((prev) => ({ ...prev, text: "" }));
      dispatch(
        addComment({
          postId: post._id,
          commentData: { text: commentInput.text },
          token: token,
        })
      );
    } else {
      toast("Comment something, it cannot be empty");
    }
  };

  const saveEditedComment = (commentId) => {
    if (commentInput.editText.trim() !== "") {
      setCommentInput((prev) => ({ ...prev, editModal: false, editText: "" }));
      dispatch(
        editComment({
          postId: post._id,
          commentId: commentId,
          commentData: { text: commentInput.editText },
          token: token,
        })
      );
    } else {
      toast("Comment something, it cannot be empty");
    }
  };

  const handler = (_id, commentId) => {
    if (_id === commentId) {
      setIsEdit(!isEdit);
    }
  };

  return (
    <div className="">
      <div className="flex mb-3 ">
        <img className="h-8 w-8 object-cover rounded-full" src={user.avatar} />
        <div className=" gap-2 border-gray-200  px-2 py-1 ml-3 border-solid grow flex items-center rounded-md bg-white">
          <input
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
          className="flex py-3 pb-2 bg-white rounded-md justify-between items-center w-full"
        >
          <div className="flex gap-3 w-full">
            <img
              className="h-8 w-8 object-cover rounded-full"
              src={item.username === user.username ? user.avatar : item.avatar}
            />
            <div className="text-black flex flex-col input w-full">
              <span className="text-md">{`${item.firstName} ${item.lastName}`}</span>
              {commentInput.editModal && item._id === commentInput.commentId ? (
                <div className="flex ">
                  <input
                    type="text"
                    value={commentInput.editText}
                    onChange={(e) =>
                      setCommentInput((prev) => ({
                        ...prev,
                        editText: e.target.value,
                      }))
                    }
                    className="border-b-2 mr-2 grow focus:outline-none text-sm text-slate-800 border-gray-400"
                  />
                  <span onClick={() => saveEditedComment(item._id)}>
                    <i className="bx bx-check p-0.5 rounded-full mr-2 cursor-pointer"></i>
                  </span>
                  <span
                    onClick={() =>
                      setCommentInput((prev) => ({
                        ...prev,
                        editModal: false,
                      }))
                    }
                  >
                    <i className="bx bx-x p-0.5 rounded-full cursor-pointer"></i>
                  </span>
                </div>
              ) : (
                <div className="border flex justify-between w-full widthe">
                  <span className="text-sm text-slate-800">{item.text}</span>
                  <div
                    className="rounded-full px-2 cursor-pointer relative"
                    onClick={() => setIsEdit(!isEdit)}
                  >
                    <i
                      className={`bx bx-dots-vertical-rounded opacity-60 border ${
                        commentInput.editModal && "hidden"
                      }`}
                    ></i>

                    {isEdit ? (
                      <ul className="border rounded-md bg-white absolute m-0 top-7 right-6 text-sm text-gray-500 flex flex-col p-1">
                        <li
                          onClick={() => {
                            setCommentInput((prev) => ({
                              ...prev,
                              editText: item.text,
                              commentId: item._id,
                              editModal: true,
                            }));
                          }}
                          className="text-black hover:bg-blue-50 rounded-sm mb-2 p-1 flex gap-2 items-center"
                        >
                          <i className="bx bxs-edit-alt"></i>
                          <span>Edit</span>
                        </li>
                        <li
                          onClick={() =>
                            dispatch(
                              deleteComment({
                                postId: post._id,
                                commentId: item._id,
                                token: token,
                              })
                            )
                          }
                          className="text-black hover:bg-blue-50 rounded-sm p-1 flex gap-2 items-center"
                        >
                          <i className="bx bxs-trash-alt"></i>
                          <span>Delete</span>
                        </li>
                      </ul>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              )}
            </div>
            {/* {item.username === user.username ? (
              <div
                className="rounded-full px-2 cursor-pointer relative"
                onClick={() => handler(item._id, commentInput.commentId)}
              >
                <i
                  className={`bx bx-dots-vertical-rounded opacity-60 border ${
                    commentInput.editModal && "hidden"
                  }`}
                ></i> */}

            {/* {isEdit ? (
                  <ul className="border rounded-md bg-white absolute m-0 top-7 right-6 text-sm text-gray-500 flex flex-col p-1">
                    <li
                      onClick={() => {
                        setCommentInput((prev) => ({
                          ...prev,
                          editText: item.text,
                          commentId: item._id,
                          editModal: true,
                        }));
                      }}
                      className="text-black hover:bg-blue-50 rounded-sm mb-2 p-1 flex gap-2 items-center"
                    >
                      <i className="bx bxs-edit-alt"></i>
                      <span>Edit</span>
                    </li>
                    <li
                      onClick={() =>
                        dispatch(
                          deleteComment({
                            postId: post._id,
                            commentId: item._id,
                            token: token,
                          })
                        )
                      }
                      className="text-black hover:bg-blue-50 rounded-sm p-1 flex gap-2 items-center"
                    > */}
            {/* <i className="bx bxs-trash-alt"></i>
                      <span>Delete</span>
                    </li>
                  </ul>
                ) : (
                  <></>
                )} */}
            {/* </div> */}
            {/* ) : (
              <></>
            )} */}
          </div>
        </div>
      ))}
    </div>
  );
};

export { Comment };
