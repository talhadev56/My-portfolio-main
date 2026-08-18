import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <About />
              <Project />
              <Skills />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <About />
              <Footer />
            </>
          }
        />
        <Route
          path="/skills"
          element={
            <>
              <Navbar />
              <Skills />
              <Footer />
            </>
          }
        />
        <Route
          path="/project"
          element={
            <>
              <Navbar />
              <Project />
              <Footer />
            </>
          }
        />
        <Route
          path="/contact"
          element={
             <>
              <Navbar />
              <Contact />
              <Footer />
            </>
          }
        />
      
      </Routes>
    </>
  );
};

export default App;
