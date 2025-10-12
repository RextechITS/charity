import Header from './components/Header';
import Footer from './components/Footer';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Routes, Route, Link } from "react-router-dom";
import FramerMouseMove from './components/FramerMouseMove';
import Home from './pages/Home';
import About from './pages/About';
import Causes from './pages/Causes';
import Contact from './pages/Contact';
import { NavLink } from 'react-router-dom';
import Orphanage from './pages/Orphanage';
import HealthCare from './pages/HealthCare';
import PipeBorneWater from './pages/PipeBorneWater';
import Donate from './pages/Donate';



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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/causes" element={<Causes />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/donate" element={<Donate />} />

            {/* Match submenu URLs */}
            <Route path="/causes/orphanage" element={<Orphanage />} />
            <Route path="/causes/health-care" element={<HealthCare />} />
            <Route path="/causes/water" element={<PipeBorneWater />} />
          </Routes>

        </main>

        {/* Footer stays at bottom */}
        <Footer />
      </div>

    </>
  )
}

export default App
