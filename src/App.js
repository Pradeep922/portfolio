import React from 'react';
import './App.css';
import Home from './routes/Home';
import About from './routes/About';
import Skills from './routes/Skills';
import Projects from './routes/Projects';
import Contact from './routes/Contact';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
        </Routes>
    
    </>
  );
}

export default App;
