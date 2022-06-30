import { SinglePost } from "../home/components/SinglePost";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { openLoader, closeLoader } from "../profile/profileModalSlice";
import { Loader } from "../../components";
import { useEffect } from "react";

const Feed = () => {
  const { allPosts } = useSelector((state) => state.post);
  const { user } = useSelector((state) => state.auth);
  const { loader } = useSelector(state => state.profileModal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(openLoader());
    setTimeout(() => dispatch(closeLoader(), 1000))
  },[])

  const [trendingPost, setTrendingPost] = useState({
    posts: [],
    isTrending: false,
  });

  const feed = allPosts
    .filter((item) => item.username === user.username)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  const trendingHandler = () => {
    dispatch(openLoader());
    setTrendingPost((prev) => ({ ...prev, isTrending: true }));
    setTrendingPost((prev) => ({
      ...prev,
      posts: [...feed]
        .sort((a, b) => b.likes.likeCount - a.likes.likeCount)
        .filter((post) => post.likes.likeCount > 0),
    }));
    dispatch(closeLoader());
  };

  const latestPostHandler = () => {
    setTrendingPost((prev) => ({ ...prev, isTrending: false }));
  };

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <div className="bg-white flex w-full xl:w-full h-13 flex-col">
          <div className="rounded-md shadow flex justify-between items-center  bg-white">
            <div className="w-1/2">
              <button
                onClick={() => trendingHandler()}
                className="border w-full px-4 py-2 cursor-pointer hover:opacity-50"
              >
                Trending
              </button>
            </div>
            <div className="w-1/2">
              <button
                onClick={() => latestPostHandler()}
                className="border w-full px-4 py-2 cursor-pointer hover:opacity-50"
              >
                Latest
              </button>
            </div>
          </div>
          {trendingPost.isTrending ? (
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
              {feed.length > 0 ? (
                feed.map((post) => <SinglePost key={post._id} post={post} />)
              ) : (
                <div>No trending</div>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export { Feed };
