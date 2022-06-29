import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  editProfileModal: false,
};

const editProfileModalSlice = createSlice({
  name: "profileModal",
  initialState,
  reducers: {
    openEditProfileModal: (state) => {
      state.editProfileModal = true;
    },
    closeEditProfileModal: (state) => {
      state.editProfileModal = false;
    },
  },
});

export const { openEditProfileModal, closeEditProfileModal } =
  editProfileModalSlice.actions;
export default editProfileModalSlice.reducer;
