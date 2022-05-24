const Sidebar = () => {
  return (
      <div
        className={`xl:w-1/3 sticky top-0 mr-3 px-10 h-fit sidebar md:fixed md:min-w-full md:mr-0 md:px-0 md:bg-slate-500 md:h-13 `}
      >
        <div className="flex title items-center justify-start mt-3 xl:justify-center md:mt-0">
          <span className="text-3xl font-bold md:hidden">Friends</span>
        </div>
        <div className=" flex justify-end  md:justify-between">
          <ul className=" lg:w-4/5 md:flex md:justify-between md:items-center md:m-0 sidebarlist">
            <li className="py-2 text-xl flex gap-3 items-center px-3 hover:bg-white cursor-pointer rounded-md mb-3 mt-3 md:py-0">
              <i class="bx bxs-home "></i>
              <span className="md:hidden">Feed</span>
            </li>
            <li className="py-2 text-xl flex gap-2 items-center px-3 hover:bg-white shadow-current cursor-pointer rounded-md mb-3 md:mb-0">
              <i class="bx bxs-compass"></i>
              <span className="md:hidden">Explore</span>
            </li>
            <li className="py-2 text-xl flex gap-2 items-center px-3 hover:bg-white shadow-current cursor-pointer rounded-md mb-3 md:mb-0">
              <i class="bx bxs-bookmark-star"></i>
              <span className="md:hidden">Bookmark</span>
            </li>
            <li className="py-2 text-xl flex gap-2 items-center px-3 hover:bg-white shadow-current cursor-pointer rounded-md mb-3 md:mb-0">
              <i class="bx bxs-user-circle"></i>
              <span className="md:hidden">Profile</span>
            </li>
            <li className="py-2 text-xl flex gap-2 items-center px-3 hover:bg-white shadow-current cursor-pointer rounded-md mb-3 md:mb-0">
              <i class="bx bx-log-out"></i>
              <span className="md:hidden">Logout</span>
            </li>
            <li className="py-2 justify-center bg-blue-400 text-white text-xl flex gap-2 items-center px-3 cursor-pointer rounded-md mb-3 md:hidden">
              Post
            </li>
          </ul>
        </div>
      </div>
  );
};

export { Sidebar };
