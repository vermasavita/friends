import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Login, Signup, Bookmark, AllPost, Profile } from "./pages";
import { ToastContainer } from "react-toastify";
import { RequireAuth } from "./RequiresAuth";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
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
                <Home />
              </RequireAuth>
            }
          />
          <Route
            path="/explore"
            element={
              <RequireAuth>
                <Home>
                  <AllPost />
                </Home>
              </RequireAuth>
            }
          />
          <Route
            path="/bookmark"
            element={
              <Home>
                <Bookmark />
              </Home>
            }
          />
          <Route
            path="/profile"
            element={
              <RequireAuth>
                <Home>
                  <Profile />
                </Home>
              </RequireAuth>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
