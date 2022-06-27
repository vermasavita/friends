import { SinglePost } from "../home/components/SinglePost";
import { UserProfile } from "./components/UserProfile";
import { useSelector } from "react-redux";
const Profile = () => {
  const { userPosts } = useSelector((state) => state.post);

  return (
    <div className="w-4/5 xl:w-full px-1 h-full ">
      <UserProfile />
      {userPosts.length > 0 ? (
        userPosts.map((post) => <SinglePost key={post._id} post={post} />)
      ) : (
        <div>
          <h1>No Post</h1>
        </div>
      )}
    </div>
  );
};

export { Profile };
