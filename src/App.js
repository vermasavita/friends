import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Login, Signup, Bookmark, AllPost, Profile } from "./pages";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
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
                <Profile/>
              </Home>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
