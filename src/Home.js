import React from 'react'
import skating from './images/skating.jpg'

const Home = () => (
  <div>
    <img className='animateSlow fadeIn two image' src={skating} alt='Skating the minibowl in Turku'></img>
    <div className='animate fadeIn one' >
      <h1>Hello!</h1>
    <p className='container'>
      My name is Elias and I am enthusiastic about disc golf,
      web development and modern art.
    </p>
   </div>
  </div>
)

export default Home