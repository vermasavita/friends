// import { SinglePost } from "../home/components/SinglePost";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { openLoader, closeLoader } from "./profileModalSlice";
// import { Loader } from "../../components";
const IndividualUserProfile = () => {
//   const { userPosts } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const [ individualUser, setIndividualUser ] = useState({});
//   const { loader } = useSelector((state) => state.profileModal);

//   useEffect(() => {
//     dispatch(openLoader());
//     setTimeout(() => dispatch(closeLoader()), 1000);
//   }, []);

  return (
    <div className="w-5/6 xl:w-full px-1 mb-8">
      {/* {loader ? (
        <Loader />
      ) : ( */}
        <div className="w-full">
          <div
            className="bg-sky-100  flex flex-col px-2 py-2 rounded-md  w-full mt-3"
          >
            <div className="flex flex-col items-center">
              <div className="flex justify-between items-center h-20 w-20 rounded-full">
                <img
                  src= ""
                  className="h-18 w-20 object-cover rounded-full sm:h-16 sm:w-16 border-0"
                />
              </div>

              <span className="text-xl font-semibold mt-2">firstName lastName</span>
              <span className="text-sm text-gray-500">
                @username
              </span>
              <button
                className="mt-5 border rounded-md px-6 py-1.5 bg-rose-600 text-white active:bg-slate-200 active:text-black cursor-pointer"
              >
                Edit
              </button>
              <div className="font-semibold text-gray-500 mt-3">
                bio
              </div>
              <div className="text-sm text-blue-600">website</div>

              <div className="font-semibold text-gray-500 mt-3 flex gap-5">
                <span>0 Posts</span>
                <span>0 Followers</span>
                <span
                  className="cursor-pointer border-b-5"
                >
                  0 Following
                </span>
              </div>
            </div>
          </div>
          {/* {userPosts.length > 0 ? (
            [...userPosts]
              .reverse()
              .map((post) => <SinglePost key={post._id} post={post} />)
          ) : (
            <div className="text-center font-bold text-lg mt-10 text-slate-500">
              <h1>No Post</h1>
            </div>
          )} */}
        </div>
      {/* )} */}
    </div>
  );
};

export { IndividualUserProfile };
