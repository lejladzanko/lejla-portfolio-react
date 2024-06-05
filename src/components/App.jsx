import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import About from './About';
import Projects from './Projects';
import ProjectDetails from './ProjectDetails';
import Contact from './Contact';
import Footer from './Footer';
import '../scss/App.scss';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <About />
              <Projects />
              <Contact />
            </>
          } />
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
