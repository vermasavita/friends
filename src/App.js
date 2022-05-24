import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Login, Signup } from "./pages";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
