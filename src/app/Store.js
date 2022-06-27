import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../pages/authentication/authSlice";
import postCardModalReducer from "../components/postCardModal/postCardModalSlice";
import postsReducer from "../pages/home/postSlice";
import {usersReducer} from "../pages/profile/userSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    postCardModal: postCardModalReducer,
    post: postsReducer,
    user: usersReducer,
  },
});
