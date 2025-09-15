import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import FSApp from "./components/FSApp";
import Blog from "./pages/Blog";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/fsapp" element={<FSApp />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
