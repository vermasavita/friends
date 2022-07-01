import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { openLoader, closeLoader } from "./profileModalSlice";
import { Loader } from "../../components";
import { useParams } from "react-router-dom";
import { getUserHandler } from "./userSlice";
import { SinglePost } from "../home/components/SinglePost";
const AnyProfile = () => {
  const dispatch = useDispatch();
  const { loader } = useSelector((state) => state.profileModal);
  const { followUserId } = useParams();
  const { user } = useSelector((state) => state.auth);
  const { allPosts, userPosts } = useSelector((state) => state.post);
  const [indvidualUser, setIndividualUser] = useState({});
  const { allUsers } = useSelector((state) => state.user);

  console.log(followUserId, allPosts, userPosts, )
//   useEffect(() => {
//     setIndividualUser(allUsers.find((item) => item.username === followUserId));
//   }, [allUsers, followUserId]),

//   console.log(followUserId)
//   useEffect(() => {
//     dispatch(openLoader());
//     setTimeout(() => dispatch(closeLoader()), 1000);
//   }, []);



//     useEffect(() => {
//       dispatch(getUserHandler(indvidualUser?.username));
//     }, [indvidualUser, allPosts]);

  return indvidualUser?.username(
    <div className="w-full xl:w-full px-1 mb-8">
      {loader ? (
        <Loader />
      ) : (
        <div className="w-full">
          <div
            className="bg-white  flex flex-col px-2 py-2 rounded-md  w-full mt-3"
            key={indvidualUser._id}
          >
            <div className="flex flex-col items-center">
              <div className="flex justify-between items-center">
                <img
                  src={indvidualUser.avatar}
                  className="h-20 w-20 object-cover rounded-full sm:h-16 sm:w-16"
                />
              </div>

              <span className="text-lg font-semibold mt-2">{`${indvidualUser.firstName} ${indvidualUser.lastName}`}</span>
              <span className="text-sm text-gray-500">
                @{indvidualUser.username}
              </span>
              <button
                className="mt-5 border rounded-md px-6 py-1 bg-cyan-800 text-white active:bg-slate-200 active:text-black cursor-pointer"
              >
                Edit
              </button>
              <div className="font-semibold text-gray-500 mt-3">
                {indvidualUser.bio}
              </div>
              <div className="text-sm text-blue-600">{indvidualUser.website}</div>

              <div className="font-semibold text-gray-500 mt-3 flex gap-5">
                <span>{indvidualUser.length} Posts</span>
                <span>{indvidualUser.followers.length} Followers</span>
                <span >
                  {indvidualUser?.following.length} Following
                </span>
              </div>
            </div>
          </div>
          {userPosts.length > 0 ? (
            [...userPosts]
              .reverse()
              .map((post) => <SinglePost key={post._id} post={post} />)
          ) : (
            <div className="text-center font-bold text-lg mt-10 text-slate-500">
              <h1>No Post</h1>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export { AnyProfile };
