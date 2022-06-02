import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Login, Signup, Bookmark, AllPost, Profile } from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        theme="colored"
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route
            path="/explore"
            element={
              <Home>
                <AllPost />
              </Home>
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
              <Home>
                <Profile />
              </Home>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
