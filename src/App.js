import React from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Courses from "./routes/Courses";
import SignIn from "./routes/SignIn";
import Signup from "./routes/Signup";
import {Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Courses" element={<Courses/>}/>
      <Route path="/SignIn" element={<SignIn/>}/>
      <Route path="/Signup" element={<Signup/>}/>
    </Routes>
    
    </>
  );
}

export default App;
