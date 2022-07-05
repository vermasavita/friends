const Search = () => {
  return (
    <div className="bg-sky-50 flex flex-col w-5/6 ll search xl:w-full h-13 sticky top-0 mb-2">
      <div className="bg-white my-3 py-2 w-full h-10s  shadow rounded-md border">
        <div className=" w-full sm:w-11/12  ">
          <i className="bx bx-search-alt-2 text-lg px-2 cursor-pointer "></i>
          <input
            type="text"
            className="focus:outline-none grow sm:text-sm w-3/4"
            placeholder="Functionality on hold for now"
          />
        </div>
      </div>
    </div>
  );
};

export { Search };
