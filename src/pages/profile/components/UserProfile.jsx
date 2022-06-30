import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserPost } from "../../home/postSlice";
import { openEditProfileModal } from "../profileModalSlice";
import "../../../components/postCardModal/postCardModal.css";
import { getUserHandler } from "../userSlice";
const UserProfile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { authUser } = useSelector((state) => state.user);
  const { allPosts } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getUserPost(user.username));
  }, [allPosts]);

  useEffect(() => {
    dispatch(getUserHandler(user._id));
  }, [user]);

  return (
    <div
      className="bg-white  flex flex-col px-2 py-2 rounded-md  w-full mt-3"
      key={authUser._id}
    >
      <div className="flex flex-col items-center">
        <div className="flex justify-between items-center">
          <img
            src={authUser.avatar}
            className="h-20 w-20 object-cover rounded-full sm:h-16 sm:w-16"
          />
        </div>

        <span className="text-lg font-semibold mt-2">{`${authUser.firstName} ${authUser.lastName}`}</span>
        <span className="text-sm text-gray-500">@{authUser.username}</span>
        <button
          onClick={() => dispatch(openEditProfileModal())}
          className="mt-5 border rounded-md px-6 py-1 bg-cyan-800 text-white active:bg-slate-200 active:text-black cursor-pointer"
        >
          Edit
        </button>
        <div className="font-semibold text-gray-500 mt-3">{authUser.bio}</div>
        <div className="text-sm text-blue-600">{authUser.website}</div>

        <div className="font-semibold text-gray-500 mt-3 flex gap-5">
          <span>0 Posts</span>
          <span>{authUser.followers} Followers</span>
          <span>{authUser.following} Following</span>
        </div>
      </div>
    </div>
  );
};

export { UserProfile };
