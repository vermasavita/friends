import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SinglePost = ({ post }) => {
  const dispatch = useDispatch;
  const navigate = useNavigate();
  const { allUsers } = useSelector((state) => state.user);
  const { user } = useSelector((state) => state.auth);
  const userInfo =
    allUsers && allUsers?.find((user) => user.username === post.username);

  return userInfo ? (
    <div
      className="bg-white flex flex-col px-6 py-4 rounded-md shadow w-full mt-3 "
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
          <div className="flex gap-2 items-center ">
            <span className="text-lg font-semibold">{`${userInfo.firstName} ${userInfo.lastName}`}</span>
            <span className="text-sm text-gray-500">@{post.username}</span>
          </div>
          <div className="flex justify-centera items-center py-1 px-1 hover:rounded-full hover:bg-slate-200 cursor-pointer">
            <i className="bx bx-dots-vertical-rounded"></i>
          </div>
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
          alt=""
        />
        <div className=" border-gray-200 self-center px-2 py-1 ml-3 border-solid border grow flex space-between items-center rounded-md ">
          <input
            type="text"
            className="grow focus:outline-none sm:text-sm "
            placeholder="Add a comment"
          />
          <button className="text-blue-400">Post</button>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export { SinglePost };
