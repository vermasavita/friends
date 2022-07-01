const Search = () => {
  return (
    <div className="bg-sky-100 flex w-5/6 ll xl:w-full h-13 sticky top-0 mb-5">
      <div className="bg-white my-3 py-2 w-full h-10 search shadow rounded-md border">
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
