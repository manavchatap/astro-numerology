import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NumerologyPage from './pages/NumerologyPage';
import AstrologyPage from './pages/AstrologyPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/numerology" element={<NumerologyPage />} />
        <Route path="/astrology" element={<AstrologyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
