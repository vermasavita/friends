import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Wrapper,
  Login,
  Signup,
  Bookmark,
  AllPost,
  Profile,
  Feed,
  EditProfileModal,
} from "./pages";
import { ToastContainer } from "react-toastify";
import { RequireAuth } from "./RequiresAuth";
import "react-toastify/dist/ReactToastify.css";
import { FollowingModal, PostCardM } from "./components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllPost, getUserPost } from "./pages/home/postSlice";
import { getUsers } from "./pages/profile/userSlice";
import { AnyProfile } from "./pages/profile/AnyProfile";

const App = () => {
  const dispatch = useDispatch();
  const { token, user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (token) {
      dispatch(getAllPost());
      dispatch(getUserPost(user.username));
      dispatch(getUsers());
    }
  }, [token]);
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        theme="light"
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/"
            element={
              <RequireAuth>
                <Wrapper>
                  <Feed />
                </Wrapper>
              </RequireAuth>
            }
          />
          <Route
            path="/explore"
            element={
              <RequireAuth>
                <Wrapper>
                  <AllPost />
                </Wrapper>
              </RequireAuth>
            }
          />
          <Route path="" />
          <Route
            path="/bookmark"
            element={
              <Wrapper>
                <Bookmark />
              </Wrapper>
            }
          />
          <Route
            path="/profile"
            element={
              <RequireAuth>
                <Wrapper>
                  <Profile />
                </Wrapper>
              </RequireAuth>
            }
          />
        </Routes>

        <PostCardM />
        <EditProfileModal />
        <FollowingModal />
      </Router>
    </div>
  );
};

export default App;
