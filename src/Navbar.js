import React from 'react';
import { Link } from 'react-router-dom'
import GitHubLogo from './images/GitHub-Mark-Light-32px.png'
import './App.css';

const Navbar=() => {
  return (
    <div className='Navigation'>
      <a className='GitHubLogo' href='https://github.com/eseeve'><img style={{float: 'left'}}src={GitHubLogo} alt='Link to GitHub'/></a>
      <div className='Navigation-sub'>
        <Link to='/' className='Item'>Home</Link>
        <Link to='/about' className='Item'>About Me</Link>
        <Link to='/projects' className='Item'>Projects</Link>
      </div>
    </div>
  )
}

export default Navbar;