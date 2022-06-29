import { useDispatch, useSelector } from "react-redux";

const Follow = () => {
  const dispatch = useDispatch();
  const { allUsers } = useSelector((state) => state.user);
  const { user } = useSelector((state) => state.auth);

  const suggestedUser = allUsers
    .filter((item) => item.username !== user.username)
    .filter(
      (item) => !user.following.find((itemTwo) => itemTwo._id === item._id)
    );

  const followerHandler = () => {
    
  }
  return (
    <div className="w-1/4 px-2 pb-2 xl:w-1/3 lg:hidden sticky top-0 h-fit">
      <div className="mx-4 mt-4 bg-white rounded-md shadow border">
        <h1 className="py-4 font-semibold px-3">Who to follow</h1>
        {suggestedUser.length > 0 ? (
          suggestedUser.map((suggestedUser) => (
            <>
              <div
                key={suggestedUser._id}
                className="flex border-t-2 py-2 px-2 hover:bg-slate-50"
              >
                <div className="w-1/6">
                  <img
                    className="h-9 w-9 rounded-full self-cente cursor-pointer object-cover "
                    src={suggestedUser.avatar}
                  />
                </div>
                <div className="flex justify-between w-5/6 cursor-pointer ">
                  <div className="flex flex-col cursor-pointer">
                    <span className="text-sm font-semibold">{`${suggestedUser.firstName} ${suggestedUser.lastName}`}</span>
                    <span className="text-xs">{suggestedUser.username}</span>
                  </div>
                  <button onClick={() => followerHandler()}className="py-1 border px-3 bg-black rounded-md text-white">
                    + Follow
                  </button>
                </div>
              </div>
            </>
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export { Follow };
