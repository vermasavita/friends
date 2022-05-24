const Follow = () => {
  return (
    <div className="w-1/4 px-2 pb-2 xl:w-1/3 lg:hidden sticky top-0 h-fit">
      <div className="mx-4 mt-4 bg-white rounded-md shadow">
        <h1 className="py-4 font-semibold px-3">Who to follow</h1>
        <div className="flex gap-5 border-t-2 py-2 px-2 hover:bg-slate-50">
            <img
              className="h-9 w-9 rounded-full self-cente cursor-pointer object-cover "
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687"
            />
          <div className="flex flex-col cursor-pointer">
            <span className="text-sm font-semibold">User Name</span>
            <span className="text-xs">username</span>
          </div>
          <button className="py-1 border px-3 bg-black rounded-md text-white">
            Follow
          </button>
        </div>
        <div className="flex gap-5 border-t-2 py-2 px-2 hover:bg-slate-50">
          <img
            className="h-9 w-9 rounded-full self-cente cursor-pointer object-cover"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687"
          />
          <div className="flex flex-col cursor-pointer">
            <span className="text-sm font-semibold">User Name</span>
            <span className="text-xs">username</span>
          </div>
          <button className="py-1 border px-3 bg-black rounded-md text-white">
          Follow
          </button>
        </div>
        <div className="flex gap-5 border-t-2 py-2 px-2 hover:bg-slate-50">
          <img
            className="h-9 w-9 rounded-full self-cente cursor-pointer object-cover"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687"
          />
          <div className="flex flex-col cursor-pointer">
            <span className="text-sm font-semibold">User Name</span>
            <span className="text-xs">username</span>
          </div>
          <button className="py-1 border px-3 bg-black rounded-md text-white">
            Follow
          </button>
        </div>
        <div className="flex gap-5 border-t-2 py-2 px-2 hover:bg-slate-50">
          <img
            className="h-9 w-9 rounded-full self-cente cursor-pointer object-cover"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687"
          />
          <div className="flex flex-col cursor-pointer">
            <span className="text-sm font-semibold">User Name</span>
            <span className="text-xs">username</span>
          </div>
          <button className="py-1 border px-3 bg-black rounded-md text-white">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
};

export { Follow };
