const Search = () => {
  return (
    <div className="bg-blue-100 flex w-4/5 xl:w-full h-13 sticky top-0 mb-5 ">
      <div className="bg-white my-3 py-2 w-full h-10 xl:w-full search shadow mx-2 rounded-md">
        <div className=" w-full sm:w-11/12  ">
          <i className="bx bx-search-alt-2 text-lg px-2 cursor-pointer "></i>
          <input
            type="text"
            className="focus:outline-none grow sm:text-sm w-3/4"
          />
        </div>
      </div>
    </div>
  );
};

export { Search };
