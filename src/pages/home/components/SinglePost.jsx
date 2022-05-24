const SinglePost = () => {
  return (
    <div className="bg-white flex flex-col  px-3 py-2 mb-4 rounded-md shadow w-full mt-4 border ">
      <div className="flex py-2">
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687"
          alt=""
          className="h-11 w-11 object-cover rounded-full sm:h-7 sm:w-7"
        />
        <div className="flex justify-between px-2 w-full items-center">
          <div className="flex gap-1 items-center ">
            <span className="text-lg font-semibold">User Name</span>
            <span className="text-sm text-gray-500">@username</span>
          </div>
          <div className="grow pt-4 sm:pt-2">
            <i class="bx bx-dots-vertical-rounded"></i>
          </div>
        </div>
      </div>
      <div>
        <div>
          <p className="text-gray-600 break-all">Content will come here</p>
        </div>
        <div className=" text-gray-600 flex gap-4 mt-3 my-4 cursor-pointer text-sm">
          <i class="bx bx-heart">Like</i>
          <i class="bx bx-bookmark">Bookmark</i>
        </div>
      </div>
      <div className="flex">
          <img className="h-8 w-8 object-cover rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687" alt="" />
          <div className=" border-gray-400 self-center px-2 py-1 border-solid border grow flex space-between items-center rounded-md ">
              <input type="text" className="grow focus:outline-none sm:text-sm" />
              <button className="text-blue-400">Post</button>
          </div>
      </div>
    </div>
  );
};

export { SinglePost };
