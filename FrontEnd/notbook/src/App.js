import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navebar from "./components/Navebar";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <>
      <Router>  
        <Navebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
