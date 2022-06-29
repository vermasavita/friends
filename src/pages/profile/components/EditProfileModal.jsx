import { useDispatch, useSelector } from "react-redux";
import { closeEditProfileModal } from "../profileModalSlice";

const EditProfileModal = () => {
  const { editProfileModal } = useSelector((state) => state.profileModal);
  const dispatch = useDispatch();
  return (
    <div
      className={`container fixed justify-center items-center ${
        editProfileModal ? "flex" : "hidden"
      }`}
    >
      <div className="w-1/4 bg-white p-3 flex flex-col rounded-lg sm:w-full sm:mx-2 md:w-3/4">
        <div className="flex items-center justify-between ">
          <h2 className="text-lg">Edit Profile</h2>
          <button
            className=" border-cyan-800 px-1.5"
            onClick={() => {
              dispatch(closeEditProfileModal());
            }}
          >
            <i className="bx bx-x text-lg"></i>
          </button>
        </div>
        <div className="flex flex-col mt-3">
          <div className="flex justify-between gap-4 mb-3">
            <div className="gap-2 text-slate-500 text-lg">Avatar</div>
            <div className="w-9/12 relative">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                className="h-12 w-12 object-cover rounded-full sm:h-10 sm:w-11"
              />
              <i className="bx bxs-camera absolute top-7 left-7 text-lg cursor-pointer"></i>
            </div>
          </div>
          <div className="flex justify-between gap-4 mb-3">
            <div className="gap-2 text-slate-500 text-lg">Name</div>
            <input className="border focus:outline-none py-2 px-3 w-9/12 rounded-md text-sm" />
          </div>
          <div className="flex justify-between gap-4 mb-3">
            <div className="gap-2 text-slate-500 text-lg">Website</div>
            <input className="border focus:outline-none py-2 px-3 w-9/12 rounded-md text-sm" />
          </div>
          <div className="flex justify-between gap-4 mb-3">
            <div className="gap-2 text-slate-500 text-lg">Bio</div>
            <input className="border focus:outline-none py-2 px-3 w-9/12 rounded-md text-sm" />
          </div>
        </div>
      </div>
    </div>
  );
};

export { EditProfileModal };
