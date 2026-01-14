import React, { useState } from "react";
import reactLogo from "./assets/react.svg";

import Hero from "./components/Hero";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Server } from "lucide-react";
import ServicesPage from "./pages/ServicePage";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
