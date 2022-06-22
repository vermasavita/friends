import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../pages/authentication/authSlice";
import postCardModalReducer from "../components/postCardModal/postCardModalSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    postCardModal: postCardModalReducer,
  },
});
