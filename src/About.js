import React from 'react'

const Skills = () => {
  return (
    <div className='Skills'>
      <h1>Skills</h1>
      <div>
        <button className='Skill'>Python</button>
        <button className='Skill'>TypeScript</button>
        <button className='Skill'>C#</button>
        <button className='Skill'>JavaScript</button>
        <div className='skill_break'></div>
        <button className='Skill'>CSS/HTML</button>
        <button className='Skill'>React</button>
        <button className='Skill'>React Native</button>
        <button className='Skill'>Node.js</button>
        <button className='Skill'>.NET</button>
        <div className='skill_break'></div>
        <button className='Skill'>Docker</button>
        <button className='Skill'>MongoDB</button>
        <button className='Skill'>GraphQL</button>
        <button className='Skill'>React-redux</button>
      </div>
    </div>
  )
}

const About = () => (
  <div>
    <div>
      <h1>About Me</h1>
      <p className='container'>
        I am a Master's student in Aalto University with my major in Computer Science.
        My focus in my studies is web technologies and their applications.
        Currently, I am working as a Full Stack developer at <a href='https://www.wapice.com/'>Wapice</a>. My hobbies include visiting museums, bouldering and disc golf.
        The common factor that I enjoy in my hobbies and work is learning more and looking things
        from different perspectives.
      </p>
      <p className='container'>
        I am well organized in my work and efficient in time management. Also, I work
        persistently towards my goals. I am looking for thesis opportunities in the web development field.
      </p>
    </div>
    <Skills />
  </div>
)

export default About