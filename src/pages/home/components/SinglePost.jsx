import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { openPostCardModal } from "../../../components/postCardModal/postCardModalSlice";

const SinglePost = ({ post }) => {
  const dispatch = useDispatch;
  const [editPost, setEditPost] = useState("");
  const { allUsers } = useSelector((state) => state.user);
  const { user } = useSelector((state) => state.auth);
  const userInfo =
    allUsers && allUsers?.find((user) => user.username === post.username);

  
  return userInfo ? (
    <div
      className="bg-blue-50 flex flex-col px-5 py-3 rounded-md shadow w-full mt-3 "
      key={post._id}
    >
      <div className="flex cursor-pointer">
        <div className="w-13">
          <img
            src={
              user.username === userInfo?.username
                ? user.avatar
                : userInfo.avatar
            }
            className="h-11 w-12 object-cover rounded-full sm:h-10 sm:w-11"
          />
        </div>
        <div className="flex justify-between mx-1 px-1 w-full items-center">
          <div className="flex flex-col">
            <div className="flex gap-2 items-center">
              <span className="text-md font-semibold">{`${userInfo.firstName} ${userInfo.lastName}`}</span>
              <span className="text-sm text-gray-500">@{post.username}</span>
            </div>
            <small className="text-gray-400">2022/2/2 2:00</small>
          </div>
          {user.username === post.username && (
            <div
              onClick={() => setEditPost(!editPost)}
              className="flex justify-centera items-center py-1 px-1 hover:rounded-full hover:bg-slate-200 cursor-pointer relative"
            >
              <i className="bx bx-dots-vertical-rounded"></i>
              {editPost && (
                <ul className="rounded-md w-32 bg-white absolute m-0 top-7 right-4 text-sm text-gray-500 flex flex-col p-1">
                  <li onClick={() => dispatch(openPostCardModal())} className="text-black hover:bg-blue-50 rounded-sm mb-2 p-1 flex gap-2 items-center">
                    <i className="bx bxs-edit-alt"></i>
                    <span>Edit</span>
                  </li>
                  <li className="text-black hover:bg-blue-50 rounded-sm p-1 flex gap-2 items-center">
                    <i className="bx bxs-trash-alt"></i>
                    <span>Delete</span>
                  </li>
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="my-3">
        <div>
          <p className="text-gray-600 break-all">{post.content}</p>
        </div>
        <div className=" text-gray-600 flex gap-4 mt-4 cursor-pointer text-sm ">
          <span className="flex items-center gap-1">
            <i className="bx bx-heart text-base"></i>
          </span>
          <span className="flex items-center gap-1">
            <i className="bx bx-bookmark"></i>
            Bookmark
          </span>
        </div>
      </div>
      <div className="flex">
        <img
          className="h-8 w-8 object-cover rounded-full"
          src={userInfo.avatar}
        />
        <div className=" border-gray-200 self-center px-2 py-1 ml-3 border-solid border grow flex space-between items-center rounded-md bg-blue-50">
          <input
            type="text"
            className="grow focus:outline-none sm:text-sm bg-blue-50"
            placeholder="Add a comment"
          />
          <button className="text-cyan-800">Post</button>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export { SinglePost };
