import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Projects from './Projects.js'
import Home from './Home.js'
import About from './About.js'
import Navbar from './Navbar.js'
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App