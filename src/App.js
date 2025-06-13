import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Highlights from './Highlights';
import Contact from './Contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/highlights" element={<Highlights />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;

