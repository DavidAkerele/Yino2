// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Music from "./pages/Music";
import Writing from "./pages/Writing";
import Photography from "./pages/Photography";
import Contact from "./pages/Contact";
import Architecture from "./pages/Architecture";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex items-center justify-center flex-col ">
      <Router>
        {/* Include Navbar component */}
        <Navbar />

        {/* Main content area */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/music" element={<Music />} />
          <Route path="/writing" element={<Writing />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/architecture" element={<Architecture />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* <div style={{ marginTop: '10px' }}> 
      </div> */}
      </Router>
    </div>
  );
}

export default App;
