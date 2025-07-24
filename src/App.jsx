import { useState } from 'react'
import React from "react";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Features from "./components/features/Features";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import './App.css'

function App() {
  const [bgColor, setBgColor]=useState("white");

  return (
    <>
      <div id="main" className="w-full bg-black  max-h-full ">
      <div className="sm:mx-1 mx-4 flex flex-col">
        <Navbar />
        <Banner />
        <Features />
        <Projects /> 
        <Contact />
      </div>
    </div>
    </>
  )
}

export default App
