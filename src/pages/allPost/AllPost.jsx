import { SinglePost } from "../home/components/SinglePost";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../../components";
import { useEffect } from "react";
import { openLoader, closeLoader } from "../profile/profileModalSlice"
const AllPost = () => {
  const { allPosts } = useSelector((state) => state.post);
  const { loader } = useSelector(state => state.profileModal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(openLoader());
    setTimeout(() => dispatch(closeLoader(), 1000))
  },[])

  return (
    <div className="w-5/6 xl:w-full px-1">
      {loader ? (
        <Loader />
      ) : (
        <div className="flex flex-col">
          {allPosts.length !== 0 ? (
            [...allPosts]
              .reverse()
              .map((post) => <SinglePost key={post._id} post={post} />)
          ) : (
            <></>
          )}
        </div>
      )}
    </div>
  );
};

export { AllPost };
