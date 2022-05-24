const UserProfile = () => {
  return (
    <div className="bg-white flex flex-col px-2 py-2 rounded-md shadow w-full mt-3">
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687"
                alt=""
                className="h-14 w-14 object-cover rounded-full sm:h-12 sm:w-12"
              />
              <button className=" border rounded-md px-2 py-1 hover:bg-slate-200 cursor-pointer">
                Edit
              </button>
            </div>

            <span className="text-lg font-semibold mt-2">Savita Verma</span>
            <span className="text-sm text-gray-500">@username</span>
            <div className="font-semibold text-gray-500 mt-3">
              This is space for bio
            </div>
            <div className="text-sm text-blue-400">
              https://twitter.com/say_saver
            </div>
            <div className="font-semibold text-gray-500 mt-3 flex gap-5">
              <span>0 Posts</span>
              <span>0 Followers</span>
              <span>0 Following</span>
            </div>
          </div>
    </div>
  );
};

export { UserProfile };
