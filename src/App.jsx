import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Home from "./Pages/Home";
import WorksPage from "./components/Works";
import Resume from "./components/Resume";
import Contact from "./pages/Contact";

import "./App.css";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} />

        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/works" element={<WorksPage />} />
             <Route path="/resume" element={<Resume />} />
             <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
