import { useDispatch } from "react-redux";
import { openPostCardModal } from "../postCardModal/postCardModalSlice";
const PostCardModalTwo = () => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => dispatch(openPostCardModal())}
      className=" bg-sky-100 flex flex-col w-5/6 ll xl:w-full h-13 sticky top-0 mb-5"
    >
      <div className="bg-white my-2 py-2 w-full h-10s rounded-md">
        <div className="sm:w-11/12  flex justify-between w-full px-5 items-center">
          <p className="text-slate-400">Write something.....</p>
          <i class="bx bx-plus text-xl text-blue-600 font-bold"></i>
        </div>
      </div>
    </div>
  );
};

export { PostCardModalTwo };
