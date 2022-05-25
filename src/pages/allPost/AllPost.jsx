import { SinglePost } from "../home/components/SinglePost";

const AllPost = () => {
  return (
    <div className="w-4/5 xl:w-full px-1">
      <div className=" rounded-md shadow w-full flex justify-between items-center  bg-white">
        <button className="border w-1/2 px-4 py-2 cursor-pointer hover:opacity-50">
          Trending
        </button>
        <button className="border w-1/2 px-4 py-2 cursor-pointer hover:opacity-50">
          Latest
        </button>
      </div>
      <div className="flex flex-col">
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />

        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
      </div>
    </div>
  );
};

export { AllPost };
