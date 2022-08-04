import { SinglePost } from "../home/components/SinglePost";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { openLoader, closeLoader } from "../profile/profileModalSlice";
import { Loader } from "../../components";
import { useEffect } from "react";
import { getUserHandler } from "../profile/userSlice";

const Feed = () => {
  const { allPosts } = useSelector((state) => state.post);
  const { user } = useSelector((state) => state.auth);
  const { loader } = useSelector((state) => state.profileModal);
  const [feedPost, setFeedPost] = useState([]);
  const [trendingPost, setTrendingPost] = useState({
    posts: [],
    isTrending: false,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(openLoader());
    if (allPosts) {
      setFeedPost(
        allPosts
          .filter(
            (item) =>
              item?.username === user?.username ||
              user?.following?.find(
                (itemTwo) => itemTwo?.username === item?.username
              )
          )
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      );
    }
  }, [user, allPosts]);

  useEffect(() => {
    dispatch(getUserHandler(user._id));
    if(feedPost.length > 0){
      setTimeout(() => dispatch(closeLoader()), 1000)
    }
  }, [allPosts, feedPost]);

  const trendingHandler = () => {
    dispatch(openLoader());
    setTrendingPost((prev) => ({ ...prev, isTrending: true }));
    setTrendingPost((prev) => ({
      ...prev,
      posts: [...feedPost]
        .sort((a, b) => b.likes.likeCount - a.likes.likeCount)
        .filter((post) => post.likes.likeCount > 0),
    }));
    dispatch(closeLoader());
  };

  const latestPostHandler = () => {
    setTrendingPost((prev) => ({ ...prev, isTrending: false }));
  };

  return (
    <div className="bg-sky-50 feed-width flex w-5/6 xl:w-full h-13 flex-col ">
      <div className="rounded-md flex justify-between items-center gap-1 bg-sky-50">
        <div className="w-1/2 shadow rounded-md bg-white">
          <button
            onClick={() => trendingHandler()}
            className="border rounded-md w-full px-4 py-2 cursor-pointer hover:opacity-50"
          >
            Trending
          </button>
        </div>
        <div className="w-1/2 shadow rounded-md bg-white">
          <button
            onClick={() => latestPostHandler()}
            className="border w-full px-4 py-2 rounded-md cursor-pointer hover:opacity-50"
          >
            Latest
          </button>
        </div>
      </div>
      {/* <Loader /> */}
      {loader ? (
        <Loader />
      ) : trendingPost.isTrending ? (
        <div className="flex flex-col">
          {trendingPost.posts.length > 0 ? (
            [...trendingPost.posts].map((post) => (
              <SinglePost key={post._id} post={post} />
            ))
          ) : (
            <div>No trending</div>
          )}
        </div>
      ) : (
        <div className="flex flex-col">
          {feedPost.length > 0 ? (
            feedPost.map((post) => <SinglePost key={post._id} post={post} />)
          ) : (
            <div className="text-center font-bold text-lg mt-5 text-slate-500">
              No trending
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export { Feed };
