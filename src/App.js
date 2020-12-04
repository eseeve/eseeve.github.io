import React from 'react'
import { Route } from 'react-router-dom'
import Projects from './Projects.js'
import Home from './Home.js'
import About from './About.js'
import Navbar from './Navbar.js'
import './App.css'

const App = () => {
  return (
      <div className='App'>
        <Navbar />
        <Route path='/about' component={About} />
        <Route path='/projects' component={Projects} />
        <Route exact path='/' component={Home} />
      </div>
  )
}
 
export default App