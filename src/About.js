import React from 'react'

const Skills = () => (
  <div className='animate fadeInUp two'>
    <h1>Skills</h1>
    <div>
      <button className='Skill'>Python</button>
      <button className='Skill'>TypeScript</button>
      <button className='Skill'>C/C++</button>
      <button className='Skill'>JavaScript</button>
    </div>
    <div>
      <button className='Skill'>Scala</button>
      <button className='Skill'>CSS/HMTL</button>
      <button className='Skill'>React.js</button>
      <button className='Skill'>React Native</button>
      <button className='Skill'>Node.js</button>
    </div>
    <div>
      <button className='Skill'>MongoDB</button>
      <button className='Skill'>GraphQL</button>
      <button className='Skill'>React-redux</button>
    </div>
  </div>
)

const About = () => (
  <div>
    <div className='animate fadeInUp one'>
      <h1>About Me</h1>
      <p>
        I am a 3rd year student in Aalto University with my major in Automation
        and minor in Computer Science. I am passionate about programming and technology.
        Consequently, I am planning to get my Master's degree on Computer Science.
        I have done small group projects and Fullstack development as course work as well as
        on my free time. My hobbies include visiting museums, bouldering and skating.
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