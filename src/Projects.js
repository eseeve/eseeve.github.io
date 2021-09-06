import React from 'react'
import FullstackCertificate from './images/certificate-fullstack.png'
import DockerCertificate from './images/certificate-docker.png'
import SurveyApp from './images/survey-app.png'

const Projects = () => (
  <div>
    <h1 className='animateSlow fadeIn one'>Projects</h1>
    <div className='animateSlow fadeIn two'>
      <h2>Full stack open</h2>
      <p>
        I have completed the <a href='https://fullstackopen.com/en'>Full stack open 2020</a> course from
        Helsinki University, which focused on building single page applications
        with React.js and Node.js.
      </p>
      <img style={{marginLeft: 'auto', marginRight: 'auto', width: '40%'}} src={FullstackCertificate} alt='Full stack open 2020 certificate Elias Seeve'></img>
    </div>
    <div className='animateSlow fadeIn three'>
      <h2>Survey App</h2>
      <p>
        Survey App is a page for creating different surveys and quizzes. 
        Users can take surveys and collect data own their own surveys.
        This is a full stack project built with React.js as the frontend and Node.js as the backend. The project uses
        MongoDB as the database. The app is hosted on <a href='https://survey-app-seeve.herokuapp.com/#/'>Heroku</a>. <br/>
        View on <a href='https://github.com/eseeve/survey-app'>GitHub</a>.
      </p>
      <img style={{marginLeft: 'auto', marginRight: 'auto', width: '40%'}} src={SurveyApp} alt='Survey app homepage'></img>
    </div>
    <div className='animateSlow fadeIn three' style={{paddingBottom: '100px'}}>
      <h2>DevOps with Docker</h2>
      <p>
        I have completed the <a href='https://devopswithdocker.com/'>DevOps with Docker</a> course from
        Helsinki University, which focused on containerizing applications and docker-compose.
      </p>
      <img style={{marginLeft: 'auto', marginRight: 'auto', width: '40%'}} src={DockerCertificate} alt='Full stack open 2020 certificate Elias Seeve'></img>
    </div>
  </div>
)

export default Projects