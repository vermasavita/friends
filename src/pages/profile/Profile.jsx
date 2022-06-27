import { SinglePost } from "../home/components/SinglePost";
import { UserProfile } from "./components/UserProfile";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserPost } from "../home/postSlice";
const Profile = () => {
  const dispatch = useDispatch();
  const { allPosts } = useSelector((state) => state.post);
  const { user } = useSelector((state) => state.auth);
  console.log(allPosts);
  useEffect(() => {
    dispatch(getUserPost(user.username));
  }, [allPosts]);

  return (
    <div className="w-4/5 xl:w-full px-1 h-full ">
      <UserProfile />
      {/* <SinglePost/> */}
    </div>
  );
};

export { Profile };
