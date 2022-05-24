const SinglePost = () => {
  return (
    <div className="bg-white flex flex-col px-3 py-2 rounded-md shadow w-full mt-3">
      <div className="flex cursor-pointer">
        <div className="w-13">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687"
            alt=""
            className="h-11 w-12 object-cover rounded-full sm:h-10 sm:w-11"
          />
        </div>

        <div className="flex justify-between mx-1 px-1 w-full items-center">
          <div className="flex gap-1 items-center ">
            <span className="text-lg font-semibold">Savita Verma</span>
            <span className="text-sm text-gray-500">@username</span>
          </div>
          <div className="flex justify-centera items-center py-1 px-1 hover:rounded-full hover:bg-slate-200 cursor-pointer">
            <i className="bx bx-dots-vertical-rounded"></i>
          </div>
        </div>
      </div>
      <div className="my-3">
        <div>
          <p className="text-gray-600 break-all">
            Content will come here Content will come here Content will come here
            Content will come here
          </p>
        </div>
        <div className=" text-gray-600 flex gap-4 mt-4 cursor-pointer text-sm ">
          <span className="flex items-center gap-1">
            <i className="bx bx-heart text-base"></i>
            Like
          </span>
          <span className="flex items-center gap-1">
            <i className="bx bx-bookmark"></i>
            Bookmark
          </span>
        </div>
      </div>
      <div className="flex">
        <img
          className="h-8 w-8 object-cover rounded-full"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687"
          alt=""
        />
        <div className=" border-gray-200 self-center px-2 py-1 ml-3 border-solid border grow flex space-between items-center rounded-md ">
          <input
            type="text"
            className="grow focus:outline-none sm:text-sm "
            placeholder="Add a comment"
          />
          <button className="text-blue-400">Post</button>
        </div>
      </div>
    </div>
  );
};

export { SinglePost };
