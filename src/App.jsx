import Header from './components/Header';
import Footer from './components/Footer';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Routes, Route, Link } from "react-router-dom";
import FramerMouseMove from './components/FramerMouseMove';


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);


  return (
    <>
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <Header />

        {/* Optional animation layer */}
        <FramerMouseMove />

        {/* Main content area (grows to fill screen space) */}
        <main className="flex-grow">
          {/* <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes> */}
        </main>

        {/* Footer stays at bottom */}
        <Footer />
      </div>

    </>
  )
}

export default App
