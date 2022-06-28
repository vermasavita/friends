import { SinglePost } from "../home/components/SinglePost";
import { useSelector } from "react-redux";
const AllPost = () => {
  const { allPosts } = useSelector((state) => state.post);

  return (
    <div className="w-4/5 xl:w-full px-1">
      <div className="flex flex-col">
        {allPosts.length !== 0 ? (
          allPosts.map((post) => <SinglePost key={post._id} post={post} />)
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export { AllPost };
