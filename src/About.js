import React, { useState } from 'react'
import skills from './skills.json'

const Skills = () => {
  const [ skill, setSkill ] = useState('')
  return (
  <div className='animate fadeInUp two'>
    <h1>Skills</h1>
    <div>
      <button className='Skill' onClick={()=> setSkill(skills.python)}>Python</button>
      <button className='Skill' onClick={()=> setSkill(skills.typescript)}>TypeScript</button>
      <button className='Skill' onClick={()=> setSkill(skills.c)}>C/C++</button>
      <button className='Skill' onClick={()=> setSkill(skills.javascript)}>JavaScript</button>
      <button className='Skill' onClick={()=> setSkill(skills.haskell)}>Haskell</button>
    </div>
    <div>
      <button className='Skill' onClick={()=> setSkill(skills.scala)}>Scala</button>
      <button className='Skill' onClick={()=> setSkill(skills.css)}>CSS/HMTL</button>
      <button className='Skill' onClick={()=> setSkill(skills.react)}>React.js</button>
      <button className='Skill' onClick={()=> setSkill(skills.reactNative)}>React Native</button>
      <button className='Skill' onClick={()=> setSkill(skills.node)}>Node.js</button>
      <button className='Skill' onClick={()=> setSkill(skills.django)}>Django</button>
    </div>
    <div>
      <button className='Skill' onClick={()=> setSkill(skills.docker)}>Docker</button>
      <button className='Skill' onClick={()=> setSkill(skills.mongodb)}>MongoDB</button>
      <button className='Skill' onClick={()=> setSkill(skills.graphql)}>GraphQL</button>
      <button className='Skill' onClick={()=> setSkill(skills.reactRedux)}>React-redux</button>
    </div>
    <p>
      {skill}
    </p>
  </div>
)}

const About = () => (
  <div>
    <div className='animate fadeInUp one'>
      <h1>About Me</h1>
      <p>
        I am a Master's student in Aalto University with my major in Computer Science. 
        My focus in my studies is web technologies and their applications.
        I have done small group projects and Fullstack development as course work as well as
        on my free time. My hobbies include visiting museums, bouldering and disc golf.
        The common factor that I enjoy in my hobbies and work is learning more and looking things
        from different perspectives.
      </p>
      <p>
        I am well organized in my work and efficient in time management. Also, I work 
        persistently towards my goals. I am looking for opportunities to work as a programmer 
        and to better my skills in different web development fields.
      </p>
    </div>
    <Skills/>
  </div>
)

export default About