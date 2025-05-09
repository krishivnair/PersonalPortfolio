import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";    
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
