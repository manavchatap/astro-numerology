import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Common/Navbar';
import Home from './pages/Home';
import NumerologyPage from './pages/NumerologyPage';
import AstrologyPage from './pages/AstrologyPage';
import CompatibilityPage from './pages/CompatibilityPage';
import NameNumerologyPage from './pages/NameNumerologyPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/numerology" element={<NumerologyPage />} />
        <Route path="/astrology" element={<AstrologyPage />} />
        <Route path="/compatibility" element={<CompatibilityPage />} />
        <Route path="/name-numerology" element={<NameNumerologyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
